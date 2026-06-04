var SHEETS = {
  Users: ["user_id", "name", "user_type", "gender", "age", "height_cm", "current_weight_kg", "experience", "goal", "weekly_days", "session_minutes", "body_conditions", "created_at", "updated_at"],
  BodyRecords: ["record_id", "user_id", "date", "weight_kg", "body_fat_percent", "memo", "created_at"],
  WorkoutLogs: ["log_id", "user_id", "date", "equipment_id", "set_number", "weight_kg", "reps", "target_reps", "success_yn", "perceived_difficulty", "pain", "memo", "created_at"],
  Equipment: ["equipment_id", "name_ko", "name_en", "category", "target_muscle", "difficulty", "description", "image_url", "caution", "default_sets", "default_reps", "start_weight_kg", "weight_unit_kg", "updated_at"],
  RoutineTemplates: ["routine_id", "routine_name", "user_types", "goals", "condition_type", "equipment_id", "exercise_name", "order_no", "default_sets", "default_reps", "category", "updated_at"]
};

function doGet() {
  setupSheets_();
  return json_({ ok: true, message: "Bareun Gym Coach API is ready." });
}

function doPost(e) {
  try {
    setupSheets_();
    var payload = JSON.parse((e.postData && e.postData.contents) || "{}");
    var action = payload.action;
    var data = payload.data || {};
    var result;

    if (action === "syncAll") {
      result = {
        user: upsert_("Users", "user_id", data.user),
        bodyRecords: appendMany_("BodyRecords", data.bodyRecords),
        workoutLogs: appendMany_("WorkoutLogs", data.workoutLogs),
        equipment: upsertMany_("Equipment", "equipment_id", data.equipment),
        routineTemplates: replaceRoutineTemplates_(data.routineTemplates)
      };
      return json_({ ok: true, result: result });
    }

    if (action === "saveUser") {
      return json_({ ok: true, result: upsert_("Users", "user_id", data) });
    }
    if (action === "appendBodyRecord") {
      return json_({ ok: true, result: append_("BodyRecords", data) });
    }
    if (action === "appendWorkoutLog") {
      return json_({ ok: true, result: append_("WorkoutLogs", data) });
    }
    if (action === "syncEquipment") {
      return json_({ ok: true, result: upsertMany_("Equipment", "equipment_id", data) });
    }
    if (action === "syncRoutineTemplates") {
      return json_({ ok: true, result: replaceRoutineTemplates_(data) });
    }

    return json_({ ok: false, error: "Unknown action: " + action });
  } catch (err) {
    return json_({ ok: false, error: String(err), stack: err && err.stack });
  }
}

function setupSheets_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var names = Object.keys(SHEETS);
  for (var i = 0; i < names.length; i += 1) {
    var name = names[i];
    var headers = SHEETS[name];
    var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
    var lastColumn = Math.max(headers.length, sheet.getLastColumn() || 1);
    var current = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
    var needsHeader = false;
    for (var j = 0; j < headers.length; j += 1) {
      if (current[j] !== headers[j]) {
        needsHeader = true;
        break;
      }
    }
    if (needsHeader) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.setFrozenRows(1);
    }
  }
}

function appendMany_(sheetName, rows) {
  if (!Array.isArray(rows)) {
    return { count: 0 };
  }
  for (var i = 0; i < rows.length; i += 1) {
    append_(sheetName, rows[i]);
  }
  return { count: rows.length };
}

function upsertMany_(sheetName, keyColumn, rows) {
  if (!Array.isArray(rows)) {
    return { count: 0 };
  }
  for (var i = 0; i < rows.length; i += 1) {
    upsert_(sheetName, keyColumn, rows[i]);
  }
  return { count: rows.length };
}

function append_(sheetName, row) {
  if (!row) {
    return { skipped: true };
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var headers = SHEETS[sheetName];
  sheet.appendRow(normalizeRow_(headers, row));
  return { appended: true };
}

function upsert_(sheetName, keyColumn, row) {
  if (!row) {
    return { skipped: true };
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var headers = SHEETS[sheetName];
  var keyIndex = headers.indexOf(keyColumn);
  var keyValue = row[keyColumn];
  if (!keyValue || keyIndex < 0) {
    return append_(sheetName, row);
  }

  var lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    var values = sheet.getRange(2, keyIndex + 1, lastRow - 1, 1).getValues();
    for (var i = 0; i < values.length; i += 1) {
      if (String(values[i][0]) === String(keyValue)) {
        sheet.getRange(i + 2, 1, 1, headers.length).setValues([normalizeRow_(headers, row)]);
        return { updated: true };
      }
    }
  }

  return append_(sheetName, row);
}

function replaceRoutineTemplates_(templates) {
  if (!Array.isArray(templates)) {
    return { count: 0 };
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RoutineTemplates");
  var headers = SHEETS.RoutineTemplates;
  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, headers.length).clearContent();
  }

  var rows = [];
  for (var i = 0; i < templates.length; i += 1) {
    var template = templates[i];
    var items = template.items || [];
    for (var j = 0; j < items.length; j += 1) {
      var item = items[j];
      rows.push(normalizeRow_(headers, {
        routine_id: template.id,
        routine_name: template.name,
        user_types: (template.userTypes || []).join(", "),
        goals: (template.goals || []).join(", "),
        condition_type: (template.conditions || []).join(", "),
        equipment_id: item.equipmentId || "",
        exercise_name: item.name || "",
        order_no: j + 1,
        default_sets: item.sets || "",
        default_reps: item.reps || "",
        category: item.category || "",
        updated_at: new Date().toISOString()
      }));
    }
  }

  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
  return { count: rows.length };
}

function normalizeRow_(headers, row) {
  var result = [];
  for (var i = 0; i < headers.length; i += 1) {
    var value = row[headers[i]];
    if (Array.isArray(value)) {
      value = value.join(", ");
    }
    if (typeof value === "boolean") {
      value = value ? "Y" : "N";
    }
    if (value === undefined || value === null) {
      value = "";
    }
    result.push(value);
  }
  return result;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

// END_OF_SAFE_BAREUN_GYM_COACH_APPS_SCRIPT
