# Modal

**Category:** Components

## Description

Modal component for dialogs, forms, and overlays

## Import

```typescript
import { Modal } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `open` | boolean | ✅ | - | Whether the modal is open |
| `onClose` | () => void | ✅ | - | Callback when modal should close |
| `size` | "sm" \| "md" \| "lg" \| "xl" \| "full" | ❌ | `md` | Modal size |
| `title` | string | ❌ | - | Modal title |
| `showCloseButton` | boolean | ❌ | `true` | Show close button in header |
| `closeOnOutsideClick` | boolean | ❌ | `true` | Close modal when clicking outside |
| `closeOnEscape` | boolean | ❌ | `true` | Close modal when pressing Escape key |
| `footer` | React.ReactNode | ❌ | - | Footer content |
| `children` | React.ReactNode | ✅ | - | Modal content |
| `className` | string | ❌ | - | Custom className for modal content |
| `overlayClassName` | string | ❌ | - | Custom className for modal overlay |

## Examples

### Example 1

```tsx
<Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">
  Are you sure you want to proceed?
</Modal>
```

### Example 2

```tsx
<Modal 
  open={isOpen} 
  onClose={handleClose}
  size="lg"
  footer={
    <>
      <Button variant="outline" onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  }
>
  <form>...</form>
</Modal>
```

## Variants

### Sizes

- `sm`
- `md`
- `lg`
- `xl`
- `full`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Modal, ModalProps } from '@intelation/ui';
```
