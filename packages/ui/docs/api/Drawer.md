# Drawer

**Category:** Components

## Description

Drawer component for slide-out panels

## Import

```typescript
import { Drawer } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `open` | boolean | ✅ | - | Whether the drawer is open |
| `onClose` | () => void | ✅ | - | Callback when drawer should close |
| `direction` | "left" \| "right" \| "top" \| "bottom" | ❌ | `right` | Direction from which the drawer slides |
| `size` | "sm" \| "md" \| "lg" \| "full" | ❌ | `md` | Drawer size |
| `variant` | "persistent" \| "temporary" | ❌ | `temporary` | Variant of the drawer |
| `title` | string | ❌ | - | Drawer title |
| `footer` | React.ReactNode | ❌ | - | Footer content |
| `children` | React.ReactNode | ✅ | - | Drawer content |
| `className` | string | ❌ | - | Custom className for drawer content |
| `overlayClassName` | string | ❌ | - | Custom className for drawer overlay |

## Examples

### Example 1

```tsx
<Drawer open={isOpen} onClose={() => setIsOpen(false)} title="Settings">
  <p>Drawer content here</p>
</Drawer>
```

### Example 2

```tsx
<Drawer 
  open={isOpen} 
  onClose={handleClose}
  direction="left"
  size="lg"
>
  <nav>Navigation items</nav>
</Drawer>
```

## Variants

### Variants

- `persistent`
- `temporary`

### Sizes

- `sm`
- `md`
- `lg`
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
import { Drawer, DrawerProps } from '@intelation/ui';
```
