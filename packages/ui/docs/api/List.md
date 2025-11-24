# List

**Category:** Components

## Description

List component

## Import

```typescript
import { List } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | ListItem[] | ✅ | - | Array of items to display |
| `variant` | "default" \| "toolbar" | ❌ | `default` | Visual variant of the list |
| `selectable` | boolean | ❌ | `false` | Whether items can be selected |
| `multiSelect` | boolean | ❌ | `false` | Whether multiple items can be selected |
| `selectedIds` | string[] | ❌ | - | Controlled selected item IDs |
| `onSelectionChange` | (selectedIds: string[]) => void | ❌ | - | Callback when selection changes |
| `onItemClick` | (item: ListItem) => void | ❌ | - | Callback when an item is clicked |
| `virtualScrolling` | boolean | ❌ | `false` | Enable virtual scrolling for large lists |
| `groupBy` | string | ❌ | - | Property to group items by |
| `maxHeight` |  | ❌ | - | Maximum height for the list (enables scrolling) |
| `showDividers` | boolean | ❌ | `false` | Whether to show dividers between items |
| `className` | string | ❌ | - | Additional CSS class names |

## Variants

### Variants

- `default`
- `toolbar`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { List, ListProps } from '@intelation/ui';
```
