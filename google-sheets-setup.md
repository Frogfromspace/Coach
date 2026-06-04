# Google Sheets Apps Script 연동 방법

## 사용자가 직접 입력해야 하는 항목

1. Google Sheet를 하나 새로 만듭니다.
2. 메뉴에서 `확장 프로그램` > `Apps Script`를 엽니다.
3. `google-apps-script-safe.gs` 파일 내용을 Apps Script 편집기에 붙여 넣습니다.
   - 마지막 줄에 `END_OF_SAFE_BAREUN_GYM_COACH_APPS_SCRIPT`가 보여야 전체가 복사된 것입니다.
4. Apps Script에서 `배포` > `새 배포`를 선택합니다.
5. 유형은 `웹 앱`으로 선택합니다.
6. 실행 권한은 `나`로 둡니다.
7. 액세스 권한은 테스트 목적이면 `모든 사용자` 또는 `링크가 있는 모든 사용자`로 둡니다.
8. 배포 후 나오는 Web App URL, 즉 `https://script.google.com/macros/s/.../exec` 주소를 복사합니다.
9. 바른짐코치 앱의 `내 정보` 탭 > `Google Sheets 연동` > `Apps Script Web App URL`에 붙여 넣습니다.
10. `연결 테스트`를 누른 뒤 성공하면 `전체 동기화`를 누릅니다.

## Codex가 만든 파일

- 앱에서 입력할 Web App URL 필드: `index.html`
- 브라우저 앱 동기화 로직: `app.js`
- Apps Script 코드: `google-apps-script.gs`
- 복사용 Apps Script 코드: `google-apps-script-copy.txt`
- 안전 버전 Apps Script 코드: `google-apps-script-safe.gs`

## 생성되는 시트

Apps Script는 처음 호출될 때 아래 시트를 자동으로 만듭니다.

| 시트 | 용도 |
| --- | --- |
| Users | 사용자 프로필 |
| BodyRecords | 몸무게와 체지방률 기록 |
| WorkoutLogs | 운동 기록 |
| Equipment | 기구 기본 데이터 |
| RoutineTemplates | 루틴 템플릿 |

## 주의사항

- Web App URL은 `/exec`로 끝나는 배포 URL이어야 합니다.
- Apps Script를 수정한 뒤에는 새 버전으로 다시 배포해야 앱에 반영됩니다.
- `전체 동기화`는 현재 브라우저에 저장된 로컬 데이터를 Google Sheets로 전송합니다.
- 현재 구현은 Google 로그인 인증 없이 Web App URL 기반으로 전송합니다. 실제 배포 전에는 접근 권한과 사용자 식별 방식을 강화해야 합니다.
