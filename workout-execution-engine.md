# Workout Execution Engine 구현 메모

## 진행 순서

현재 운동 엔진은 모든 기구에 같은 구조를 적용한다.

```text
Setup
↓
Concentric
↓
Hold
↓
Eccentric
↓
Repetition Count
↓
Set Completion
↓
Rest Timer
↓
Next Set
```

## 핵심 규칙

- `setup`은 세트 시작 시 1회만 실행한다.
- 반복 횟수마다 실행되는 단계는 `concentric → hold → eccentric`이다.
- `hold`가 `0`초인 운동은 유지 단계를 자동으로 건너뛴다.
- 세트가 끝나면 30초 휴식 후 다음 세트의 `setup`으로 들어간다.
- 모든 카운트다운과 설명은 몰입형 화면에서 크게 표시된다.
- 브라우저가 Web Speech API를 지원하면 `speechSynthesis`로 한국어 음성 코칭을 실행한다.

## 데이터 구조

각 운동기구는 아래 데이터를 가진다.

```js
tempo: {
  setup: 3,
  concentric: 2,
  hold: 1,
  eccentric: 3
},
coaching: {
  setup: ["손목을 곧게 세우세요.", "어깨를 낮추세요.", "복부에 힘을 주세요."],
  concentric: "반동 없이 들어 올리세요.",
  hold: "목에 힘이 들어가지 않게 유지하세요.",
  eccentric: "중량을 통제하며 천천히 내리세요."
}
```
