# Alert

**Category:** Components

## Description

Alert component for displaying important messages to users

## Import

```typescript
import { Alert } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | AlertVariant | ❌ | `info` | Alert variant |
| `title` | string | ❌ | - | Alert title |
| `dismissible` | boolean | ❌ | `false` | Whether the alert can be dismissed |
| `onDismiss` | () => void | ❌ | - | Callback when alert is dismissed |
| `icon` | React.ReactNode | ❌ | - | Optional icon to display |
| `actions` | React.ReactNode | ❌ | - | Action buttons or links |
| `children` | React.ReactNode | ❌ | - | Alert content |

## Examples

### Example 1

```tsx
<Alert variant="success" title="Success!">
  Your changes have been saved.
</Alert>
```

### Example 2

```tsx
<Alert 
  variant="error" 
  dismissible 
  onDismiss={() => console.log('Dismissed')}
>
  An error occurred. Please try again.
</Alert>
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
import { Alert, AlertProps } from '@intelation/ui';
```
