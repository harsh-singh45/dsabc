# Bug Report: @intelation/ui v1.4.0 - Missing Exports

**Reported by:** Intelation Platform Team  
**Date:** November 11, 2025  
**Package:** @intelation/ui v1.4.0  
**Severity:** 🔴 **CRITICAL** - Blocks upgrade from v1.2.0  

---

## Issue Summary

**Card subcomponents exist in package but are not exported**, causing module resolution errors in consuming applications.

---

## Affected Components

The following components exist in `dist/components/Card/` but are **NOT exported** from the main package index:

- `CardSection`
- `StatCard`
- `ListItem`
- `Metric`
- `MetricGroup`

---

## Expected Behavior

These components should be importable from the main package:

```typescript
import { 
  Card, 
  CardSection, 
  StatCard, 
  ListItem, 
  Metric, 
  MetricGroup 
} from '@intelation/ui';
```

---

## Actual Behavior

**Components exist internally:**
```typescript
// File exists: node_modules/@intelation/ui/dist/components/Card/index.d.ts
export { Card } from "./Card";
export { CardSection } from "./CardSection";
export { ListItem } from "./ListItem";
export { Metric } from "./Metric";
export { MetricGroup } from "./MetricGroup";
export { StatCard } from "./StatCard";
```

**But are NOT re-exported from main index:**
```typescript
// File: node_modules/@intelation/ui/dist/index.d.ts
export * from "./components/Card";  // ❌ Only exports Card, not subcomponents
```

**Error when importing:**
```typescript
import { CardSection } from '@intelation/ui';
// ❌ Module '"@intelation/ui"' has no exported member 'CardSection'
```

---

## Reproduction Steps

1. Install `@intelation/ui@1.4.0`
2. Attempt to import any Card subcomponent:
   ```typescript
   import { CardSection, StatCard } from '@intelation/ui';
   ```
3. Build or run dev server
4. **Error:** Module not found / export not available

---

## Additional SSR Error

When importing `@intelation/ui` in Next.js SSR context, encountering:

```
Error: Invalid hex color: undefined
    at hexToRgb (node_modules/@intelation/ui/dist/index.esm.js:18523:15)
```

This suggests a **color token is undefined during module initialization**.

**Possible cause:**
- Missing CSS variable during SSR
- Token not properly initialized before component code runs
- Dependency on `@intelation/tokens` CSS not being imported first

---

## Required Fix

### 1. Export Card Subcomponents

**File:** `packages/ui/src/index.ts`

```typescript
// Current (v1.4.0)
export * from "./components/Card";

// Should be
export { Card } from "./components/Card";
export { CardSection } from "./components/Card";
export { ListItem } from "./components/Card";
export { Metric } from "./components/Card";
export { MetricGroup } from "./components/Card";
export { StatCard } from "./components/Card";
```

**OR** if using barrel exports, ensure Card's index.ts exports all:

```typescript
// packages/ui/src/components/Card/index.ts
export { Card } from "./Card";
export { CardSection } from "./CardSection";
export { StatCard } from "./StatCard";
export { ListItem } from "./ListItem";
export { Metric } from "./Metric";
export { MetricGroup } from "./MetricGroup";

// Ensure types are also exported
export type { CardProps } from "./Card";
export type { CardSectionProps } from "./CardSection";
export type { StatCardProps } from "./StatCard";
export type { ListItemProps } from "./ListItem";
export type { MetricProps } from "./Metric";
export type { MetricGroupProps } from "./MetricGroup";
```

### 2. Fix SSR Color Token Issue

Investigate why a color token is `undefined` during SSR initialization. Possible solutions:

- Ensure all color tokens have default values
- Lazy-load color processing in components
- Add null checks before `hexToRgb()` calls
- Document that `@intelation/tokens/css/tokens.css` must be imported before `@intelation/ui/styles`

---

## Impact

- **Blocks upgrade** from v1.2.0 to v1.4.0 for existing applications using Card subcomponents
- **Breaking change** from v1.2.0 (components were previously available)
- Affects multiple pages in platform:
  - `src/pages/index.tsx`
  - Any other pages using Card subcomponents

---

## Workaround

**Option 1:** Rollback to v1.2.0
```bash
npm install @intelation/ui@1.2.0 @intelation/tokens@1.2.0
```

**Option 2:** Wait for v1.4.1 patch release

**Option 3:** Deep import (NOT RECOMMENDED - breaks with bundlers)
```typescript
// This path is not exposed in package.json exports
import { CardSection } from '@intelation/ui/dist/components/Card';
```

---

## Verification Needed

After fix, please verify:

- [ ] All Card subcomponents importable from main package
- [ ] TypeScript types resolve correctly
- [ ] No SSR errors with Next.js
- [ ] Rollup/Webpack/Vite bundling works correctly
- [ ] Tree-shaking still functions properly
- [ ] Update CHANGELOG.md for v1.4.1 patch

---

## Environment

- **Package Version:** @intelation/ui@1.4.0, @intelation/tokens@1.4.0
- **Node Version:** v20+
- **Framework:** Next.js 15.2.2 with Turbopack
- **Build Tool:** Rollup (in @intelation/ui)
- **Consumer:** Intelation Platform (private monorepo)

---

## Contact

For questions or clarification, contact: Intelation Platform Team

**Priority:** Release v1.4.1 hotfix ASAP to unblock platform upgrade
