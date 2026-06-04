const SHEET_DEFINITIONS = {
  Users: [
    "user_id",
    "name",
    "user_type",
    "gender",
    "age",
    "height_cm",
    "current_weight_kg",
    "experience",
    "goal",
    "weekly_days",
    "session_minutes",
    "body_conditions",
    "created_at",
    "updated_at",
  ],
  BodyRecords: [
    "record_id",
    "user_id",
    "date",
    "weight_kg",
    "body_fat_percent",
    "memo",
    "created_at",
  ],
  WorkoutLogs: [
    "log_id",
    "user_id",
    "date",
    "equipment_id",
    "set_number",
    "weight_kg",
    "reps",
    "target_reps",
    "success_yn",
    "perceived_difficulty",
    "pain",
    "memo",
    "created_at",
  ],
  Equipment: [
    "equipment_id",
    "name_ko",
    "name_en",
    "category",
    "target_muscle",
    "difficulty",
    "description",
    "image_url",
    "caution",
    "default_sets",
    "default_reps",
    "start_weight_kg",
    "weight_unit_kg",
    "updated_at",
  ],
  RoutineTemplates: [
    "routine_id",
    "routine_name",
    "user_types",
    "goals",
    "condition_type",
    "equipment_id",
    "exercise_name",
    "order_no",
    "default_sets",
    "default_reps",
    "category",
    "updated_at",
  ],
};

function doGet() {
  setupSheets_();
  return json_({ ok: true, message: "Bareun Gym Coach API is ready." });
}

function doPost(event) {
  try {
    setupSheets_();
    const payload = JSON.parse(event.postData.contents || "{}");
    const action = payload.action;
    const data = payload.data || {};

    if (action === "syncAll") {
      const result = {
        user: upsert_("Users", "user_id", data.user),
        bodyRecords: appendMany_("BodyRecords", data.bodyRecords),
        workoutLogs: appendMany_("WorkoutLogs", data.workoutLogs),
        equipment: upsertMany_("Equipment", "equipment_id", data.equipment),
        routineTemplates: replaceRoutineTemplates_(data.routineTemplates),
      };
      return json_({ ok: true, result });
    }

    if (action === "saveUser") return json_({ ok: true, result: upsert_("Users", "user_id", data) });
    if (action === "appendBodyRecord") return json_({ ok: true, result: append_("BodyRecords", data) });
    if (action === "appendWorkoutLog") return json_({ ok: true, result: append_("WorkoutLogs", data) });
    if (action === "syncEquipment") return json_({ ok: true, result: upsertMany_("Equipment", "equipment_id", data) });
    if (action === "syncRoutineTemplates") return json_({ ok: true, result: replaceRoutineTemplates_(data) });

    return json_({ ok: false, error: "Unknown action: " + action }, 400);
  } catch (error) {
    return json_({ ok: false, error: String(error), stack: error.stack }, 500);
  }
}

function setupSheets_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(SHEET_DEFINITIONS).forEach((sheetName) => {
    const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
    const headers = SHEET_DEFINITIONS[sheetName];
    const currentHeaders = sheet.getRange(1, 1, 1, Math.max(headers.length, sheet.getLastColumn() || 1)).getValues()[0];
    const needsHeader = headers.some((header, index) => currentHeaders[index] !== header);
    if (needsHeader) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.setFrozenRows(1);
    }
  });
}

function upsertMany_(sheetName, keyColumn, rows) {
  if (!Array.isArray(rows)) return { count: 0 };
  rows.forEach((row) => upsert_(sheetName, keyColumn, row));
  return { count: rows.length };
}

function appendMany_(sheetName, rows) {
  if (!Array.isArray(rows)) return { count: 0 };
  rows.forEach((row) => append_(sheetName, row));
  return { count: rows.length };
}

function append_(sheetName, row) {
  if (!row) return { skipped: true };
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const headers = SHEET_DEFINITIONS[sheetName];
  const normalized = normalizeRow_(headers, row);
  sheet.appendRow(normalized);
  return { appended: true };
}

function upsert_(sheetName, keyColumn, row) {
  if (!row) return { skipped: true };
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const headers = SHEET_DEFINITIONS[sheetName];
  const keyIndex = headers.indexOf(keyColumn);
  const keyValue = row[keyColumn];
  if (!keyValue) return append_(sheetName, row);

  const lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    const keys = sheet.getRange(2, keyIndex + 1, lastRow - 1, 1).getValues().flat();
    const foundIndex = keys.findIndex((value) => String(value) === String(keyValue));
    if (foundIndex >= 0) {
      sheet.getRange(foundIndex + 2, 1, 1, headers.length).setValues([normalizeRow_(headers, row)]);
      return { updated: true };
    }
  }

  return append_(sheetName, row);
}

function replaceRoutineTemplates_(templates) {
  if (!Array.isArray(templates)) return { count: 0 };
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RoutineTemplates");
  const headers = SHEET_DEFINITIONS.RoutineTemplates;
  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).clearContent();
  }
  const rows = [];
  templates.forEach((template) => {
    (template.items || []).forEach((item, index) => {
      rows.push(normalizeRow_(headers, {
        routine_id: template.id,
        routine_name: template.name,
        user_types: (template.userTypes || []).join(", "),
        goals: (template.goals || []).join(", "),
        condition_type: (template.conditions || []).join(", "),
        equipment_id: item.equipmentId || "",
        exercise_name: item.name || "",
        order_no: index + 1,
        default_sets: item.sets || "",
        default_reps: item.reps || "",
        category: item.category || "",
        updated_at: new Date().toISOString(),
      }));
    });
  });
  if (rows.length) sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  return { count: rows.length };
}

function normalizeRow_(headers, row) {
  return headers.map((header) => {
    const value = row[header];
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "boolean") return value ? "Y" : "N";
    if (value === undefined || value === null) return "";
    return value;
  });
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// END_OF_BAREUN_GYM_COACH_APPS_SCRIPT
