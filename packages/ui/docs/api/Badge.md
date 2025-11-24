# Badge

**Category:** Components

## Description

Badge component

## Import

```typescript
import { Badge } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | React.ReactNode | ✅ | - | Content of the badge |
| `variant` | "primary" \| "secondary" \| "success" \| "warning" \| "danger" | ❌ | `primary` | Visual variant of the badge |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size of the badge |
| `badgeStyle` | "solid" \| "outline" | ❌ | `solid` | Visual style of the badge |
| `shape` | "pill" \| "rectangular" | ❌ | `pill` | Shape of the badge |
| `removable` | boolean | ❌ | `false` | Whether the badge can be removed |
| `onRemove` | () => void | ❌ | - | Callback when remove button is clicked |
| `icon` | React.ReactNode | ❌ | - | Optional icon to display before the text |
| `className` | string | ❌ | - | Additional CSS class names |

## Variants

### Variants

- `primary`
- `secondary`
- `success`
- `warning`
- `danger`

### Sizes

- `sm`
- `md`
- `lg`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Badge, BadgeProps } from '@intelation/ui';
```
