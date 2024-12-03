# GitLab Flow 브랜치 전략

## 개요
이 프로젝트는 GitLab Flow 브랜치 전략을 따릅니다. GitLab Flow는 Git Flow의 복잡성을 줄이고, GitHub Flow의 단순함을 개선한 전략입니다.

## 주요 브랜치
- `main`: 프로덕션 환경에 배포되는 안정적인 코드
- `staging`: QA 및 테스트 환경
- `development`: 개발자들의 기능 개발 브랜치가 병합되는 곳

## 브랜치 명명 규칙
- 기능 개발: `feature/기능명`
  - 예: `feature/add-seo-analytics`
- 버그 수정: `bugfix/버그명`
  - 예: `bugfix/fix-header-layout`
- 긴급 수정: `hotfix/버그명`
  - 예: `hotfix/critical-security-issue`

## 작업 프로세스

### 1. 기능 개발
1. `development` 브랜치에서 새로운 `feature` 브랜치 생성
2. 기능 개발 및 커밋
3. 개발 완료 후 `development` 브랜치로 Merge Request 생성
4. 코드 리뷰 후 승인되면 `development`에 병합

### 2. 스테이징 배포
1. `development` 브랜치의 변경사항을 `staging` 브랜치로 병합
2. QA 팀의 테스트 진행
3. 이슈 발견 시 `bugfix` 브랜치 생성하여 수정

### 3. 프로덕션 배포
1. `staging` 브랜치에서 충분한 테스트 완료
2. `staging`의 변경사항을 `main` 브랜치로 병합
3. `main` 브랜치에서 프로덕션 배포

### 4. 긴급 수정
1. `main` 브랜치에서 `hotfix` 브랜치 생성
2. 수정 작업 진행
3. `main`, `staging`, `development` 브랜치에 모두 병합

## 커밋 메시지 규칙
```
type: 제목

본문

footer(optional)
```

### 커밋 타입
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 코드
- chore: 빌드 업무 수정

## 코드 리뷰
- 모든 코드 변경은 Merge Request를 통해 진행
- 최소 1명 이상의 리뷰어 승인 필요
- 모든 CI/CD 파이프라인 통과 필요

## 배포 프로세스
1. `development` → 자동 배포 to 개발 서버
2. `staging` → 자동 배포 to 스테이징 서버
3. `main` → 수동 승인 후 배포 to 프로덕션 서버 