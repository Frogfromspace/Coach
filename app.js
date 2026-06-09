const storageKey = "bareunGymCoachState";
const syncConfigKey = "bareunGymCoachSyncConfig";
const localUserId = "local-user";

const tempoPresets = {
  beginner: { setup: 3, concentric: 2, hold: 1, eccentric: 2 },
  posture: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
  hypertrophy: { setup: 3, concentric: 1, hold: 1, eccentric: 3 },
  rehab: { setup: 5, concentric: 2, hold: 2, eccentric: 4 },
};

const equipmentVideos = {
  lowRow: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/0EF2D8E4D52FE1B437A7909DE1F3D56A1DE7/pd/1748250427491/ced839aa-3a10-11f0-9514-b4432650023e.mp4?_lsu_sa_=680585feb1b167c662dc257460e5c1b93e873758c70e4f5734e7b6c877d83d952727eacf6685f30be0ea3d32133b7b15ce1ca82397a3f1a634afa1ae58605582ae9a8041a5c5dd5aa4eac5516a87424b&in_out_flag=1",
  rotaryPulldown: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/865C37D43A4E767DB72C997E28290B6991DA/pd/1748241210206/591729bf-39fb-11f0-b769-a0369ffdb6c4.mp4?_lsu_sa_=66c5befa310964f62dd4f54b6bf5b5b01eb732782e0daf263a9766c507373d055e24ea7269d5540290aa31629537eba373eb5850a0961c3a0f5e2563ec8c40ce&in_out_flag=1",
  highRow: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/F5F22E034CBB1CC6EFFA909DE1F3D56A1DE7/pd/1747903360740/baea8759-36e8-11f0-8bba-e4434b27eff0.mp4?_lsu_sa_=66353dfd41ff6ef623d175fe6805b4bade363a38340e8f1332f7bbc1d71437158d2ebac26c658d0e70393df2f03d0be2cb4534a58d06e988cf9a07d04d62fb4c8ec8b32cfb6b5a93488bc4b9db957280&in_out_flag=1",
  hipAdduction: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/EBC18598E21BCD37FAE13E18CECAAE499F65/pd/1745386772696/5800ad9c-2005-11f0-a84c-a0369ffac3ec.mp4?_lsu_sa_=665543f7513762c68fd605c966b5d1baaec13518de0eaf393ab7e6c1b78838b51a2c1a8762b57207c09e3802a130db3ae2a45453f095d7d7c3be432bf7592f458d5f9c3b520120b648574025889e7803&in_out_flag=1",
  hangingLegRaise: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/7AFC9CFA3383B7A99CEA56C6A3282113CD28/pd/1746603786963/ebbaadb3-2b16-11f0-a227-a0369ffac0b0.mp4?_lsu_sa_=62c539f4116b6d36d0d7255a65c521b77ec132c82e032f7a3f0798c427f138d537260a8766b58c0fd0ae34e2003c5be4064f9beeb905ad95b4976e913cc7e4a8d9bea6e53eae31c9b1519b2985f33766&in_out_flag=1",
  armPulldown: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/E0D8E4A721E44E58839AD96732A009E527A9/pd/1747894909608/0d50fa4b-36d5-11f0-b1d6-80615f0bce44.mp4?_lsu_sa_=6c257cffc1cc6ba693dd35856a7516bcee4b37f81a0a4fd93867f6c8b7093ad5c82eea176cd59e05703b3a322c35ab33c74dd887ba2c75eaa2d78c1e6db28ac49ab6ed1500740d62deb6e3e90608ca02&in_out_flag=1",
  shoulderPress: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/82A8CA9051B2D044522B5BDC3931EF9C70DA/pd/1747897929853/165f1379-36dc-11f0-9987-a0369ffdb3c4.mp4?_lsu_sa_=60b5cdf6212667b614d015bc67f5efb81ef33758270faf05362766cac7b735c50a24fa796b25ad0ff0b832b27334abed2ee464816b47f1a25e2d45cbfd96eb1f64cb321fa7a1e6275ff535966053b8e0&in_out_flag=1",
  chestPress: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/BCFE0C5D1D0742E6EC73F0B98D8C58595BC5/pd/1746607239396/f67ebea8-2b1e-11f0-b769-a0369ffdb6c4.mp4?_lsu_sa_=6a354cfe3195607678d295bf661548b98e3f3d18c5009f0f306713ce277c3f45272a2aa463856407a0cc32e2583b7b6d5ead18ea0f91e64390f77f74de9274f5e4589bd91f8620c3059f44218d531a47&in_out_flag=1",
  seatedLegPress: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/5E6236D7E060EB70E9439A20388C33208C2C/pd/1747123489411/f4c4179d-2fd0-11f0-968d-a0369ffda02c.mp4?_lsu_sa_=689505f4610b64965edd456d64f579bdeec439d8b2091f2436978eca77453e35f72c3a786325c90d602e36f23739db7dedf473b42dbeb2b502ce5f64174a09f72bc072cfee3dfc8775099d20591748b9&in_out_flag=1",
  legCurl: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/7A48CEBE054876A1730E4296DFDAC51FF8FA/pd/1747186688928/1a4ef416-3064-11f0-8bba-e4434b27eff0.mp4?_lsu_sa_=6e95c1f5d12769d66fdf15e06055fbb87e7e3298ca019f5c3277a9ce676030d5cb243a446765e10270b832d24639ebd7dc2996693b1796b13add01b21f6f03efcee28e01b9a4c915b6e69dd45e174010&in_out_flag=1",
  latPulldown: "https://b01-kr-naver-vod.pstatic.net/qrcode/a/read/v2/VOD_ALPHA/qrcode/7B81491AD484C9CDE7A57CBB3A4FD475CA91/pd/1747211392451/9d76e96e-309d-11f0-a648-3c15fb5ce5e7.mp4?_lsu_sa_=64b557f0c1c16136a5d3259669e57bb97eb432d88b0d5f06366767ce67893305e32c2abf6705d60b10d63df2713a9bd7bd2b666c7a58857c20c38bc99a67e9077924341e65dccfac712099e38008a07b&in_out_flag=1",
};

function youtubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

const setEncouragements = [
  "좋습니다. 한 세트를 정확하게 끝냈습니다.",
  "잘했습니다. 자세를 유지한 점이 좋습니다.",
  "호흡을 고르고 다음 세트도 같은 템포로 갑니다.",
  "훌륭합니다. 무게보다 정확한 동작이 우선입니다.",
  "좋은 흐름입니다. 다음 세트는 천천히 통제하세요.",
  "집중력이 좋습니다. 어깨와 허리에 힘이 과하지 않은지 확인하세요.",
  "잘 따라왔습니다. 물 한 모금 마시고 다음 세트를 준비하세요.",
];

const koreanRepCounts = [
  "", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열",
  "열하나", "열둘", "열셋", "열넷", "열다섯", "열여섯", "열일곱", "열여덟", "열아홉", "스물",
  "스물하나", "스물둘", "스물셋", "스물넷", "스물다섯", "스물여섯", "스물일곱", "스물여덟", "스물아홉", "서른",
  "서른하나", "서른둘", "서른셋", "서른넷", "서른다섯", "서른여섯", "서른일곱", "서른여덟", "서른아홉", "마흔",
  "마흔하나", "마흔둘", "마흔셋", "마흔넷", "마흔다섯", "마흔여섯", "마흔일곱", "마흔여덟", "마흔아홉", "쉰",
];

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
    videoUrl: equipmentVideos.hipAdduction,
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
    videoUrl: equipmentVideos.seatedLegPress,
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
    videoUrl: equipmentVideos.chestPress,
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
    videoUrl: equipmentVideos.latPulldown,
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
  {
    id: "eq007",
    ko: "로우로우",
    en: "Low Row",
    category: "상체",
    target: "등, 후면 어깨",
    difficulty: "보통",
    description: "앉아서 손잡이를 몸쪽으로 당겨 등 중앙부를 강화하는 기구입니다.",
    image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=800&q=80",
    videoUrl: equipmentVideos.lowRow,
    caution: "허리를 둥글게 말지 말고 팔보다 등으로 당기는 느낌을 유지하세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 15,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["가슴을 세우세요.", "어깨를 낮추세요.", "복부에 힘을 주세요."],
      concentric: "손잡이를 몸쪽으로 당기세요.",
      hold: "등을 조이며 유지하세요.",
      eccentric: "팔을 천천히 뻗어 돌아가세요.",
    },
    guide: [
      ["준비", "가슴을 세우고 손잡이를 잡으세요.", 3],
      ["당기기", "팔꿈치를 뒤로 보내며 당기세요.", 2],
      ["유지", "등 중앙에 힘을 느끼세요.", 1],
      ["복귀", "천천히 팔을 뻗으세요.", 3],
    ],
  },
  {
    id: "eq008",
    ko: "로터리 풀다운",
    en: "Rotary Pulldown",
    category: "상체",
    target: "광배근, 이두",
    difficulty: "보통",
    description: "회전 궤도 손잡이를 아래로 당겨 등 근육을 자극하는 기구입니다.",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80",
    videoUrl: equipmentVideos.rotaryPulldown,
    caution: "몸을 과하게 젖히지 말고 쇄골 앞쪽으로 당기세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 15,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 2 },
    coaching: {
      setup: ["허벅지 패드를 고정하세요.", "가슴을 세우세요.", "어깨를 낮추세요."],
      concentric: "손잡이를 아래로 당기세요.",
      hold: "등에 힘을 유지하세요.",
      eccentric: "천천히 위로 돌아가세요.",
    },
    guide: [
      ["준비", "패드를 고정하고 가슴을 세우세요.", 3],
      ["당기기", "손잡이를 아래로 당기세요.", 2],
      ["유지", "등을 조이며 멈추세요.", 1],
      ["복귀", "천천히 올리세요.", 2],
    ],
  },
  {
    id: "eq009",
    ko: "하이로우",
    en: "High Row",
    category: "상체",
    target: "등 상부, 광배근",
    difficulty: "보통",
    description: "높은 위치의 손잡이를 몸쪽으로 당겨 등 상부와 광배근을 강화합니다.",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=800&q=80",
    videoUrl: equipmentVideos.highRow,
    caution: "어깨가 으쓱 올라가지 않게 낮춘 상태로 당기세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 15,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["가슴을 세우세요.", "어깨를 낮추세요.", "손잡이를 안정적으로 잡으세요."],
      concentric: "팔꿈치를 아래뒤로 당기세요.",
      hold: "등에 힘을 유지하세요.",
      eccentric: "천천히 원위치로 돌아가세요.",
    },
    guide: [
      ["준비", "가슴을 세우고 손잡이를 잡으세요.", 3],
      ["당기기", "팔꿈치를 아래뒤로 당기세요.", 2],
      ["유지", "등을 조이세요.", 1],
      ["복귀", "천천히 돌아가세요.", 3],
    ],
  },
  {
    id: "eq010",
    ko: "행잉 레그 레이즈",
    en: "Hanging Leg Raise",
    category: "코어",
    target: "복부, 고관절 굴곡근",
    difficulty: "어려움",
    description: "몸을 지지한 상태에서 다리를 들어 올려 복부를 강화하는 운동입니다.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    videoUrl: equipmentVideos.hangingLegRaise,
    caution: "허리가 과하게 꺾이거나 반동이 커지면 반복 수를 줄이세요.",
    defaultSets: 2,
    defaultReps: 10,
    startWeight: 0,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["어깨를 낮추고 몸을 안정시키세요.", "복부에 힘을 주세요.", "반동을 줄이세요."],
      concentric: "무릎 또는 다리를 들어 올리세요.",
      hold: "복부에 힘을 유지하세요.",
      eccentric: "천천히 다리를 내리세요.",
    },
    guide: [
      ["준비", "몸을 안정적으로 지지하세요.", 3],
      ["올리기", "복부 힘으로 다리를 올리세요.", 2],
      ["유지", "상단에서 멈추세요.", 1],
      ["내리기", "천천히 내리세요.", 3],
    ],
  },
  {
    id: "eq011",
    ko: "암 풀다운",
    en: "Arm Pulldown",
    category: "상체",
    target: "광배근, 전거근",
    difficulty: "보통",
    description: "팔을 거의 편 상태로 바를 아래로 눌러 등과 몸통 측면을 자극합니다.",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80",
    videoUrl: equipmentVideos.armPulldown,
    caution: "허리를 꺾지 말고 어깨가 올라가지 않게 유지하세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 10,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["가슴을 세우세요.", "팔을 길게 뻗으세요.", "복부에 힘을 주세요."],
      concentric: "바를 허벅지 쪽으로 누르세요.",
      hold: "등 옆쪽에 힘을 유지하세요.",
      eccentric: "천천히 위로 돌아가세요.",
    },
    guide: [
      ["준비", "팔을 길게 뻗고 가슴을 세우세요.", 3],
      ["누르기", "바를 아래로 누르세요.", 2],
      ["유지", "광배근에 힘을 유지하세요.", 1],
      ["복귀", "천천히 올리세요.", 3],
    ],
  },
  {
    id: "eq012",
    ko: "숄더 프레스",
    en: "Shoulder Press",
    category: "상체",
    target: "어깨, 삼두",
    difficulty: "보통",
    description: "앉아서 손잡이를 위로 밀어 어깨 근력을 강화하는 기구입니다.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    videoUrl: equipmentVideos.shoulderPress,
    caution: "어깨 통증이 있으면 가동 범위를 줄이고 가볍게 시작하세요.",
    defaultSets: 2,
    defaultReps: 10,
    startWeight: 10,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["허리를 등받이에 붙이세요.", "어깨를 낮추세요.", "손목을 곧게 세우세요."],
      concentric: "손잡이를 위로 밀어주세요.",
      hold: "어깨에 힘을 유지하세요.",
      eccentric: "천천히 내려오세요.",
    },
    guide: [
      ["준비", "등받이에 기대고 손잡이를 잡으세요.", 3],
      ["밀기", "손잡이를 위로 미세요.", 2],
      ["유지", "상단에서 짧게 멈추세요.", 1],
      ["내리기", "천천히 내리세요.", 3],
    ],
  },
  {
    id: "eq013",
    ko: "레그컬",
    en: "Leg Curl",
    category: "하체",
    target: "햄스트링",
    difficulty: "보통",
    description: "무릎을 굽혀 허벅지 뒤쪽 햄스트링을 강화하는 기구입니다.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80",
    videoUrl: equipmentVideos.legCurl,
    caution: "골반이 들리지 않게 고정하고 무릎에 통증이 있으면 중량을 줄이세요.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 10,
    unit: 5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["패드를 발목 뒤에 맞추세요.", "골반을 고정하세요.", "손잡이를 잡으세요."],
      concentric: "무릎을 굽혀 패드를 당기세요.",
      hold: "허벅지 뒤쪽에 힘을 유지하세요.",
      eccentric: "천천히 다리를 펴세요.",
    },
    guide: [
      ["준비", "패드 위치를 맞추고 몸을 고정하세요.", 3],
      ["굽히기", "무릎을 굽혀 당기세요.", 2],
      ["유지", "햄스트링에 힘을 유지하세요.", 1],
      ["펴기", "천천히 다리를 펴세요.", 3],
    ],
  },,
  {
    id: "db001",
    group: "dumbbell",
    ko: "??(??? ??? ???)",
    en: "Dumbbell Side Lateral Raise",
    category: "??",
    target: "?? ??",
    difficulty: "??",
    description: "??? ??? ???? ?? ?? ?? ??? ?????. ??? ??? ??? ???? ??? ?? ?? ????? ???.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ??? ??? ??? ?? ??"),
    caution: "?? ??? ??? ????? ??? ??? ?? ???.",
    defaultSets: 2,
    defaultReps: 12,
    startWeight: 2,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: {
      setup: ["??? ?? ????.", "??? ????.", "??? ?? ???."],
      concentric: "???? ??? ?? ????.",
      hold: "?? ???? ?? ????.",
      eccentric: "??? ??? ????.",
    },
    guide: [["??", "??? ???? ???? ?????.", 3], ["???", "???? ??? ?? ????.", 2], ["??", "?? ???? ????.", 1], ["???", "?? ?? ??? ????.", 3]],
  },
  {
    id: "db002",
    group: "dumbbell",
    ko: "??(?? ???)",
    en: "Dumbbell Shoulder Press",
    category: "??",
    target: "??, ??",
    difficulty: "??",
    description: "??? ?? ??? ?? ?? ?? ?? ??? ??? ?????. ??? ??? ??? ??? ?? ?????.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ?? ??? ?? ??"),
    caution: "??? ? ??? ???? ??? ????.",
    defaultSets: 2,
    defaultReps: 10,
    startWeight: 3,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["???? ????.", "??? ?? ????.", "??? ????."], concentric: "??? ?? ?? ????.", hold: "??? ???? ????.", eccentric: "???? ??? ????." },
    guide: [["??", "??? ?? ?? ???.", 3], ["??", "?? ?? ????.", 2], ["??", "???? ??????.", 1], ["???", "??? ?? ??? ????.", 3]],
  },
  {
    id: "db003",
    group: "dumbbell",
    ko: "??(??? ??)",
    en: "Dumbbell External Rotation",
    category: "??",
    target: "????",
    difficulty: "??",
    description: "??? ??? ?? ??? ??? ?? ?? ???? ????. ???? ?? ?? ??? ?? ??? ?????.",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ??? ?? ???? ?? ??"),
    caution: "??? ??? ???? ??? ???? ?????.",
    defaultSets: 2,
    defaultReps: 12,
    startWeight: 1,
    unit: 0.5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["???? ? ?? ?????.", "??? ????.", "??? ??? ???."], concentric: "?? ???? ?????.", hold: "? ???? ????.", eccentric: "??? ???? ?????." },
    guide: [["??", "???? ? ?? ????.", 3], ["???", "??? ???? ????.", 2], ["??", "? ???? ????.", 1], ["??", "??? ?????.", 3]],
  },
  {
    id: "db004",
    group: "dumbbell",
    ko: "??(?? ?? ??)",
    en: "One Arm Dumbbell Row",
    category: "??",
    target: "?, ???",
    difficulty: "??",
    description: "? ??? ??? ?? ??? ?? ? ??? ?????. ?? ????? ???? ?? ??? ??? ?????.",
    image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ?? ?? ?? ??"),
    caution: "??? ??? ??? ??? ???? ?????.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 4,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["?? ?? ???.", "??? ????.", "??? ?? ???."], concentric: "???? ?? ????.", hold: "?? ??? ????.", eccentric: "?? ??? ????." },
    guide: [["??", "??? ????? ?????.", 3], ["???", "???? ?? ????.", 2], ["??", "?? ?? ????.", 1], ["???", "??? ?? ????.", 3]],
  },
  {
    id: "db005",
    group: "dumbbell",
    ko: "??(?? ?????)",
    en: "Dumbbell Bench Press",
    category: "??",
    target: "??, ??",
    difficulty: "??",
    description: "??? ?? ??? ?? ?? ??? ?????. ??? ?? ??? ??? ??? ??? ?????.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ????? ?? ??"),
    caution: "?? ??? ??? ??? ??? ??? ????.",
    defaultSets: 3,
    defaultReps: 10,
    startWeight: 4,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["?? ??? ?????.", "??? ?? ????.", "??? ?? ????."], concentric: "??? ?? ?? ????.", hold: "??? ?? ?????.", eccentric: "??? ?? ??? ????." },
    guide: [["??", "??? ????? ????.", 3], ["??", "??? ?? ???.", 2], ["??", "???? ???? ????.", 1], ["???", "??? ????.", 3]],
  },
  {
    id: "db006",
    group: "dumbbell",
    ko: "??(?? ???)",
    en: "Dumbbell Fly",
    category: "??",
    target: "??",
    difficulty: "??",
    description: "???? ?? ?? ? ??? ??? ?? ??? ??? ?????. ??? ??? ?? ??? ????.",
    image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ??? ?? ??"),
    caution: "??? ???? ????? ??? ??? ????.",
    defaultSets: 2,
    defaultReps: 12,
    startWeight: 2,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["???? ?? ????.", "??? ????.", "??? ?? ???."], concentric: "??? ?? ?? ????.", hold: "??? ??? ????.", eccentric: "??? ???? ????." },
    guide: [["??", "??? ??? ?????.", 3], ["???", "?? ?? ????.", 2], ["??", "??? ????.", 1], ["???", "??? ????.", 3]],
  },
  {
    id: "db007",
    group: "dumbbell",
    ko: "??(?? ?)",
    en: "Dumbbell Curl",
    category: "??",
    target: "??",
    difficulty: "??",
    description: "???? ? ?? ???? ??? ?? ???? ?????. ?? ?? ?? ??? ??? ?????.",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ? ?? ??"),
    caution: "??? ?? ?? ??? ??? ????.",
    defaultSets: 2,
    defaultReps: 12,
    startWeight: 3,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["???? ? ?? ?????.", "??? ????.", "??? ?? ???."], concentric: "??? ??? ?? ????.", hold: "??? ?? ???.", eccentric: "??? ??? ????." },
    guide: [["??", "???? ?????.", 3], ["???", "??? ????.", 2], ["??", "??? ????.", 1], ["???", "??? ????.", 3]],
  },
  {
    id: "db008",
    group: "dumbbell",
    ko: "??(????? ??)",
    en: "Triceps Kickback",
    category: "??",
    target: "??",
    difficulty: "??",
    description: "??? ?? ?? ???? ???? ? ???? ?????. ???? ???? ?? ?? ?????.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ????? ?? ?? ??"),
    caution: "??? ??? ??? ?? ??? ??? ??? ???.",
    defaultSets: 2,
    defaultReps: 12,
    startWeight: 2,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["?? ?? ???.", "???? ? ?? ?????.", "??? ?? ???."], concentric: "???? ? ?? ?? ???.", hold: "??? ?? ?????.", eccentric: "??? ???? ????." },
    guide: [["??", "??? ?????.", 3], ["??", "???? ???.", 2], ["??", "??? ????.", 1], ["??", "??? ????.", 3]],
  },
  {
    id: "db009",
    group: "dumbbell",
    ko: "??(??? ???)",
    en: "Goblet Squat",
    category: "??",
    target: "???, ???",
    difficulty: "??",
    description: "??? ?? ?? ?? ??? ??? ??? ??? ?? ?????. ??? ?? ??? ????.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ??? ??? ?? ??"),
    caution: "??? ???? ??? ??? ??? ??? ???.",
    defaultSets: 3,
    defaultReps: 12,
    startWeight: 4,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["??? ?? ?? ???.", "?? ????? ????.", "??? ?? ???."], concentric: "??? ?? ?????.", hold: "???? ?? ????.", eccentric: "??? ????." },
    guide: [["??", "??? ?? ?? ????.", 3], ["????", "??? ?? ?????.", 2], ["??", "?? ?? ????.", 1], ["??", "??? ?????.", 3]],
  },
  {
    id: "db010",
    group: "dumbbell",
    ko: "??(?? ??)",
    en: "Dumbbell Lunge",
    category: "??",
    target: "???, ???, ??",
    difficulty: "??",
    description: "??? ?? ? ?? ??? ?? ??? ??? ????. ??? ??? ???? ?? ??? ?????.",
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ?? ?? ??"),
    caution: "??? ???? ?? ?? ?? ?????.",
    defaultSets: 2,
    defaultReps: 10,
    startWeight: 2,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["??? ????.", "??? ? ?? ???.", "??? ?? ???."], concentric: "??? ?? ?????.", hold: "??? ????.", eccentric: "??? ?????." },
    guide: [["??", "??? ????.", 3], ["????", "??? ?? ?????.", 2], ["??", "??? ????.", 1], ["????", "??? ?????.", 3]],
  },
  {
    id: "db011",
    group: "dumbbell",
    ko: "??(?? ????)",
    en: "Dumbbell Dead Bug",
    category: "??",
    target: "??, ?? ???",
    difficulty: "??",
    description: "??? ??? ?? ?? ??? ??? ??? ?? ???? ????. ??? ???? ?? ?? ?????.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ???? ?? ??"),
    caution: "??? ?? ????? ??? ??? ??????.",
    defaultSets: 2,
    defaultReps: 10,
    startWeight: 1,
    unit: 0.5,
    tempo: { setup: 3, concentric: 2, hold: 1, eccentric: 3 },
    coaching: { setup: ["??? ??? ????.", "???? ????.", "??? ?????."], concentric: "?? ??? ?? ????.", hold: "??? ?? ? ????.", eccentric: "??? ?????." },
    guide: [["??", "??? ??? ????.", 3], ["??", "?? ??? ????.", 2], ["??", "??? ????.", 1], ["??", "??? ?????.", 3]],
  },
  {
    id: "db012",
    group: "dumbbell",
    ko: "??(?? ??)",
    en: "Dumbbell Carry",
    category: "??",
    target: "??, ??, ??",
    difficulty: "??",
    description: "??? ?? ?? ?? ??? ?????. ??? ??? ??? ???? ??? ?? ?????.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
    videoSearchUrl: youtubeSearchUrl("?? ?? ??? ?? ?? ??"),
    caution: "??? ??? ??? ???? ??? ??? ????.",
    defaultSets: 2,
    defaultReps: 20,
    startWeight: 4,
    unit: 1,
    tempo: { setup: 3, concentric: 2, hold: 0, eccentric: 2 },
    coaching: { setup: ["??? ????.", "??? ? ?? ???.", "??? ?????."], concentric: "?? ????? ????.", hold: "??? ?? ?????.", eccentric: "??? ??? ??????." },
    guide: [["??", "??? ? ?? ?? ???.", 3], ["??", "?? ????? ????.", 2], ["??", "??? ?? ?????.", 1], ["??", "??? ??????.", 2]],
  }
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
let selectedEquipmentGroup = "machine";
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
  encouragement: "",
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
  return equipment.find((item) => item && item.id === id) || equipment.find(Boolean);
}

[
  ["db001", "덤벨(사이드 레터럴 레이즈)", "상체", "측면 어깨", "쉬움", "가벼운 덤벨을 양옆으로 들어 올려 어깨 측면을 단련합니다. 승모근 개입을 줄이고 팔꿈치가 손보다 살짝 높게 움직이도록 합니다.", "어깨 통증이 있으면 가동범위를 줄이고 반동을 쓰지 마세요.", ["손목을 곧게 세우세요.", "어깨를 낮추세요.", "복부에 힘을 주세요."], "팔꿈치를 옆으로 들어 올리세요.", "어깨 높이에서 잠깐 멈추세요.", "천천히 덤벨을 내리세요."],
  ["db002", "덤벨(덤벨 프레스)", "상체", "어깨, 삼두", "보통", "앉거나 서서 덤벨을 머리 위로 밀어 어깨 전면과 측면을 강화합니다. 허리가 꺾이지 않도록 복부에 힘을 유지합니다.", "어깨가 귀 쪽으로 올라가면 무게를 낮추세요.", ["갈비뼈를 내리세요.", "손목을 곧게 세우세요.", "어깨를 낮추세요."], "덤벨을 위로 밀어 올리세요.", "위에서 흔들림을 잡으세요.", "팔꿈치를 천천히 내리세요."],
  ["db003", "덤벨(외회전 운동)", "상체", "회전근개", "쉬움", "가벼운 덤벨로 어깨 외회전 근육을 깨워 어깨 안정성을 높입니다. 무게보다 통증 없는 범위와 느린 속도가 중요합니다.", "통증이 있거나 팔꿈치가 몸에서 떨어지면 중단하세요.", ["팔꿈치를 몸 옆에 고정하세요.", "어깨를 낮추세요.", "손목을 편하게 두세요."], "팔을 바깥으로 회전하세요.", "끝 지점에서 멈추세요.", "천천히 원위치로 돌아오세요."],
  ["db004", "덤벨(원암 덤벨 로우)", "상체", "등, 광배근", "보통", "한 손으로 덤벨을 몸통 옆으로 당겨 등 근육을 강화합니다. 팔로 당기기보다 팔꿈치를 뒤로 보내는 느낌이 핵심입니다.", "허리가 둥글게 말리면 벤치나 지지대를 사용하세요.", ["등을 길게 펴세요.", "어깨를 낮추세요.", "복부에 힘을 주세요."], "팔꿈치를 뒤로 당기세요.", "등을 조이며 멈추세요.", "팔을 천천히 뻗으세요."],
  ["db005", "덤벨(덤벨 벤치프레스)", "상체", "가슴, 삼두", "보통", "벤치에 누워 덤벨을 밀어 가슴 근육을 단련합니다. 덤벨은 가슴 옆으로 내리고 손목은 수직을 유지합니다.", "어깨 앞쪽이 아프면 팔꿈치 각도와 깊이를 줄이세요.", ["발을 바닥에 고정하세요.", "어깨를 뒤로 낮추세요.", "손목을 곧게 세우세요."], "덤벨을 위로 밀어 올리세요.", "가슴에 힘을 유지하세요.", "천천히 가슴 옆으로 내리세요."],
  ["db006", "덤벨(덤벨 플라이)", "상체", "가슴", "보통", "팔꿈치를 살짝 굽힌 채 덤벨을 벌리고 모아 가슴을 늘리고 수축합니다. 무리한 깊이는 어깨 부담을 키웁니다.", "어깨가 불편하면 가동범위를 좁히고 무게를 낮추세요.", ["팔꿈치를 살짝 굽히세요.", "어깨를 낮추세요.", "가슴을 열어 주세요."], "덤벨을 가슴 위로 모으세요.", "가슴을 조이며 멈추세요.", "천천히 양옆으로 벌리세요."],
  ["db007", "덤벨(덤벨 컬)", "상체", "이두", "쉬움", "팔꿈치를 몸 옆에 고정하고 덤벨을 들어 이두근을 강화합니다. 몸통 반동 없이 팔꿈치 위치를 유지합니다.", "허리를 젖혀 들어 올리면 무게를 낮추세요.", ["팔꿈치를 몸 옆에 고정하세요.", "어깨를 낮추세요.", "손목을 곧게 두세요."], "덤벨을 천천히 들어 올리세요.", "이두에 힘을 주세요.", "천천히 아래로 내리세요."],
  ["db008", "덤벨(트라이셉스 킥백)", "상체", "삼두", "쉬움", "상완을 몸통 옆에 고정하고 팔꿈치를 펴 삼두근을 단련합니다. 팔꿈치가 흔들리지 않는 것이 핵심입니다.", "어깨가 앞으로 말리면 몸통 각도를 줄이고 가볍게 하세요.", ["등을 길게 펴세요.", "팔꿈치를 몸 옆에 고정하세요.", "복부에 힘을 주세요."], "팔꿈치를 펴 뒤로 밀어 주세요.", "삼두에 힘을 유지하세요.", "천천히 팔꿈치를 굽히세요."],
  ["db009", "덤벨(고블릿 스쿼트)", "하체", "허벅지, 엉덩이", "쉬움", "덤벨을 가슴 앞에 들고 앉았다 일어나 하체와 코어를 함께 강화합니다. 무릎과 발끝 방향을 맞춥니다.", "무릎이 안쪽으로 모이면 깊이를 줄이고 천천히 하세요.", ["덤벨을 가슴 앞에 두세요.", "발을 어깨너비로 놓으세요.", "복부에 힘을 주세요."], "바닥을 밀며 일어나세요.", "상단에서 몸을 세우세요.", "천천히 앉으세요."],
  ["db010", "덤벨(덤벨 런지)", "하체", "허벅지, 엉덩이, 균형", "보통", "덤벨을 들고 한 발씩 내딛어 하체 근력과 균형을 기릅니다. 상체는 세우고 앞무릎은 발끝 방향을 따라갑니다.", "균형이 불안하면 덤벨 없이 먼저 연습하세요.", ["상체를 세우세요.", "덤벨을 몸 옆에 두세요.", "복부에 힘을 주세요."], "앞발로 밀어 올라오세요.", "균형을 잡으세요.", "천천히 내려가세요."],
  ["db011", "덤벨(덤벨 데드버그)", "코어", "복부, 코어 안정성", "쉬움", "누워서 덤벨을 들고 팔과 다리를 교차로 움직여 코어 안정성을 높입니다. 허리가 바닥에서 뜨지 않게 유지합니다.", "허리가 뜨면 가동범위를 줄이고 덤벨을 내려놓으세요.", ["허리를 바닥에 붙이세요.", "갈비뼈를 내리세요.", "천천히 호흡하세요."], "팔과 다리를 길게 뻗으세요.", "허리를 붙인 채 멈추세요.", "천천히 돌아오세요."],
  ["db012", "덤벨(덤벨 캐리)", "전신", "전신, 악력, 코어", "쉬움", "덤벨을 들고 걷는 전신 안정성 운동입니다. 어깨를 낮추고 몸통이 한쪽으로 기울지 않게 유지합니다.", "허리나 손목에 부담이 느껴지면 거리와 무게를 줄이세요.", ["어깨를 낮추세요.", "덤벨을 몸 옆에 두세요.", "시선은 정면입니다."], "짧고 안정적으로 걸으세요.", "몸통을 곧게 유지하세요.", "천천히 멈추고 내려놓으세요."],
].forEach(([id, ko, category, target, difficulty, description, caution, setup, concentric, hold, eccentric]) => {
  const item = getEquipment(id);
  Object.assign(item, {
    ko,
    category,
    target,
    difficulty,
    description,
    caution,
    videoSearchUrl: youtubeSearchUrl(`${ko} 짧은 자세 설명`),
    coaching: { setup, concentric, hold, eccentric },
    guide: [
      ["준비", setup.join(" "), 3],
      ["힘주기", concentric, item.tempo.concentric],
      ["유지", hold, item.tempo.hold],
      ["힘빼기", eccentric, item.tempo.eccentric],
    ],
  });
});

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
  const items = equipment.filter(Boolean).filter((item) => {
    const group = item.group || "machine";
    return group === selectedEquipmentGroup && (filter === "all" || item.category === filter);
  });
  if (!items.some((item) => item.id === state.selectedEquipmentId) && items[0]) {
    state.selectedEquipmentId = items[0].id;
  }
  document.querySelectorAll(".subtab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.equipmentGroup === selectedEquipmentGroup);
  });
  document.querySelector("#equipmentGrid").innerHTML = items.length ? items
    .map((item) => `
      <button class="equipment-card ${state.selectedEquipmentId === item.id ? "active" : ""}" data-id="${item.id}" type="button">
        <img src="${item.image}" alt="${item.ko}" />
        <div>
          <h3>${item.ko}</h3>
          <p>${item.target}</p>
        </div>
      </button>
    `).join("") : `<p class="muted">??? ??? ?? ??? ????.</p>`;
  renderWorkoutDetail();
  renderLogEquipmentOptions();
}

function renderWorkoutDetail() {
  const item = getEquipment(state.selectedEquipmentId);
  const weight = recommendedWeightFor(item.id);
  document.querySelector("#workoutDetail").innerHTML = `
    <img class="hero-img" src="${item.image}" alt="${item.ko}" />
    ${item.videoUrl ? `
      <div class="video-panel">
        <div class="panel-heading">
          <div>
            <h2>운동 전 설명 동영상</h2>
            <p class="template-label">${item.ko} 사용 전 자세와 동작을 확인하세요.</p>
          </div>
          <a class="video-link" href="${item.videoUrl}" target="_blank" rel="noopener">새 창으로 보기</a>
        </div>
        <video class="equipment-video" src="${item.videoUrl}" controls preload="metadata" playsinline></video>
      </div>
    ` : ""}
    ${item.videoSearchUrl ? `
      <div class="video-panel youtube-panel">
        <div class="panel-heading">
          <div>
            <h2>유튜브 핵심 영상</h2>
            <p class="template-label">짧은 자세 설명 영상을 YouTube에서 바로 확인하세요.</p>
          </div>
          <a class="video-link" href="${item.videoSearchUrl}" target="_blank" rel="noopener">YouTube에서 보기</a>
        </div>
        <p class="muted">YouTube 영상은 저작권과 임베드 제한이 있어 검색 결과 링크로 제공합니다.</p>
      </div>
    ` : ""}
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
  document.querySelector("#logEquipment").innerHTML = equipment.filter(Boolean)
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

  const byCategory = equipment.filter(Boolean).reduce((acc, item) => {
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
    equipment: equipment.filter(Boolean).map(equipmentToSheetRow),
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
    const encouragement = workoutTimer.encouragement || "????. ? ??? ???? ?????.";
    return {
      phase: "rest",
      label: "?? ??",
      text: `${encouragement} ??? ??? ?? ??? ?????.`,
      speak: `${encouragement} ??? ??? ?? ??? ?????.`,
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

function getKoreanRepCount(repNumber) {
  return koreanRepCounts[repNumber] || `${repNumber}`;
}

function pickSetEncouragement() {
  return setEncouragements[Math.floor(Math.random() * setEncouragements.length)];
}

function buildRepSpeech(phase, repNumber) {
  const item = getCurrentTimerItem();
  const config = getExecutionConfig(item);
  if (phase === "concentric") return config.coaching.concentric;
  if (phase === "hold") return config.coaching.hold;
  if (phase === "eccentric") return `${config.coaching.eccentric} ${getKoreanRepCount(repNumber)}`;
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
    encouragement: "",
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
      workoutTimer.encouragement = pickSetEncouragement();
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
  const finalEncouragement = pickSetEncouragement();
  stopWorkoutTimer(false);
  workoutTimer.completed = true;
  document.body.classList.add("workout-mode");
  document.querySelector("#timerPhaseLabel").textContent = "??";
  document.querySelector("#timerCount").textContent = "?";
  document.querySelector("#timerGuideText").textContent = `${finalEncouragement} ??? ?????. ?? ?? ?? ???? ?????.`;
  document.querySelector("#timerProgressFill").style.width = "100%";
  document.querySelector("#pauseTimerButton").textContent = "?? ??";
  speakCoach(`${finalEncouragement} ??? ?????. ?? ?? ?? ???? ?????.`);
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

  const subtab = event.target.closest(".subtab-button");
  if (subtab) {
    selectedEquipmentGroup = subtab.dataset.equipmentGroup;
    renderEquipment();
  }

  if (event.target.id === "quickLogButton") fillQuickLog();
  if (event.target.id === "startTimerButton") {
    openWorkoutSetup(state.selectedEquipmentId);
    applyWorkoutSetupFromForm();
    startWorkoutTimer();
  }
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
