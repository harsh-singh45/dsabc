# BarChart

**Category:** Components

## Description

BarChart component for displaying categorical data comparisons

## Import

```typescript
import { BarChart } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `labels` | string[] | ✅ | - | Labels for the x-axis (vertical) or y-axis (horizontal) |
| `datasets` | BarChartDataset[] | ✅ | - | Array of datasets to display |
| `size` | ChartSize | ❌ | `lg` | Chart size |
| `orientation` | "vertical" \| "horizontal" | ❌ | `vertical` | Chart orientation |
| `stacked` | boolean | ❌ | `false` | Enable stacked mode |
| `showGrid` | boolean | ❌ | `true` | Show grid lines |
| `showLegend` | boolean | ❌ | `true` | Show legend |
| `showExportControls` | boolean | ❌ | `false` | Show export controls (PNG/SVG) |
| `xAxis` | {
    label?: string;
    display?: boolean;
  } | ❌ | - | X-axis configuration |
| `yAxis` | {
    label?: string;
    display?: boolean;
    min?: number;
    max?: number;
    format?: 'percentage' | 'currency' | 'number';
  } | ❌ | - | Y-axis configuration |
| `layoutPadding` | {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  } | ❌ | - | Layout padding configuration |
| `barPercentage` | number | ❌ | `0.9` | Bar width percentage (0-1). Controls how much of the category width the bars occupy. |
| `categoryPercentage` | number | ❌ | `0.8` | Category width percentage (0-1). Controls spacing between bar groups. |
| `onExport` | (format: ExportFormat) => void | ❌ | - | Callback when export button is clicked |
| `className` | string | ❌ | - | Custom class name |
| `'aria-label'` | string | ❌ | - | Accessible label for the chart |

## Examples

### Example 1

```tsx
<BarChart
  labels={['Q1', 'Q2', 'Q3', 'Q4']}
  datasets={[
    { label: 'Sales', data: [120, 150, 180, 200] },
    { label: 'Costs', data: [80, 90, 100, 110] },
  ]}
  size="lg"
  orientation="vertical"
/>
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
import { BarChart, BarChartProps } from '@intelation/ui';
```
