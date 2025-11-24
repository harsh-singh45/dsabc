# Design System Playground

Interactive playground for testing design system components in real-world scenarios.

**Important:** This playground uses 100% design system components from `@intelation/ui`. No raw HTML elements (input, textarea, select, button, table, etc.) should be used directly.

## Getting Started

```powershell
# From project root
npm run dev

# Or run playground only
npm run dev --filter=@intelation/playground
```

Open [http://localhost:3000](http://localhost:3000)

## What's Inside

- **Components** - Individual component examples (buttons, forms, tables, charts, cards)
- **Layouts** - Pre-built page templates (dashboard, landing page)
- **Examples** - Complete page demonstrations (analytics dashboard)

All components are imported from `@intelation/ui` and use tokens from `@intelation/tokens`.

## Structure

```
apps/playground/
├── src/app/
│   ├── page.tsx              # Main navigation
│   ├── components/           # Component gallery
│   ├── layouts/              # Layout templates
│   └── examples/             # Full page examples
```

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript 5

## Commands

```powershell
npm run dev          # Development mode
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```
