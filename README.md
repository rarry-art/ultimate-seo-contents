# Ultimate SEO Contents Generator

AI 기반의 SEO 최적화된 콘텐츠 자동 생성 시스템입니다.

## 주요 기능

- 🤖 AI 기반 콘텐츠 생성
  - Claude AI를 활용한 고품질 콘텐츠 작성
  - Perplexity AI를 통한 팩트체크 및 SEO 최적화
  - Google Trends API 연동으로 실시간 트렌드 반영

- 📊 SEO 최적화
  - 롱테일 키워드 자동 생성
  - 메타 데이터 최적화
  - 구조화된 콘텐츠 포맷

- 🎯 자동화된 프로세스
  1. 키워드 분석
  2. 롱테일 키워드 생성
  3. 콘텐츠 구조화
  4. 본문 생성
  5. 팩트체크
  6. SEO 최적화

## 시작하기

1. 환경 설정
```bash
# 환경 변수 설정
CLAUDE_API_KEY=your_claude_api_key
PERPLEXITY_API_KEY=your_perplexity_api_key
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. API 엔드포인트 사용
```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"keyword": "your_keyword"}'
```

## API 명세

### POST /api/generate

콘텐츠 생성 요청

**Request Body**
```json
{
  "keyword": "string" // 생성할 콘텐츠의 주제 키워드
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "slug": "string",
    "title": "string",
    "content": "string",
    "description": "string",
    "publishedAt": "string",
    "seo": {
      "title": "string",
      "description": "string",
      "keywords": ["string"]
    }
  }
}
```

## 기술 스택

- Next.js 14
- TypeScript
- Claude AI API
- Perplexity AI API
- Google Trends API

## 라이센스

MIT License
