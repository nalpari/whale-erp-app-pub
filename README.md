# Whale ERP App

ERP 애플리케이션 프로젝트입니다.

## 기술 스택

- **Next.js 16** - App Router
- **React 19** - React Compiler 활성화
- **TypeScript** - Strict 모드
- **Tailwind CSS 4** - 유틸리티 기반 스타일링

## 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 프로덕션 빌드

```bash
pnpm build
pnpm start
```

### 린트 실행

```bash
pnpm lint
```

## 프로젝트 구조

```
src/
└── app/
    ├── layout.tsx    # 루트 레이아웃
    ├── page.tsx      # 홈페이지
    ├── globals.css   # 전역 스타일
    └── favicon.ico
```

## 경로 별칭

`@/*` 경로 별칭이 `./src/*`에 매핑되어 있습니다.

```typescript
import { Component } from "@/components/Component";
```
