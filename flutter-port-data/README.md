# Flutter 이식용 운동 데이터 사용 가이드

## 파일

- `exercise_seed.json`: 운동기구 + 덤벨 전체 데이터, 템포 프리셋, 세트 격려 문구, 한국어 반복 카운트 포함
- `machine_exercises.json`: 운동기구 12종만 포함
- `dumbbell_exercises.json`: 덤벨 12종만 포함

## Flutter 배치 권장 위치

```text
assets/data/exercise_seed.json
```

`pubspec.yaml`:

```yaml
flutter:
  assets:
    - assets/data/exercise_seed.json
```

## 권장 모델 구조

```dart
class Exercise {
  final String id;
  final String group; // machine | dumbbell
  final String ko;
  final String en;
  final String category;
  final String target;
  final String difficulty;
  final String description;
  final String caution;
  final int defaultSets;
  final int defaultReps;
  final double startWeightKg;
  final double weightUnitKg;
  final Tempo tempo;
  final Coaching coaching;
  final List<GuideStep> guide;
  final ExerciseMedia media;
}
```

## 화면 매핑

- `group == "machine"`: 운동기구 탭
- `group == "dumbbell"`: 덤벨 탭
- `tempo`: 운동 실행 엔진 타이머에 사용
- `coaching.setup`: 세트 시작 시 1회 TTS
- `coaching.concentric / hold / eccentric`: 반복 단계별 TTS
- `media.videoUrl`: 기구 설명 영상
- `media.youtubeSearchQuery`: YouTube 검색 링크 생성용

## YouTube 링크 생성

```dart
final query = Uri.encodeComponent(exercise.media.youtubeSearchQuery ?? '${exercise.ko} 짧은 자세 설명');
final url = 'https://www.youtube.com/results?search_query=$query';
```
