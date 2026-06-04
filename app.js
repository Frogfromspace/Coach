const storageKey = "bareunGymCoachState";
const syncConfigKey = "bareunGymCoachSyncConfig";
const localUserId = "local-user";

const tempoPresets = {
  beginner: { setup: 3, concentric: 2, hold: 1, eccentric: 2 },
  posture: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
  hypertrophy: { setup: 3, concentric: 1, hold: 1, eccentric: 3 },
  rehab: { setup: 5, concentric: 2, hold: 2, eccentric: 4 },
};

const equipment = [
  {
    id: "eq001",
    ko: "힙 어브덕션",
    en: "Hip Abduction / Adduction",
    category: "하체",
    target: "중둔근, 내전근",
    difficulty: "쉬움",
    description: "앉아서 다리를 벌리거나 모아 골반 안정성을 돕는 기구입니다.",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=800&q=80",
    caution: "허리를 과하게 젖히지 말고 통증 없는 범위에서 천천히 움직이세요.",
    defaultSets: 3,
    defaultReps: 15,
    startWeight: 10,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 2, eccentric: 2 },
    coaching: {
      setup: ["등을 등받이에 붙이세요.", "손잡이를 잡고 어깨를 낮추세요.", "복부에 힘을 주세요."],
      concentric: "무릎을 바깥으로 벌리세요.",
      hold: "끝 지점에서 유지하세요.",
      eccentric: "천천히 다리를 모으세요.",
    },
    guide: [
      ["준비", "등을 등받이에 붙이고 손잡이를 잡으세요.", 3],
      ["밀기", "무릎을 천천히 바깥으로 벌리세요.", 2],
      ["버티기", "끝 지점에서 1초 멈추세요.", 1],
      ["돌아오기", "호흡을 내쉬며 천천히 돌아오세요.", 3],
    ],
  },
  {
    id: "eq002",
    ko: "레그 프레스",
    en: "Leg Press",
    category: "하체",
    target: "대퇴사두근, 둔근",
    difficulty: "보통",
    description: "앉아서 발판을 밀어 하체 근력을 키우는 대표 기구입니다.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80",
    caution: "무릎을 완전히 잠그지 말고 발끝과 무릎 방향을 맞추세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 30,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 0, eccentric: 2 },
    coaching: {
      setup: ["허리를 등받이에 밀착하세요.", "발을 어깨너비로 놓으세요.", "무릎과 발끝 방향을 맞추세요."],
      concentric: "발판을 밀어주세요.",
      hold: "무릎을 잠그지 말고 통제하세요.",
      eccentric: "천천히 돌아오세요.",
    },
    guide: [
      ["준비", "발을 어깨너비로 놓고 허리를 붙이세요.", 3],
      ["밀기", "발판을 부드럽게 밀어 올리세요.", 2],
      ["버티기", "무릎을 잠그기 전 멈추세요.", 1],
      ["돌아오기", "천천히 무릎을 굽혀 시작점으로 돌아오세요.", 3],
    ],
  },
  {
    id: "eq003",
    ko: "체스트 프레스",
    en: "Chest Press",
    category: "상체",
    target: "가슴, 삼두",
    difficulty: "보통",
    description: "앉아서 손잡이를 앞으로 밀어 가슴과 팔을 단련합니다.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    caution: "어깨 통증이 있으면 범위를 줄이고 무겁게 시작하지 마세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 15,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 2 },
    coaching: {
      setup: ["손잡이를 가슴 중앙 높이에 맞추세요.", "어깨를 낮추세요.", "허리를 등받이에 붙이세요."],
      concentric: "앞으로 밀어주세요.",
      hold: "가슴에 힘을 유지하세요.",
      eccentric: "천천히 돌아오세요.",
    },
    guide: [
      ["준비", "손잡이가 가슴 중앙 높이에 오도록 조정하세요.", 3],
      ["밀기", "팔꿈치를 완전히 잠그지 않고 앞으로 미세요.", 2],
      ["버티기", "가슴에 힘을 느끼며 잠깐 멈추세요.", 1],
      ["돌아오기", "어깨가 말리지 않게 천천히 돌아오세요.", 3],
    ],
  },
  {
    id: "eq004",
    ko: "랫 풀다운",
    en: "Lat Pulldown",
    category: "상체",
    target: "등, 이두",
    difficulty: "보통",
    description: "위의 바를 아래로 당겨 등 근육을 활성화합니다.",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80",
    caution: "목 뒤로 당기지 말고 쇄골 앞쪽으로 당기세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 15,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 2 },
    coaching: {
      setup: ["허벅지 패드를 고정하세요.", "가슴을 세우세요.", "어깨를 낮추세요."],
      concentric: "바를 쇄골 쪽으로 당기세요.",
      hold: "등을 조이며 유지하세요.",
      eccentric: "천천히 바를 올리세요.",
    },
    guide: [
      ["준비", "허벅지 패드를 고정하고 가슴을 세우세요.", 3],
      ["당기기", "팔꿈치를 아래로 내린다는 느낌으로 당기세요.", 2],
      ["버티기", "등을 조이며 1초 멈추세요.", 1],
      ["돌아오기", "어깨가 올라가지 않게 천천히 올리세요.", 3],
    ],
  },
  {
    id: "eq005",
    ko: "하이퍼 익스텐션",
    en: "Hyper Extension",
    category: "코어",
    target: "허리, 둔근, 햄스트링",
    difficulty: "보통",
    description: "엉덩이와 등 뒤쪽 근육을 안전하게 깨우는 운동입니다.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    caution: "허리를 꺾어 올리지 말고 몸통이 일직선이 되는 지점까지만 올라오세요.",
    defaultSets: 2,
    defaultReps: 10,
    startWeight: 0,
    unit: 2.5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["패드에 골반을 고정하세요.", "몸통을 길게 만드세요.", "목에 힘을 빼세요."],
      concentric: "엉덩이에 힘을 주며 올라오세요.",
      hold: "몸이 일직선인 지점에서 유지하세요.",
      eccentric: "등을 둥글게 말지 않고 천천히 내려가세요.",
    },
    guide: [
      ["준비", "패드에 골반을 고정하고 몸통을 길게 만드세요.", 3],
      ["내려가기", "등을 둥글게 말지 않고 천천히 내려가세요.", 3],
      ["올라오기", "엉덩이에 힘을 주며 몸통을 들어 올리세요.", 2],
      ["정렬", "몸이 일직선이 되면 멈추세요.", 1],
    ],
  },
  {
    id: "eq006",
    ko: "덤벨",
    en: "Dumbbell",
    category: "전신",
    target: "전신",
    difficulty: "쉬움",
    description: "가벼운 중량으로 팔, 어깨, 균형 운동을 다양하게 수행합니다.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    caution: "처음에는 가벼운 무게로 자세를 먼저 확인하세요.",
    defaultSets: 2,
    defaultReps: 12,
    startWeight: 2,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["손목을 곧게 세우세요.", "어깨를 낮추세요.", "복부에 힘을 주세요."],
      concentric: "반동 없이 들어 올리세요.",
      hold: "목에 힘이 들어가지 않게 유지하세요.",
      eccentric: "중량을 통제하며 천천히 내리세요.",
    },
    guide: [
      ["준비", "손목을 곧게 세우고 어깨를 낮추세요.", 3],
      ["들기", "반동 없이 천천히 들어 올리세요.", 2],
      ["버티기", "목에 힘이 들어가지 않게 멈추세요.", 1],
      ["내리기", "중량을 통제하며 천천히 내리세요.", 3],
    ],
  },
];

const routineTemplates = [
  {
    id: "elementary-posture",
    name: "초등학생 자세 교정",
    userTypes: ["초등학생"],
    goals: ["자세교정", "체력향상"],
    conditions: [],
    priority: 90,
    items: [
      { name: "제자리 걷기", sets: 1, reps: "3분", category: "전신" },
      { name: "벽에 등 붙이고 서기", sets: 2, reps: "30초", category: "자세" },
      { name: "고양이 자세", sets: 2, reps: "8회", category: "코어" },
      { name: "가벼운 밴드 당기기", sets: 2, reps: "10회", category: "상체" },
      { name: "한발 서기", sets: 2, reps: "20초", category: "균형" },
      { name: "가벼운 스트레칭", sets: 1, reps: "3분", category: "전신" },
    ],
  },
  {
    id: "middle-school-low-fitness",
    name: "중학생 체력 부족",
    userTypes: ["중학생"],
    goals: ["체력향상", "자세교정"],
    conditions: ["체력 부족"],
    priority: 80,
    items: [
      { name: "걷기 또는 가벼운 자전거", sets: 1, reps: "5~10분", category: "전신" },
      { name: "맨몸 스쿼트", sets: 2, reps: "10회", category: "하체" },
      { equipmentId: "eq002", sets: 2, reps: "12회" },
      { equipmentId: "eq004", sets: 2, reps: "12회" },
      { equipmentId: "eq001", sets: 2, reps: "15회" },
      { name: "플랭크", sets: 2, reps: "15~20초", category: "코어" },
    ],
  },
  {
    id: "female-40-pelvis-knee",
    name: "40대 이상 여성 골반·무릎 관리",
    userTypes: ["40대 이상 여성", "성인 여성"],
    goals: ["자세교정", "통증완화", "체중감량"],
    conditions: ["골반 비대칭", "무릎 불편"],
    priority: 100,
    items: [
      { name: "러닝머신 걷기", sets: 1, reps: "5~10분", category: "전신" },
      { equipmentId: "eq001", sets: 3, reps: "15~20회" },
      { equipmentId: "eq002", sets: 3, reps: "12~15회" },
      { equipmentId: "eq004", sets: 3, reps: "12~15회" },
      { equipmentId: "eq005", sets: 2, reps: "10~12회" },
      { equipmentId: "eq006", name: "가벼운 덤벨 사이드 레이즈", sets: 2, reps: "12회", category: "상체" },
      { name: "스트레칭", sets: 1, reps: "5분", category: "전신" },
    ],
  },
  {
    id: "male-40-frozen-shoulder",
    name: "40대 이상 남성 오십견 관리",
    userTypes: ["40대 이상 남성", "성인 남성"],
    goals: ["통증완화", "체력향상", "자세교정"],
    conditions: ["오십견", "어깨 불편"],
    priority: 100,
    items: [
      { name: "걷기", sets: 1, reps: "10분", category: "전신" },
      { name: "어깨 원 그리기", sets: 2, reps: "10회", category: "상체" },
      { equipmentId: "eq004", name: "가벼운 랫 풀다운", sets: 2, reps: "12회", category: "상체" },
      { equipmentId: "eq006", name: "가벼운 덤벨 외회전", sets: 2, reps: "12회", category: "상체" },
      { equipmentId: "eq002", sets: 2, reps: "12회" },
      { equipmentId: "eq001", sets: 2, reps: "15회" },
      { name: "가슴 스트레칭", sets: 1, reps: "30초", category: "상체" },
    ],
  },
  {
    id: "beginner-general",
    name: "초보자 기본 루틴",
    userTypes: ["성인 여성", "성인 남성", "40대 이상 여성", "40대 이상 남성", "중학생"],
    goals: ["체중감량", "근력증가", "자세교정", "통증완화", "체력향상"],
    conditions: [],
    priority: 10,
    items: [
      { name: "러닝머신 걷기", sets: 1, reps: "5~10분", category: "전신" },
      { equipmentId: "eq001", sets: 2, reps: "15회" },
      { equipmentId: "eq002", sets: 2, reps: "12회" },
      { equipmentId: "eq004", sets: 2, reps: "12회" },
      { equipmentId: "eq006", sets: 2, reps: "12회" },
      { name: "가벼운 스트레칭", sets: 1, reps: "5분", category: "전신" },
    ],
  },
];

const defaultState = {
  profile: {
    name: "사용자",
    userType: "40대 이상 여성",
    gender: "여성",
    age: 40,
    height: 165,
    weight: 65,
    experience: "처음",
    goal: "자세교정",
    weeklyDays: 3,
    sessionMinutes: 30,
    conditions: ["골반 비대칭", "체력 부족"],
  },
  logs: [],
  bodyRecords: [],
  selectedEquipmentId: "eq001",
};

let state = loadState();
let selectedBodyMetric = "weight";
let routineRefreshOffset = 0;
let workoutSession = {
  equipmentId: null,
  weightKg: 0,
  targetSets: 1,
  targetReps: 1,
  restSec: 30,
};
let workoutTimer = {
  active: false,
  paused: false,
  intervalId: null,
  animationId: null,
  equipmentId: null,
  setIndex: 0,
  repIndex: 0,
  phase: "setup",
  remaining: 0,
  phaseDuration: 1,
  phaseStartedAt: 0,
  elapsedMs: 0,
  completed: false,
};

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return cloneDefaultState();
  try {
    const parsed = JSON.parse(raw);
    const nextState = { ...cloneDefaultState(), ...parsed };
    nextState.profile = { ...cloneDefaultState().profile, ...(parsed.profile || {}) };
    nextState.profile.conditions = Array.isArray(nextState.profile.conditions) ? nextState.profile.conditions : [];
    nextState.logs = Array.isArray(nextState.logs) ? nextState.logs : [];
    nextState.bodyRecords = Array.isArray(nextState.bodyRecords) ? nextState.bodyRecords : [];
    return nextState;
  } catch {
    return cloneDefaultState();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function loadSyncConfig() {
  try {
    return JSON.parse(localStorage.getItem(syncConfigKey) || "{}");
  } catch {
    return {};
  }
}

function saveSyncConfig(config) {
  localStorage.setItem(syncConfigKey, JSON.stringify(config));
}

function createId(prefix) {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function currentMonthKey() {
  return todayISO().slice(0, 7);
}

function getEquipment(id) {
  return equipment.find((item) => item.id === id) || equipment[0];
}

function roundToUnit(value, unit) {
  if (value <= 0) return 0;
  return Math.max(0, Math.round(value / unit) * unit);
}

function calculateNextWeight({ weight, reps, targetReps, difficulty, pain, unit }) {
  if (pain) return { weight: roundToUnit(weight * 0.8, unit), reason: "통증으로 감량" };
  const rate = targetReps > 0 ? reps / targetReps : 0;
  if (rate >= 1 && difficulty === "쉬움") return { weight: roundToUnit(weight * 1.05, unit), reason: "성공률 100%" };
  if (rate >= 0.9) return { weight: roundToUnit(weight, unit), reason: "유지" };
  if (rate >= 0.7) return { weight: roundToUnit(weight * 0.95, unit), reason: "소폭 감량" };
  return { weight: roundToUnit(weight * 0.9, unit), reason: "감량" };
}

function hasUnsafeEquipment(equipmentId, conditionText) {
  if ((conditionText.includes("어깨") || conditionText.includes("오십견")) && equipmentId === "eq003") return true;
  if (conditionText.includes("무릎") && equipmentId === "eq002") return true;
  return false;
}

function scoreRoutineTemplate(template, profile) {
  const conditionText = profile.conditions.join(" ");
  if (!template.userTypes.includes(profile.userType)) return -1;
  let score = template.priority;
  if (template.goals.includes(profile.goal)) score += 20;
  for (const condition of template.conditions) {
    if (conditionText.includes(condition)) score += 30;
    else score -= 15;
  }
  if (profile.age >= 40 && template.name.includes("40대")) score += 10;
  if (profile.experience === "처음" && template.id === "beginner-general") score += 10;
  return score;
}

function selectRoutineTemplate(profile) {
  return routineTemplates
    .map((template) => ({ template, score: scoreRoutineTemplate(template, profile) }))
    .filter((entry) => entry.score >= 0)
    .sort((a, b) => b.score - a.score)[0]?.template || routineTemplates.find((template) => template.id === "beginner-general");
}

function hydrateRoutineItem(item) {
  const equipmentItem = item.equipmentId ? getEquipment(item.equipmentId) : null;
  return {
    name: item.name || equipmentItem?.ko || "운동",
    equipmentId: item.equipmentId,
    sets: item.sets || equipmentItem?.defaultSets || 1,
    reps: item.reps || `${equipmentItem?.defaultReps || 10}회`,
    category: item.category || equipmentItem?.category || "전신",
  };
}

function tuneRoutineForProfile(items, profile) {
  const conditionText = profile.conditions.join(" ");
  const maxExerciseCount = profile.sessionMinutes <= 20 ? 4 : profile.sessionMinutes <= 30 ? 6 : 8;
  return items
    .filter((item) => !item.equipmentId || !hasUnsafeEquipment(item.equipmentId, conditionText))
    .slice(0, maxExerciseCount)
    .map((item) => {
      if (profile.goal !== "통증완화") return item;
      return { ...item, sets: Math.min(Number(item.sets) || 1, 2) };
    });
}

function recommendRoutine() {
  const profile = state.profile;
  const template = selectRoutineTemplate(profile);
  const hydratedItems = template.items.map(hydrateRoutineItem);
  const tuned = tuneRoutineForProfile(hydratedItems, profile);
  if (!routineRefreshOffset || tuned.length <= 2) return tuned;
  const warmup = tuned[0];
  const cooldown = tuned[tuned.length - 1];
  const middle = tuned.slice(1, -1);
  const shift = routineRefreshOffset % middle.length;
  return [warmup, ...middle.slice(shift), ...middle.slice(0, shift), cooldown];
}

function latestLogForEquipment(id) {
  return [...state.logs].reverse().find((log) => log.equipmentId === id);
}

function recommendedWeightFor(id) {
  const item = getEquipment(id);
  const latest = latestLogForEquipment(id);
  if (!latest) return item.startWeight;
  return calculateNextWeight({
    weight: Number(latest.weightKg),
    reps: Number(latest.reps),
    targetReps: Number(latest.targetReps),
    difficulty: latest.difficulty,
    pain: latest.pain,
    unit: item.unit,
  }).weight;
}

function renderHome() {
  const today = todayISO();
  const todayLogs = state.logs.filter((log) => log.date === today);
  const routine = recommendRoutine();
  const selectedTemplate = selectRoutineTemplate(state.profile);
  const targetSets = Math.max(1, routine.reduce((sum, item) => sum + Number(item.sets || 0), 0));
  const completedSets = todayLogs.length;
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 6);
  const weekLogs = state.logs.filter((log) => new Date(log.date) >= weekStart);
  const next = recommendedWeightFor(state.selectedEquipmentId);

  document.querySelector("#todayRate").textContent = `${Math.min(100, Math.round((completedSets / targetSets) * 100))}%`;
  document.querySelector("#weekCount").textContent = `${new Set(weekLogs.map((log) => log.date)).size}회`;
  document.querySelector("#totalSets").textContent = String(state.logs.length);
  document.querySelector("#nextWeight").textContent = `${next}kg`;
  document.querySelector("#routineTemplateLabel").textContent = selectedTemplate?.name || "기본 루틴";

  document.querySelector("#routineList").innerHTML = routine
    .map((item, index) => `
      <article class="routine-item ${item.equipmentId && todayLogs.some((log) => log.equipmentId === item.equipmentId) ? "completed" : ""}">
        <span class="routine-order">${index + 1}</span>
        <div>
          <h3>${item.name}</h3>
          <div class="routine-meta">${item.category} · ${item.sets}세트 · ${item.reps}</div>
        </div>
        ${item.equipmentId && todayLogs.some((log) => log.equipmentId === item.equipmentId)
          ? `<span class="completion-badge">완료</span>`
          : item.equipmentId ? `<button class="primary-button start-from-routine" data-id="${item.equipmentId}" data-sets="${item.sets}" data-reps="${parseInt(item.reps, 10) || getEquipment(item.equipmentId).defaultReps}" type="button">시작</button>` : ""}
      </article>
    `).join("");
}

function renderEquipment() {
  const filter = document.querySelector("#equipmentFilter").value;
  const items = equipment.filter((item) => filter === "all" || item.category === filter);
  document.querySelector("#equipmentGrid").innerHTML = items
    .map((item) => `
      <button class="equipment-card ${state.selectedEquipmentId === item.id ? "active" : ""}" data-id="${item.id}" type="button">
        <img src="${item.image}" alt="${item.ko}" />
        <div>
          <h3>${item.ko}</h3>
          <p>${item.target}</p>
        </div>
      </button>
    `).join("");
  renderWorkoutDetail();
  renderLogEquipmentOptions();
}

function renderWorkoutDetail() {
  const item = getEquipment(state.selectedEquipmentId);
  const weight = recommendedWeightFor(item.id);
  document.querySelector("#workoutDetail").innerHTML = `
    <img class="hero-img" src="${item.image}" alt="${item.ko}" />
    <div class="tag-row">
      <span class="tag">${item.category}</span>
      <span class="tag">${item.target}</span>
      <span class="tag">${item.difficulty}</span>
    </div>
    <h2>${item.ko}</h2>
    <p>${item.description}</p>
    <p class="danger">${item.caution}</p>
    <div class="summary-grid">
      <article class="metric-card"><span>추천 중량</span><strong>${weight}kg</strong></article>
      <article class="metric-card"><span>목표 세트</span><strong>${item.defaultSets}</strong></article>
      <article class="metric-card"><span>목표 반복</span><strong>${item.defaultReps}</strong></article>
      <article class="metric-card"><span>증감 단위</span><strong>${item.unit}kg</strong></article>
    </div>
    <div class="guide-list">
      ${item.guide.map(([type, text, seconds]) => `
        <div class="guide-step"><strong>${type}</strong><span>${text}</span><span>${seconds}초</span></div>
      `).join("")}
    </div>
    <div class="action-row">
      <button class="primary-button" id="startTimerButton" type="button">운동 시작</button>
      <button class="ghost-button" id="quickLogButton" type="button">기록만 입력</button>
    </div>
  `;
}

function renderLogEquipmentOptions() {
  document.querySelector("#logEquipment").innerHTML = equipment
    .map((item) => `<option value="${item.id}">${item.ko}</option>`)
    .join("");
  document.querySelector("#logEquipment").value = state.selectedEquipmentId;
}

function renderLogs() {
  document.querySelector("#logTable").innerHTML = [...state.logs].reverse().slice(0, 20)
    .map((log) => {
      const item = getEquipment(log.equipmentId);
      const next = calculateNextWeight({
        weight: Number(log.weightKg),
        reps: Number(log.reps),
        targetReps: Number(log.targetReps),
        difficulty: log.difficulty,
        pain: log.pain,
        unit: item.unit,
      });
      return `
        <tr>
          <td data-label="날짜">${log.date}</td>
          <td data-label="기구">${item.ko}</td>
          <td data-label="세트">${log.setNumber}</td>
          <td data-label="중량">${log.weightKg}kg</td>
          <td data-label="반복">${log.reps}/${log.targetReps}</td>
          <td data-label="다음">${next.weight}kg · ${next.reason}</td>
        </tr>
      `;
    }).join("") || `<tr><td colspan="6">아직 기록이 없습니다.</td></tr>`;
}

function renderStats() {
  renderMonthlyBodyChart();
  const days = [...Array(7)].map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    return { key, label: `${date.getMonth() + 1}/${date.getDate()}`, count: state.logs.filter((log) => log.date === key).length };
  });
  const max = Math.max(1, ...days.map((day) => day.count));
  document.querySelector("#weekChart").innerHTML = days.map((day) => `
    <div class="bar">
      <div class="bar-fill" style="height:${Math.max(6, (day.count / max) * 140)}px"></div>
      <small>${day.label}</small>
      <strong>${day.count}</strong>
    </div>
  `).join("");

  const byCategory = equipment.reduce((acc, item) => {
    acc[item.category] = state.logs.filter((log) => log.equipmentId === item.id).length + (acc[item.category] || 0);
    return acc;
  }, {});
  const total = Math.max(1, Object.values(byCategory).reduce((sum, value) => sum + value, 0));
  document.querySelector("#muscleChart").innerHTML = Object.entries(byCategory)
    .map(([category, count]) => `
      <div class="progress-row">
        <strong>${category}</strong>
        <div class="progress-track"><div class="progress-fill" style="width:${(count / total) * 100}%"></div></div>
        <span>${count}세트</span>
      </div>
    `).join("");
}

function getMonthRecords(monthKey) {
  return state.bodyRecords
    .filter((record) => record.date && record.date.slice(0, 7) === monthKey)
    .map((record) => ({
      ...record,
      weightKg: Number(record.weightKg),
      bodyFat: record.bodyFat === "" || record.bodyFat === undefined ? null : Number(record.bodyFat),
    }))
    .filter((record) => Number.isFinite(record.weightKg))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function formatMetricValue(value, metric) {
  if (!Number.isFinite(value)) return "-";
  return metric === "weight" ? `${value.toFixed(1)}kg` : `${value.toFixed(1)}%`;
}

function renderMonthlyBodyChart() {
  const monthPicker = document.querySelector("#monthPicker");
  if (!monthPicker.value) monthPicker.value = currentMonthKey();
  const monthKey = monthPicker.value;
  const records = getMonthRecords(monthKey);
  const metric = selectedBodyMetric;
  const metricLabel = metric === "weight" ? "체중" : "체지방률";
  const values = records
    .map((record) => metric === "weight" ? record.weightKg : record.bodyFat)
    .filter((value) => Number.isFinite(value));

  if (!records.length || values.length < 1) {
    document.querySelector("#monthlySummary").innerHTML = `
      <div class="summary-pill"><span>선택 월</span><strong>${monthKey}</strong></div>
      <div class="summary-pill"><span>기록 수</span><strong>0건</strong></div>
      <div class="summary-pill"><span>${metricLabel} 변화</span><strong>-</strong></div>
      <div class="summary-pill"><span>안내</span><strong>기록 필요</strong></div>
    `;
    document.querySelector("#monthlyBodyChart").innerHTML = `<p class="muted">내 정보 탭에서 몸무게와 체지방률을 추가하면 월간 차트가 표시됩니다.</p>`;
    return;
  }

  const first = values[0];
  const last = values[values.length - 1];
  const diff = last - first;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = Math.max(0.5, (max - min) * 0.18);
  const minY = min - padding;
  const maxY = max + padding;
  const width = 720;
  const height = 260;
  const left = 54;
  const right = 24;
  const top = 22;
  const bottom = 42;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const xFor = (index) => left + (records.length === 1 ? plotWidth / 2 : (plotWidth * index) / (records.length - 1));
  const yFor = (value) => top + plotHeight - ((value - minY) / Math.max(1, maxY - minY)) * plotHeight;
  const points = records
    .map((record, index) => {
      const value = metric === "weight" ? record.weightKg : record.bodyFat;
      if (!Number.isFinite(value)) return null;
      return { x: xFor(index), y: yFor(value), value, label: record.date.slice(5) };
    })
    .filter(Boolean);
  const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
  const areaString = `${left},${top + plotHeight} ${pointString} ${points[points.length - 1].x},${top + plotHeight}`;
  const gridValues = [minY, (minY + maxY) / 2, maxY];

  document.querySelector("#monthlySummary").innerHTML = `
    <div class="summary-pill"><span>선택 월</span><strong>${monthKey}</strong></div>
    <div class="summary-pill"><span>기록 수</span><strong>${records.length}건</strong></div>
    <div class="summary-pill"><span>${metricLabel} 변화</span><strong>${diff >= 0 ? "+" : ""}${formatMetricValue(diff, metric)}</strong></div>
    <div class="summary-pill"><span>최근 ${metricLabel}</span><strong>${formatMetricValue(last, metric)}</strong></div>
  `;

  document.querySelector("#monthlyBodyChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${monthKey} ${metricLabel} 변화 차트">
      ${gridValues.map((value) => {
        const y = yFor(value);
        return `<line class="grid-line" x1="${left}" y1="${y}" x2="${width - right}" y2="${y}"></line><text x="8" y="${y + 4}">${formatMetricValue(value, metric)}</text>`;
      }).join("")}
      <line class="axis" x1="${left}" y1="${top}" x2="${left}" y2="${top + plotHeight}"></line>
      <line class="axis" x1="${left}" y1="${top + plotHeight}" x2="${width - right}" y2="${top + plotHeight}"></line>
      ${points.length > 1 ? `<polygon class="chart-area" points="${areaString}"></polygon><polyline class="chart-line" points="${pointString}"></polyline>` : ""}
      ${points.map((point) => `<circle class="chart-point" cx="${point.x}" cy="${point.y}" r="6"></circle><text x="${point.x - 18}" y="${height - 14}">${point.label}</text><text x="${point.x - 18}" y="${point.y - 12}">${formatMetricValue(point.value, metric)}</text>`).join("")}
    </svg>
  `;
}

function renderProfile() {
  const profile = state.profile;
  for (const [key, value] of Object.entries(profile)) {
    const field = document.querySelector(`#${key}`);
    if (field && field.type !== "checkbox") field.value = value;
  }
  document.querySelectorAll(".condition").forEach((input) => {
    input.checked = profile.conditions.includes(input.value);
  });
  document.querySelector("#bodyWeight").value = profile.weight;
  document.querySelector("#appsScriptUrl").value = loadSyncConfig().appsScriptUrl || "";
  renderWeightTrend();
}

function renderWeightTrend() {
  const records = state.bodyRecords.slice(-8);
  document.querySelector("#weightTrend").innerHTML = records.length
    ? records.map((record) => `<div class="progress-row"><strong>${record.date}</strong><span>${record.weightKg}kg</span><span>${record.bodyFat || "-"}%</span></div>`).join("")
    : `<p class="muted">몸무게 기록을 추가하면 변화가 표시됩니다.</p>`;
}

function setSyncStatus(message, isError = false) {
  const status = document.querySelector("#syncStatus");
  status.textContent = message;
  status.style.color = isError ? "var(--warn)" : "var(--muted)";
}

function profileToSheetRow() {
  const now = new Date().toISOString();
  return {
    user_id: localUserId,
    name: state.profile.name,
    user_type: state.profile.userType,
    gender: state.profile.gender,
    age: state.profile.age,
    height_cm: state.profile.height,
    current_weight_kg: state.profile.weight,
    experience: state.profile.experience,
    goal: state.profile.goal,
    weekly_days: state.profile.weeklyDays,
    session_minutes: state.profile.sessionMinutes,
    body_conditions: state.profile.conditions,
    created_at: now,
    updated_at: now,
  };
}

function bodyRecordToSheetRow(record) {
  return {
    record_id: record.recordId,
    user_id: record.userId || localUserId,
    date: record.date,
    weight_kg: record.weightKg,
    body_fat_percent: record.bodyFat,
    memo: record.memo || "",
    created_at: record.createdAt || record.date,
  };
}

function workoutLogToSheetRow(log) {
  return {
    log_id: log.logId,
    user_id: log.userId || localUserId,
    date: log.date,
    equipment_id: log.equipmentId,
    set_number: log.setNumber,
    weight_kg: log.weightKg,
    reps: log.reps,
    target_reps: log.targetReps,
    success_yn: log.successYn,
    perceived_difficulty: log.difficulty,
    pain: log.pain,
    memo: log.memo,
    created_at: log.createdAt || log.date,
  };
}

function equipmentToSheetRow(item) {
  return {
    equipment_id: item.id,
    name_ko: item.ko,
    name_en: item.en,
    category: item.category,
    target_muscle: item.target,
    difficulty: item.difficulty,
    description: item.description,
    image_url: item.image,
    caution: item.caution,
    default_sets: item.defaultSets,
    default_reps: item.defaultReps,
    start_weight_kg: item.startWeight,
    weight_unit_kg: item.unit,
    updated_at: new Date().toISOString(),
  };
}

function buildSyncPayload() {
  return {
    user: profileToSheetRow(),
    bodyRecords: state.bodyRecords.map(bodyRecordToSheetRow),
    workoutLogs: state.logs.map(workoutLogToSheetRow),
    equipment: equipment.map(equipmentToSheetRow),
    routineTemplates,
  };
}

async function postToAppsScript(action, data) {
  const appsScriptUrl = document.querySelector("#appsScriptUrl").value.trim();
  if (!appsScriptUrl) throw new Error("Apps Script Web App URL을 입력하세요.");
  saveSyncConfig({ appsScriptUrl });
  let response;
  try {
    response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action, data }),
    });
  } catch {
    throw new Error("브라우저가 Apps Script 응답을 차단했습니다. Web App URL, 배포 권한을 확인하고, 시트에 데이터가 들어갔는지도 확인하세요.");
  }
  const text = await response.text();
  let result;
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error("Apps Script 응답을 해석하지 못했습니다. 배포 URL과 권한을 확인하세요.");
  }
  if (!response.ok || !result.ok) throw new Error(result.error || "Apps Script 요청에 실패했습니다.");
  return result;
}

async function testSheetsConnection() {
  try {
    setSyncStatus("연결 테스트 중...");
    await postToAppsScript("saveUser", profileToSheetRow());
    setSyncStatus("연결 성공. Users 시트에 프로필이 저장됐습니다.");
  } catch (error) {
    setSyncStatus(error.message, true);
  }
}

async function syncAllToSheets() {
  try {
    setSyncStatus("전체 동기화 중...");
    const result = await postToAppsScript("syncAll", buildSyncPayload());
    const syncedLogs = result.result?.workoutLogs?.count || 0;
    const syncedBodyRecords = result.result?.bodyRecords?.count || 0;
    setSyncStatus(`동기화 완료. 운동 기록 ${syncedLogs}건, 몸무게 기록 ${syncedBodyRecords}건을 전송했습니다.`);
  } catch (error) {
    setSyncStatus(error.message, true);
  }
}

function fillQuickLog() {
  const item = getEquipment(state.selectedEquipmentId);
  document.querySelector("#logEquipment").value = item.id;
  document.querySelector("#logWeight").value = recommendedWeightFor(item.id);
  document.querySelector("#logTargetReps").value = item.defaultReps;
  document.querySelector("#logReps").value = item.defaultReps;
  document.querySelector("#logSet").value = 1;
  showScreen("recordsScreen");
}

function parsePositiveNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function openWorkoutSetup(equipmentId = state.selectedEquipmentId, options = {}) {
  const item = getEquipment(equipmentId);
  state.selectedEquipmentId = item.id;
  saveState();
  const weight = parsePositiveNumber(options.weightKg, recommendedWeightFor(item.id));
  const sets = parsePositiveNumber(options.sets, item.defaultSets);
  const reps = parsePositiveNumber(options.reps, item.defaultReps);
  const restSec = parsePositiveNumber(options.restSec, 30);
  workoutSession = { equipmentId: item.id, weightKg: weight, targetSets: sets, targetReps: reps, restSec };
  document.querySelector("#setupEquipmentName").textContent = `${item.ko} 설정`;
  document.querySelector("#setupEquipmentHint").textContent = `${item.category} · ${item.target}`;
  document.querySelector("#setupWeight").value = weight;
  document.querySelector("#setupSets").value = sets;
  document.querySelector("#setupReps").value = reps;
  document.querySelector("#setupRest").value = restSec;
  document.querySelector("#workoutSetupPanel").hidden = false;
  document.querySelector("#timerPanel").hidden = true;
  renderWorkoutDetail();
}

function closeWorkoutSetup() {
  document.querySelector("#workoutSetupPanel").hidden = true;
}

function applyWorkoutSetupFromForm() {
  const item = getEquipment(state.selectedEquipmentId);
  workoutSession = {
    equipmentId: item.id,
    weightKg: parsePositiveNumber(document.querySelector("#setupWeight").value, recommendedWeightFor(item.id)),
    targetSets: parsePositiveNumber(document.querySelector("#setupSets").value, item.defaultSets),
    targetReps: parsePositiveNumber(document.querySelector("#setupReps").value, item.defaultReps),
    restSec: parsePositiveNumber(document.querySelector("#setupRest").value, 30),
  };
}

function getWorkoutTarget() {
  const item = getCurrentTimerItem();
  if (workoutSession.equipmentId !== item.id) {
    workoutSession = {
      equipmentId: item.id,
      weightKg: recommendedWeightFor(item.id),
      targetSets: item.defaultSets,
      targetReps: item.defaultReps,
      restSec: 30,
    };
  }
  return workoutSession;
}

function prefillWorkoutLog({ equipmentId, setNumber, reps, targetReps, weightKg }) {
  const item = getEquipment(equipmentId);
  document.querySelector("#logEquipment").value = item.id;
  document.querySelector("#logWeight").value = weightKg;
  document.querySelector("#logTargetReps").value = targetReps;
  document.querySelector("#logReps").value = reps;
  document.querySelector("#logSet").value = setNumber;
  document.querySelector("#logDifficulty").value = "보통";
  document.querySelector("#logPain").checked = false;
  document.querySelector("#logMemo").value = "운동 진행 화면에서 가져온 기록";
  showScreen("recordsScreen");
}

function getCurrentTimerItem() {
  return getEquipment(workoutTimer.equipmentId || state.selectedEquipmentId);
}

function getExecutionConfig(item) {
  return {
    tempo: item.tempo || tempoPresets.beginner,
    coaching: item.coaching || {
      setup: item.guide?.[0] ? [item.guide[0][1]] : ["자세를 준비하세요."],
      concentric: item.guide?.[1]?.[1] || "힘을 주세요.",
      hold: item.guide?.[2]?.[1] || "유지하세요.",
      eccentric: item.guide?.[3]?.[1] || "천천히 돌아오세요.",
    },
  };
}

function speakCoach(text) {
  if (!text || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

function getPhaseLabel(phase) {
  return {
    setup: "준비",
    concentric: "힘주기",
    hold: "유지",
    eccentric: "힘빼기",
    rest: "휴식",
    complete: "완료",
  }[phase] || phase;
}

function getCurrentTimerPhase() {
  const item = getCurrentTimerItem();
  const config = getExecutionConfig(item);
  if (workoutTimer.phase === "setup") {
    return {
      phase: "setup",
      label: "준비",
      text: config.coaching.setup.join(" "),
      speak: [...config.coaching.setup, "3, 2, 1, 시작합니다."].join(" "),
      duration: config.tempo.setup,
    };
  }
  if (workoutTimer.phase === "rest") {
    return {
      phase: "rest",
      label: "세트 휴식",
      text: "호흡을 고르고 다음 세트를 준비하세요.",
      speak: "세트 완료. 호흡을 고르고 다음 세트를 준비하세요.",
      duration: workoutTimer.phaseDuration,
    };
  }
  return {
    phase: workoutTimer.phase,
    label: getPhaseLabel(workoutTimer.phase),
    text: config.coaching[workoutTimer.phase],
    speak: buildRepSpeech(workoutTimer.phase, workoutTimer.repIndex + 1),
    duration: config.tempo[workoutTimer.phase],
  };
}

function buildRepSpeech(phase, repNumber) {
  if (phase === "concentric") return "힘을 주세요.";
  if (phase === "hold") return "유지하세요.";
  if (phase === "eccentric") return `천천히 돌아오세요. ${repNumber}회.`;
  return "";
}

function setTimerPhase(phase, duration) {
  workoutTimer.phase = phase;
  workoutTimer.phaseDuration = Math.max(0, Number(duration) || 0);
  workoutTimer.remaining = workoutTimer.phaseDuration;
  workoutTimer.elapsedMs = 0;
  workoutTimer.phaseStartedAt = performance.now();
  if (workoutTimer.phaseDuration <= 0) {
    advanceTimerPhase();
    return;
  }
  renderTimerPanel(true);
}

function startWorkoutTimer() {
  const item = getEquipment(state.selectedEquipmentId);
  const config = getExecutionConfig(item);
  const target = getWorkoutTarget();
  stopWorkoutTimer(false);
  workoutTimer = {
    active: true,
    paused: false,
    intervalId: null,
    animationId: null,
    equipmentId: item.id,
    setIndex: 0,
    repIndex: 0,
    phase: "setup",
    remaining: config.tempo.setup,
    phaseDuration: config.tempo.setup,
    phaseStartedAt: performance.now(),
    elapsedMs: 0,
    completed: false,
  };
  document.body.classList.add("workout-mode");
  document.querySelector("#workoutSetupPanel").hidden = true;
  document.querySelector("#timerPanel").hidden = false;
  renderTimerPanel(true);
  workoutTimer.intervalId = window.setInterval(tickWorkoutTimer, 1000);
  startTimerAnimation();
}

function stopWorkoutTimer(hidePanel = true) {
  if (workoutTimer.intervalId) window.clearInterval(workoutTimer.intervalId);
  if (workoutTimer.animationId) window.cancelAnimationFrame(workoutTimer.animationId);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  workoutTimer.intervalId = null;
  workoutTimer.animationId = null;
  workoutTimer.active = false;
  workoutTimer.paused = false;
  workoutTimer.completed = false;
  document.body.classList.remove("workout-mode");
  if (hidePanel) document.querySelector("#timerPanel").hidden = true;
}

function tickWorkoutTimer() {
  if (!workoutTimer.active || workoutTimer.paused) return;
  workoutTimer.remaining -= 1;
  if (workoutTimer.remaining <= 0) {
    advanceTimerPhase();
  } else {
    renderTimerPanel();
    if (workoutTimer.remaining <= 3) speakCoach(String(workoutTimer.remaining));
  }
}

function startTimerAnimation() {
  if (workoutTimer.animationId) window.cancelAnimationFrame(workoutTimer.animationId);
  const animate = () => {
    if (!workoutTimer.active || workoutTimer.paused) {
      workoutTimer.animationId = window.requestAnimationFrame(animate);
      return;
    }
    const now = performance.now();
    workoutTimer.elapsedMs = Math.min(workoutTimer.phaseDuration * 1000, now - workoutTimer.phaseStartedAt);
    updateTimerProgress();
    workoutTimer.animationId = window.requestAnimationFrame(animate);
  };
  workoutTimer.animationId = window.requestAnimationFrame(animate);
}

function advanceTimerPhase() {
  const item = getCurrentTimerItem();
  const { tempo } = getExecutionConfig(item);
  const target = getWorkoutTarget();
  if (workoutTimer.phase === "setup") {
    setTimerPhase("concentric", tempo.concentric);
    return;
  }
  if (workoutTimer.phase === "concentric") {
    setTimerPhase("hold", tempo.hold);
    return;
  }
  if (workoutTimer.phase === "hold") {
    setTimerPhase("eccentric", tempo.eccentric);
    return;
  }
  if (workoutTimer.phase === "eccentric") {
    workoutTimer.repIndex += 1;
    if (workoutTimer.repIndex < target.targetReps) {
      setTimerPhase("concentric", tempo.concentric);
      return;
    }
    if (workoutTimer.setIndex + 1 < target.targetSets) {
      workoutTimer.setIndex += 1;
      workoutTimer.repIndex = 0;
      setTimerPhase("rest", target.restSec);
      return;
    }
    completeWorkoutTimer();
    return;
  }
  if (workoutTimer.phase === "rest") {
    setTimerPhase("setup", tempo.setup);
  }
}

function completeWorkoutTimer() {
  stopWorkoutTimer(false);
  workoutTimer.completed = true;
  document.body.classList.add("workout-mode");
  document.querySelector("#timerPhaseLabel").textContent = "완료";
  document.querySelector("#timerCount").textContent = "✓";
  document.querySelector("#timerGuideText").textContent = "운동이 끝났습니다. 실제 반복 수와 난이도를 기록하세요.";
  document.querySelector("#timerProgressFill").style.width = "100%";
  document.querySelector("#pauseTimerButton").textContent = "다시 시작";
  speakCoach("운동이 끝났습니다. 실제 반복 수와 난이도를 기록하세요.");
}

function toggleWorkoutTimerPause() {
  if (!workoutTimer.active) {
    startWorkoutTimer();
    return;
  }
  workoutTimer.paused = !workoutTimer.paused;
  if (!workoutTimer.paused) {
    workoutTimer.phaseStartedAt = performance.now() - workoutTimer.elapsedMs;
  }
  document.querySelector("#pauseTimerButton").textContent = workoutTimer.paused ? "계속" : "일시정지";
  if (workoutTimer.paused && "speechSynthesis" in window) window.speechSynthesis.cancel();
  if (!workoutTimer.paused) speakCoach("계속합니다.");
}

function renderTimerPanel(shouldSpeak = false) {
  const item = getCurrentTimerItem();
  const target = getWorkoutTarget();
  const phaseInfo = getCurrentTimerPhase();
  const timerPanel = document.querySelector("#timerPanel");
  timerPanel.dataset.phase = phaseInfo.phase;
  document.querySelector("#timerEquipmentName").textContent = item.ko;
  document.querySelector("#timerWeightLabel").textContent = `설정 무게 ${target.weightKg}kg`;
  document.querySelector("#timerTargetLabel").textContent = `목표 ${target.targetSets}세트 × ${target.targetReps}회`;
  document.querySelector("#timerSetLabel").textContent = `${workoutTimer.setIndex + 1}세트 / ${target.targetSets}세트`;
  document.querySelector("#timerPhaseLabel").textContent = phaseInfo.label;
  document.querySelector("#timerCount").textContent = workoutTimer.remaining;
  document.querySelector("#timerGuideText").textContent = phaseInfo.text;
  document.querySelector("#timerRepLabel").textContent = `현재 반복: ${Math.min(target.targetReps, workoutTimer.repIndex + 1)} / ${target.targetReps}`;
  updateTimerProgress();
  document.querySelector("#pauseTimerButton").textContent = workoutTimer.paused ? "계속" : "일시정지";
  if (shouldSpeak) speakCoach(phaseInfo.speak || phaseInfo.text);
}

function updateTimerProgress() {
  const progress = workoutTimer.phaseDuration ? (workoutTimer.elapsedMs / (workoutTimer.phaseDuration * 1000)) * 100 : 0;
  document.querySelector("#timerProgressFill").style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function finishWorkoutFromTimer() {
  const item = getCurrentTimerItem();
  const target = getWorkoutTarget();
  const completedSet = Math.min(target.targetSets, workoutTimer.setIndex + 1);
  const completedReps = workoutTimer.completed ? target.targetReps : Math.max(0, workoutTimer.repIndex);
  const weightKg = target.weightKg;
  state.selectedEquipmentId = item.id;
  saveState();
  stopWorkoutTimer();
  prefillWorkoutLog({
    equipmentId: item.id,
    setNumber: completedSet,
    reps: completedReps || target.targetReps,
    targetReps: target.targetReps,
    weightKg,
  });
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.toggle("active", screen.id === id));
  document.querySelectorAll(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.screen === id));
  safeRenderAll();
}

function renderAll() {
  renderHome();
  renderEquipment();
  renderLogs();
  renderStats();
  renderProfile();
}

function safeRenderAll() {
  try {
    renderAll();
  } catch (error) {
    console.error("Render failed", error);
  }
}

document.addEventListener("click", (event) => {
  const equipmentCard = event.target.closest(".equipment-card");
  if (equipmentCard) {
    state.selectedEquipmentId = equipmentCard.dataset.id;
    saveState();
    renderEquipment();
  }

  const routineStart = event.target.closest(".start-from-routine");
  if (routineStart) {
    state.selectedEquipmentId = routineStart.dataset.id;
    saveState();
    showScreen("workoutScreen");
    openWorkoutSetup(routineStart.dataset.id, {
      sets: routineStart.dataset.sets,
      reps: routineStart.dataset.reps,
    });
  }

  if (event.target.id === "quickLogButton") fillQuickLog();
  if (event.target.id === "startTimerButton") openWorkoutSetup(state.selectedEquipmentId);
  if (event.target.id === "pauseTimerButton") toggleWorkoutTimerPause();
  if (event.target.id === "skipPhaseButton") advanceTimerPhase();
  if (event.target.id === "finishWorkoutButton") finishWorkoutFromTimer();
  if (event.target.id === "closeTimerButton") stopWorkoutTimer();
  if (event.target.id === "closeSetupButton") closeWorkoutSetup();
});

document.querySelector("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.profile = {
    name: document.querySelector("#name").value.trim() || "사용자",
    userType: document.querySelector("#userType").value,
    gender: document.querySelector("#gender").value,
    age: Number(document.querySelector("#age").value),
    height: Number(document.querySelector("#height").value),
    weight: Number(document.querySelector("#weight").value),
    experience: document.querySelector("#experience").value,
    goal: document.querySelector("#goal").value,
    weeklyDays: Number(document.querySelector("#weeklyDays").value),
    sessionMinutes: Number(document.querySelector("#sessionMinutes").value),
    conditions: [...document.querySelectorAll(".condition:checked")].map((input) => input.value),
  };
  saveState();
  renderAll();
});

document.querySelector("#bodyForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const weightKg = Number(document.querySelector("#bodyWeight").value);
  if (!weightKg) return;
  state.bodyRecords.push({
    recordId: createId("body"),
    userId: localUserId,
    date: todayISO(),
    weightKg,
    bodyFat: document.querySelector("#bodyFat").value,
  });
  state.profile.weight = weightKg;
  saveState();
  renderAll();
});

document.querySelector("#logForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const equipmentId = document.querySelector("#logEquipment").value;
  const reps = Number(document.querySelector("#logReps").value);
  const targetReps = Number(document.querySelector("#logTargetReps").value);
  state.logs.push({
    logId: createId("log"),
    userId: localUserId,
    date: todayISO(),
    equipmentId,
    setNumber: Number(document.querySelector("#logSet").value),
    weightKg: Number(document.querySelector("#logWeight").value),
    reps,
    targetReps,
    successYn: reps >= targetReps ? "Y" : "N",
    difficulty: document.querySelector("#logDifficulty").value,
    pain: document.querySelector("#logPain").checked,
    memo: document.querySelector("#logMemo").value.trim(),
  });
  state.selectedEquipmentId = equipmentId;
  saveState();
  event.target.reset();
  document.querySelector("#logSet").value = 1;
  renderAll();
});

document.querySelector("#workoutSetupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  applyWorkoutSetupFromForm();
  startWorkoutTimer();
});

document.querySelector("#refreshRoutineButton").addEventListener("click", () => {
  routineRefreshOffset += 1;
  renderHome();
});
document.querySelector("#testSheetsButton").addEventListener("click", testSheetsConnection);
document.querySelector("#syncSheetsButton").addEventListener("click", syncAllToSheets);
document.querySelector("#monthPicker").addEventListener("change", renderMonthlyBodyChart);
document.querySelectorAll(".segment-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedBodyMetric = button.dataset.metric;
    document.querySelectorAll(".segment-button").forEach((item) => item.classList.toggle("active", item === button));
    renderMonthlyBodyChart();
  });
});

document.querySelector("#exportCsvButton").addEventListener("click", () => {
  const columns = [
    ["log_id", "logId"],
    ["user_id", "userId"],
    ["date", "date"],
    ["equipment_id", "equipmentId"],
    ["set_number", "setNumber"],
    ["weight_kg", "weightKg"],
    ["reps", "reps"],
    ["target_reps", "targetReps"],
    ["success_yn", "successYn"],
    ["perceived_difficulty", "difficulty"],
    ["pain", "pain"],
    ["memo", "memo"],
  ];
  const headers = columns.map(([header]) => header);
  const rows = state.logs.map((log) => columns.map(([, key]) => JSON.stringify(log[key] ?? "")).join(","));
  const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "workout-logs.csv";
  link.click();
  URL.revokeObjectURL(url);
});

function bindEvents() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => showScreen(button.dataset.screen));
  });

  document.querySelector("#equipmentFilter").addEventListener("change", renderEquipment);
}

bindEvents();
safeRenderAll();
