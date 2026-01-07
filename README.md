# Whale ERP App

ERP 애플리케이션 프로젝트입니다.

## 기술 스택

- **Next.js 16** - App Router
- **React 19** - React Compiler 활성화
- **TypeScript** - Strict 모드
- **Tailwind CSS 4** - `@import "tailwindcss"` 및 `@theme inline` 문법
- **ESLint 9** - Flat Config (`eslint-config-next`)

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
    ├── layout.tsx    # 루트 레이아웃 (Geist 폰트 설정)
    ├── page.tsx      # 홈페이지
    ├── globals.css   # 전역 스타일 (다크 모드 지원)
    └── favicon.ico
public/               # 정적 에셋 (SVG 아이콘)
```

## 경로 별칭

`@/*` 경로 별칭이 `./src/*`에 매핑되어 있습니다.

```typescript
import { Component } from "@/components/Component";
```

## 스타일링

### CSS 변수

`globals.css`에서 라이트/다크 모드 테마 변수를 정의합니다:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### Tailwind CSS 4

Tailwind CSS 4의 새로운 `@theme inline` 문법을 사용하여 CSS 변수를 Tailwind 유틸리티와 연결합니다:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```
