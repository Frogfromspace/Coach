# GitHub Pages 배포 방법

## 목표

`outputs/fitness-coach` 폴더의 정적 앱을 GitHub Pages에 올려 스마트폰에서 접속하고, 홈 화면에 설치해서 앱처럼 사용한다.

## 1. GitHub 저장소 만들기

1. GitHub에서 새 저장소를 만든다.
2. 저장소 이름 예시: `fitness-coach`
3. Public 저장소로 만드는 것이 가장 간단하다.

## 2. 업로드할 파일

아래 폴더 안의 파일을 저장소 루트에 업로드한다.

```text
outputs/fitness-coach/
```

필수 파일:

```text
index.html
styles.css
app.js
manifest.webmanifest
sw.js
icon.svg
```

문서 파일도 같이 올려도 된다.

```text
requirements-comparison.md
workout-execution-engine.md
monthly-body-chart-usage.md
google-sheets-setup.md
google-apps-script-safe.gs
```

## 3. GitHub Pages 켜기

1. 저장소 `Settings`로 이동
2. 왼쪽 메뉴에서 `Pages` 선택
3. `Build and deployment`에서 `Deploy from a branch` 선택
4. Branch를 `main`으로 선택
5. Folder는 `/root` 선택
6. `Save` 클릭

몇 분 후 아래 형식의 주소가 생성된다.

```text
https://사용자명.github.io/저장소명/
```

예시:

```text
https://yourname.github.io/fitness-coach/
```

## 4. 스마트폰에서 설치

Android Chrome 기준:

1. 스마트폰에서 GitHub Pages URL 접속
2. 오른쪽 위 메뉴 선택
3. `홈 화면에 추가` 또는 `앱 설치` 선택
4. 홈 화면의 `바른짐코치` 아이콘으로 실행

iPhone Safari 기준:

1. Safari에서 GitHub Pages URL 접속
2. 공유 버튼 선택
3. `홈 화면에 추가` 선택

## 5. Google Sheets 연동

GitHub Pages에 배포한 뒤에도 Apps Script URL은 앱의 `내 정보` 탭에 입력해야 한다.

현재 테스트한 Apps Script URL:

```text
https://script.google.com/macros/s/AKfycbwPnaM4zuSdW93vWW1IJY8IwHj3ngTl8Dl6z56U1LNCqLQyjpu1BV0s7RAJ_wsj4jXuwQ/exec
```

## 6. 주의사항

- GitHub Pages는 HTTPS를 제공하므로 PWA 설치 조건에 적합하다.
- 앱 데이터는 기본적으로 스마트폰 브라우저의 로컬 저장소에 저장된다.
- Google Sheets `전체 동기화`를 눌러야 시트에 데이터가 전송된다.
- 다른 스마트폰에서 같은 데이터를 보려면 “Google Sheets에서 다시 불러오기” 기능이 추가로 필요하다.
