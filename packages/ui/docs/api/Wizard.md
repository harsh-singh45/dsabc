# Wizard

**Category:** Components

## Description

Wizard component

## Import

```typescript
import { Wizard } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `currentStep` | number | ✅ | - | Current active step index (0-based) |
| `steps` | WizardStep[] | ✅ | - | Array of step configurations |
| `onStepChange` | (step: number) => void | ❌ | - | Callback when step changes |
| `showProgress` | boolean | ❌ | `true` | Whether to show the progress indicator |
| `orientation` | "horizontal" \| "vertical" | ❌ | `horizontal` | Orientation of the progress indicator |
| `allowSkip` | boolean | ❌ | `false` | Whether steps can be clicked to navigate |
| `validateStep` | (step: number) => boolean | Promise<boolean> | ❌ | - | Validation function for the current step
Returns true if valid, false if invalid
Can be async for server-side validation |
| `onStepComplete` | (step: number) => void | ❌ | - | Callback when a step is completed |
| `onWizardComplete` | () => void | ❌ | - | Callback when the wizard is completed (last step finished) |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size of the progress indicator |
| `className` | string | ❌ | - | Additional CSS class for the wizard container |
| `children` | React.ReactNode | ✅ | - | Children (WizardStep components) |

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
import { Wizard, WizardProps } from '@intelation/ui';
```
