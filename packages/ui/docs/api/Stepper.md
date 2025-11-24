# Stepper

**Category:** Components

## Description

Stepper component for multi-step processes and workflows

## Import

```typescript
import { Stepper } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | StepItem[] | ✅ | - | Array of steps to display |
| `currentStep` | number | ✅ | - | Current active step index (0-based) |
| `onStepClick` | (stepIndex: number, step: StepItem) => void | ❌ | - | Callback when a step is clicked (if clickable) |
| `orientation` | "horizontal" \| "vertical" | ❌ | `horizontal` | Orientation of the stepper |
| `clickable` | boolean | ❌ | `false` | Whether steps are clickable |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size variant |
| `showConnector` | boolean | ❌ | `true` | Whether to show connector lines between steps |
| `connectorVariant` | "behind" \| "through" \| "progress" | ❌ | `behind` | Connector line variant
- "behind": Line appears behind text (text has background)
- "through": Line passes through the entire stepper area
- "progress": Progress bar style - colored bar below indicators |
| `className` | string | ❌ | - | Additional CSS class name |

## Examples

### Example 1

```tsx
<Stepper
  steps={[
    { id: '1', title: 'Account', status: 'completed' },
    { id: '2', title: 'Profile', status: 'current' },
    { id: '3', title: 'Confirm', status: 'pending' },
  ]}
  currentStep={1}
/>
```

## Variants

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
import { Stepper, StepperProps } from '@intelation/ui';
```
