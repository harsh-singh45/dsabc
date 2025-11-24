# DataCard

**Category:** Components

## Description

DataCard component for structured information display

## Import

```typescript
import { DataCard } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | ✅ | - | Card title |
| `subtitle` | string | ❌ | - | Optional subtitle |
| `fields` | DataField[] | ✅ | - | Array of data fields to display |
| `layout` | "grid" \| "list" | ❌ | `grid` | Layout mode for fields |
| `actions` | CardAction[] | ❌ | - | Actions to display in header |
| `expandable` | boolean | ❌ | `false` | Whether card content is expandable |
| `status` | "active" \| "inactive" \| "warning" \| "error" | ❌ | - | Status indicator |
| `avatar` |  | ❌ | - | Avatar image URL or custom component |
| `className` | string | ❌ | - | Additional CSS class names |
| `expanded` | boolean | ❌ | - | Controlled expanded state |
| `onExpandChange` | (expanded: boolean) => void | ❌ | - | Callback when expanded state changes |
| `footer` | React.ReactNode | ❌ | - | Footer content |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { DataCard, DataCardProps } from '@intelation/ui';
```
