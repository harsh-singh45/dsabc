# Toast

**Category:** Components

## Description

Toast component for temporary notifications

## Import

```typescript
import { Toast } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | string | ❌ | - | Unique identifier for the toast |
| `variant` | ToastVariant | ❌ | `info` | Toast variant |
| `title` | string | ❌ | - | Toast title |
| `message` | React.ReactNode | ✅ | - | Toast message content |
| `duration` | number | ❌ | `5000` | Auto-dismiss duration in milliseconds (0 = no auto-dismiss) |
| `showProgress` | boolean | ❌ | `true` | Show progress bar for auto-dismiss countdown |
| `actions` | ToastAction[] | ❌ | - | Action buttons |
| `onDismiss` | () => void | ❌ | - | Callback when toast is dismissed |
| `icon` | React.ReactNode | ❌ | - | Optional icon to display |
| `open` | boolean | ❌ | `true` | Whether the toast is visible |

## Examples

### Example 1

```tsx
<Toast variant="success" message="Successfully saved!" />
```

### Example 2

```tsx
<Toast 
  variant="error"
  title="Error"
  message="Failed to save changes"
  actions={[{ label: "Retry", onClick: handleRetry }]}
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
import { Toast, ToastProps } from '@intelation/ui';
```
