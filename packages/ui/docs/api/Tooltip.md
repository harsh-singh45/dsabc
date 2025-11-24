# Tooltip

**Category:** Components

## Description

Tooltip component

## Import

```typescript
import { Tooltip } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | React.ReactElement | ✅ | - | - |
| `content` | React.ReactNode | ✅ | - | - |
| `position` | "top" \| "bottom" \| "left" \| "right" | ❌ | - | - |
| `trigger` | "hover" \| "click" \| "focus" | ❌ | - | - |
| `delay` | number | ❌ | - | - |
| `maxWidth` | number | ❌ | - | - |
| `theme` | "dark" \| "light" | ❌ | - | - |
| `disabled` | boolean | ❌ | - | - |
| `className` | string | ❌ | - | - |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Tooltip, TooltipProps } from '@intelation/ui';
```
