# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19** with React Compiler enabled (`next.config.ts`)
- **Tailwind CSS 4** using `@import "tailwindcss"` syntax
- **TypeScript** with strict mode

## Architecture

- Uses `@/*` path alias mapped to `./src/*`
- CSS theme variables defined in `globals.css` with dark mode support via `prefers-color-scheme`
- Geist font loaded via `next/font/google`
