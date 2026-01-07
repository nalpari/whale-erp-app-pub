# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Production build
pnpm start    # Run production server
pnpm lint     # Run ESLint (flat config, ESLint 9)
```

## Tech Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19** with React Compiler enabled (`next.config.ts`)
- **Tailwind CSS 4** using `@import "tailwindcss"` syntax and `@theme inline` for custom properties
- **TypeScript** with strict mode
- **ESLint 9** flat config with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`

## Architecture

- Uses `@/*` path alias mapped to `./src/*`
- CSS theme variables defined in `globals.css` with dark mode support via `prefers-color-scheme`
- Geist font loaded via `next/font/google` with CSS variables `--font-geist-sans` and `--font-geist-mono`
