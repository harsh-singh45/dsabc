# Skeleton

**Category:** Components

## Description

Skeleton component

## Import

```typescript
import { Skeleton } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | "text" \| "rectangular" \| "circular" | ❌ | `text` | Shape variant of the skeleton |
| `animation` | "pulse" \| "wave" \| "none" | ❌ | `pulse` | Animation type |
| `width` |  | ❌ | `100%` | Width of the skeleton
Can be a number (pixels) or string (percentage, rem, etc.) |
| `height` |  | ❌ | `Depends on variant (text: 1em, rectangular: 100px, circular: 40px)` | Height of the skeleton
Can be a number (pixels) or string (percentage, rem, etc.) |
| `lines` | number | ❌ | `1` | Number of skeleton lines to render (only for text variant) |
| `className` | string | ❌ | - | Additional CSS class names |
| `style` | React.CSSProperties | ❌ | - | Inline styles |

## Variants

### Variants

- `text`
- `rectangular`
- `circular`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Skeleton, SkeletonProps } from '@intelation/ui';
```
