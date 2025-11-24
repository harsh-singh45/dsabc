# Menu

**Category:** Components

## Description

Menu component for dropdown menus, context menus, and nested navigation

## Import

```typescript
import { Menu } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger` | React.ReactNode | ✅ | - | The trigger element that opens the menu |
| `items` | MenuItem[] | ✅ | - | Array of menu items to display |
| `open` | boolean | ❌ | - | Controlled open state |
| `defaultOpen` | boolean | ❌ | `false` | Default open state (uncontrolled) |
| `onOpenChange` | (open: boolean) => void | ❌ | - | Callback when open state changes |
| `position` | "bottom-start" \| "bottom-end" \| "top-start" \| "top-end" \| "left" \| "right" | ❌ | `bottom-start` | Position of the menu relative to the trigger |
| `closeOnSelect` | boolean | ❌ | `true` | Whether to close the menu after selecting an item |
| `closeOnClickOutside` | boolean | ❌ | `true` | Whether to close the menu when clicking outside |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size variant for the menu |
| `width` |  | ❌ | - | Fixed width for the menu |
| `maxHeight` |  | ❌ | - | Maximum height for the menu (will scroll if content exceeds) |
| `ariaLabel` | string | ❌ | - | ARIA label for the menu |
| `className` | string | ❌ | - | Additional CSS class name |

## Examples

### Example 1

```tsx
<Menu
  trigger={<Button>Actions</Button>}
  items={[
    { id: '1', label: 'Edit', icon: <EditIcon />, onClick: handleEdit },
    { id: '2', label: 'Delete', icon: <DeleteIcon />, onClick: handleDelete },
  ]}
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
import { Menu, MenuProps } from '@intelation/ui';
```
