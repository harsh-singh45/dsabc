# Card

**Category:** Components

## Description

Card component with title, description, and content area

## Import

```typescript
import { Card } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | ❌ | - | Card title |
| `description` | string | ❌ | - | Card description |
| `children` | React.ReactNode | ❌ | - | Card content |
| `showMenu` | boolean | ❌ | `false` | Whether to show the menu button (three dots) |
| `onMenuClick` | (event: React.MouseEvent<HTMLButtonElement>) => void | ❌ | - | Handler for menu button click |
| `variant` | "default" \| "image-overlay" \| "list" \| "multi-section" | ❌ | `default` | Card variant |
| `backgroundImage` | string | ❌ | - | Background image URL (used with image-overlay variant) |
| `href` | string | ❌ | - | Optional link to make the entire card clickable |
| `target` | string | ❌ | - | Link target attribute (e.g., "_blank" for new tab) |
| `footer` | React.ReactNode | ❌ | - | Optional footer content displayed below the card content |

## Examples

### Example 1

```tsx
<Card 
  title="Card Title"
  description="Card description text"
>
  <p>Card content goes here</p>
</Card>
```

## Variants

### Variants

- `default`
- `image-overlay`
- `list`
- `multi-section`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Card, CardProps } from '@intelation/ui';
```
