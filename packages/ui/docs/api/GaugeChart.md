# GaugeChart

**Category:** Components

## Description

GaugeChart - A semi-circular gauge with animated segments

## Import

```typescript
import { GaugeChart } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | ✅ | `0` | Current value (0-100) |
| `label` | string | ❌ | - | Optional custom label. If not provided, will auto-generate based on value |
| `size` | ChartSize | ❌ | `md` | Size of the gauge |
| `segments` | number | ❌ | `40` | Number of segments in the gauge |
| `startColor` | string | ❌ | `#d6d7ff` | Start color for active segments (hex) |
| `endColor` | string | ❌ | `#5558e6` | End color for active segments (hex) |
| `inactiveColor` | string | ❌ | `#ebebff` | Inactive segment color |
| `animated` | boolean | ❌ | `true` | Whether to animate value changes |
| `onChange` | (value: number) => void | ❌ | - | Callback when value changes (for controlled component) |
| `showControls` | boolean | ❌ | `false` | Show slider control |
| `className` | string | ❌ | - | Additional CSS classes |
| `'aria-label'` | string | ❌ | - | Custom aria-label for accessibility |

## Examples

### Example 1

```tsx
<GaugeChart value={75} size="md" />
```

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { GaugeChart, GaugeChartProps } from '@intelation/ui';
```
