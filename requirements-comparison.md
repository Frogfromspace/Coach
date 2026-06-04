# 바른짐코치 MVP 요건 반영 비교표

작성일: 2026-06-04

| 구분 | 요건서 요구사항 | 현재 구현 상태 | 구현 위치 | 비고 / 다음 작업 |
| --- | --- | --- | --- | --- |
| 앱 목적 | 초보자가 운동기구를 쉽게 이해하고 개인 상태에 맞는 루틴을 안내받음 | 부분 반영 | `index.html`, `app.js` | 핵심 흐름은 반영. 실제 Flutter 앱/음성 안내는 미구현 |
| 사용자 유형 | 초등학생, 중학생, 성인 여성/남성, 40대 이상 여성/남성 구분 | 반영됨 | `profileScreen` | 유형 선택값 기반 추천 루틴 로직 포함 |
| 기본 프로필 | 이름, 유형, 성별, 나이, 키, 몸무게, 경험, 목적, 주당 횟수, 운동 시간 입력 | 반영됨 | `profileForm` | 출생연도 대신 나이 입력으로 단순화 |
| 신체 상태 입력 | 목, 어깨, 허리, 무릎, 골반 비대칭, 오십견, 체력 부족 등 | 반영됨 | `profileForm`, `recommendRoutine()` | 조건에 따라 어깨/무릎 부담 기구 일부 제외 |
| 데이터 저장 | 초기 버전은 서버 없이 Google Sheets 사용 | 반영됨 | `localStorage`, `postToAppsScript()` | 로컬 저장 후 Apps Script Web App URL로 수동 동기화 |
| Users 시트 | 사용자 프로필 컬럼 구조 | 부분 반영 | `state.profile` | CSV/API 전송 구조는 아직 WorkoutLogs 중심 |
| BodyRecords 시트 | 몸무게, 체지방률, 메모 기록 | 부분 반영 | `bodyForm`, `bodyRecords` | 날짜/몸무게/체지방률 저장. 메모는 미구현 |
| Equipment 시트 | 기구명, 카테고리, 부위, 난이도, 설명, 이미지, 주의사항 | 반영됨 | `equipment` 배열 | 기본 기구 6종 포함 |
| ExerciseGuide 시트 | 준비, 동작, 버티기, 돌아오기 단계 안내 | 반영됨 | `equipment[].guide` | 단계별 초 단위 표시 |
| WorkoutLogs 시트 | 날짜, 기구, 세트, 중량, 반복, 성공, 난이도, 통증, 메모 | 반영됨 | `logForm`, `state.logs` | CSV 내보내기 컬럼도 WorkoutLogs 형식 |
| RoutineTemplates 시트 | 사용자 유형/상태별 루틴 템플릿 | 반영됨 | `routineTemplates`, `recommendRoutine()` | 정적 데이터 배열로 구현. Google Sheets 시트 연동은 미구현 |
| 기구별 운동법 | 사진, 이름, 설명, 부위, 사용법, 주의사항, 추천 중량/세트/반복 | 반영됨 | `workoutScreen`, `renderWorkoutDetail()` | 실제 기구 사진 업로드는 미구현, 외부 이미지 URL 사용 |
| 적정 중량 자동 계산 | 성공률/난이도/통증에 따라 다음 중량 조정 | 반영됨 | `calculateNextWeight()` | 5%, 0%, -5%, -10%, 통증 감량 로직 구현 |
| 중량 반올림 | 머신 5kg, 덤벨 1kg, 자판기구 2.5kg 등 단위 반영 | 부분 반영 | `equipment[].unit`, `roundToUnit()` | 기구별 단위는 반영. 자판기구 분류는 별도 없음 |
| 세트 자동 추천 | 목적/초보/통증에 따라 세트 수 추천 | 부분 반영 | `recommendRoutine()` | 목적별 일부 조정. 세부 표 전체는 미구현 |
| 운동 기록 저장 | 완료 후 세트, 반복, 중량, 통증, 난이도, 메모 저장 | 반영됨 | `recordsScreen` | 브라우저 로컬 저장소에 저장 |
| 일간 통계 | 오늘 기구 수, 총 세트, 총 반복, 운동량, 시간, 달성률 | 부분 반영 | `renderHome()` | 달성률, 주간 횟수, 총 세트, 다음 추천 중량 표시. 시간/총 반복은 미구현 |
| 주간 통계 | 주간 운동 횟수, 목표 대비 달성률, 부위 비율, 지난주 대비 증가율 | 부분 반영 | `renderStats()` | 7일 세트 차트와 부위별 비율 구현. 지난주 대비는 미구현 |
| 월간 통계 | 월간 운동 일수, 총 운동량, 체중/체지방 변화, 루틴 지속률 | 부분 반영 | `renderMonthlyBodyChart()` | 체중/체지방 월간 차트 구현. 운동량/루틴 지속률은 미구현 |
| 목표 시각화 | 카드형 달성률, 운동 횟수, 체중 변화, 부위 비율 | 부분 반영 | `homeScreen`, `statsScreen`, `monthlyBodyChart` | 월간 체중/체지방 라인 차트 추가 |
| 기구 등록 기능 | 사용자 또는 관리자가 기구 직접 등록 | 미반영 | - | 정적 MVP에서는 기본 DB만 제공 |
| 초기 루틴 사례 | 40대 여성 골반/무릎, 40대 남성 오십견, 중학생 체력 부족, 초등학생 자세교정 | 반영됨 | `routineTemplates` | 대표 사례 4종을 템플릿 데이터로 반영 |
| 운동 시작 화면 | 기구 사진, 추천 중량, 목표 세트/반복, 시작 버튼 | 반영됨 | `workoutDetail` | “이 설정으로 기록하기”로 기록 탭 이동 |
| 운동 진행 화면 | 세트 진행, 준비/동작/버티기/복귀 카운트 안내 | 반영됨 | `timerPanel`, `startWorkoutTimer()` | 실제 카운트다운, 일시정지, 단계 건너뛰기, 완료 후 기록 연결 구현 |
| 운동 진행 엔진 | 준비는 세트 시작 시 1회, 힘주기/유지/힘빼기만 반복 | 반영됨 | `advanceTimerPhase()`, `setTimerPhase()` | `setup → concentric → hold → eccentric → rep → set/rest` 공통 엔진 |
| 운동 템포 | 운동별 setup/concentric/hold/eccentric 템포 적용 | 반영됨 | `equipment[].tempo`, `tempoPresets` | 레그프레스 hold 0초 등 운동별 템포 반영 |
| 음성 코치 | 기기 TTS로 준비, 카운트다운, 반복 구간 안내 | 반영됨 | `speakCoach()` | Web Speech API 지원 브라우저/기기에서 동작 |
| 운동 완료 화면 | 완료 세트, 반복, 중량, 성공률, 다음 중량, 통증/난이도 질문 | 부분 반영 | `logForm`, `logTable` | 저장 후 최근 기록에 다음 중량 표시. 별도 완료 화면은 없음 |
| 하단 메뉴 | 홈, 운동하기, 기록, 통계, 내 정보 | 반영됨 | `bottom-nav` | 탭 전환 안전 핸들러 추가 |
| 기술 구조 | Flutter, Dart, SQLite/Hive, Google Sheets, Google Login, fl_chart | 미반영 | - | 이번 산출물은 설치 없이 확인 가능한 HTML/CSS/JS MVP |
| Apps Script API | Users, WorkoutLogs 등 Google Sheets Web API | 반영됨 | `google-apps-script.gs`, `syncAllToSheets()` | 사용자가 Web App URL을 입력해야 실제 전송 가능 |
| 안전 정책 | 의료 대체 아님, 통증/어지러움/호흡곤란 등 중단 문구 | 반영됨 | `homeScreen` | 홈 안전 안내로 노출 |
| 1차 MVP | 사용자 등록, 몸무게 입력, 기구 목록, 운동 설명, 루틴 추천, 기록, Sheets 저장, 일/주 성과, 차트 | 부분 반영 | 전체 앱 | Sheets 직접 저장만 미구현, 나머지는 MVP 수준 반영 |
| 2차 버전 | 음성 안내, 사진 등록, 체지방 관리, 월간 통계, 고도화 추천 | 부분 반영 | `bodyRecords` | 체지방 입력만 있음. 나머지는 미구현 |
| 3차 버전 | AI 코치, 통증 기반 루틴 변경, 자세 촬영 분석, 가족 계정, 센터 DB 공유 | 미반영 | - | 후속 대형 기능 |

## 요약

현재 구현은 “브라우저에서 바로 실행 가능한 1차 MVP 프로토타입”입니다. 사용자 등록, 기구 안내, 템플릿 기반 추천 루틴, 운동 진행 엔진, TTS 음성 코치, 운동 기록, 다음 중량 계산, 기본 통계, Google Sheets Apps Script 수동 동기화는 동작합니다. 다만 요건서의 원래 기술 스택인 Flutter, Google Login, 월간 통계, 기구 등록, AI 코치 기능은 아직 구현되지 않았습니다.

## 우선순위 제안

| 우선순위 | 작업 | 이유 |
| --- | --- | --- |
| 1 | 월간 체중/체지방 차트 추가 | 몸 변화 관리 목적 강화 |
| 2 | 기구 등록 화면 추가 | 실제 헬스장별 기구 DB 구축에 필요 |
| 3 | Google Sheets에서 데이터 다시 불러오기 | 여러 기기에서 같은 데이터를 쓰기 위함 |
| 4 | Google Login 또는 사용자 식별 강화 | 실제 배포 시 보안과 사용자 분리에 필요 |
| 5 | Flutter 이식 여부 결정 | 배포 목표가 모바일 앱이면 기술 방향 확정 필요 |
