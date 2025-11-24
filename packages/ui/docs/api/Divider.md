# Divider

**Category:** Components

## Description

Divider component

## Import

```typescript
import { Divider } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `orientation` | "horizontal" \| "vertical" | ❌ | `horizontal` | Orientation of the divider |
| `label` | string | ❌ | - | Optional text label to display in the divider |
| `dividerStyle` | "solid" \| "dashed" \| "dotted" | ❌ | `solid` | Line style of the divider |
| `thickness` | "1" \| "2" \| "3" | ❌ | `1` | Thickness of the divider line in pixels |
| `color` | string | ❌ | - | Custom color for the divider (CSS custom property or color value)
Falls back to design token if not provided |
| `className` | string | ❌ | - | Additional CSS class names |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Divider, DividerProps } from '@intelation/ui';
```
