# Avatar

**Category:** Components

## Description

Avatar component for user profile pictures or initials

## Import

```typescript
import { Avatar } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | string | ❌ | - | Avatar image source |
| `alt` | string | ❌ | - | Avatar alt text |
| `name` | string | ❌ | - | Name to generate initials from (if no src) |
| `size` | "xs" \| "sm" \| "md" \| "lg" \| "xl" | ❌ | `md` | Avatar size |
| `shape` | "circle" \| "square" | ❌ | `circle` | Avatar shape |
| `colorScheme` | "primary" \| "secondary" \| "success" \| "danger" \| "warning" \| "gradient" | ❌ | - | Custom color scheme |

## Examples

### Example 1

```tsx
<Avatar 
  src="/avatar.jpg" 
  alt="John Doe" 
  size="md"
/>
```

### Example 2

```tsx
<Avatar 
  name="John Doe" 
  size="lg"
  colorScheme="primary"
/>
```

## Variants

### Sizes

- `xs`
- `sm`
- `md`
- `lg`
- `xl`

### Color Schemes

- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `gradient`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Avatar, AvatarProps } from '@intelation/ui';
```
