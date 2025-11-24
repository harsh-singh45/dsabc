# Table

**Category:** Components

## Description

Table component

## Import

```typescript
import { Table } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `columns` | Column<T>[] | ✅ | - | Column definitions |
| `data` | T[] | ✅ | - | Table data |
| `variant` | "default" \| "striped" \| "bordered" | ❌ | `default` | Table visual variant |
| `density` | "compact" \| "comfortable" \| "spacious" | ❌ | `comfortable` | Row density |
| `stickyHeader` | boolean | ❌ | `false` | Enable sticky header |
| `selectable` | boolean | ❌ | `false` | Enable row selection with checkboxes |
| `onRowClick` | (row: T, index: number) => void | ❌ | - | Callback when row is clicked |
| `onSort` | (columnId: string, direction: "asc" | "desc") => void | ❌ | - | Callback when sort changes |
| `onSelectionChange` | (selectedRows: T[]) => void | ❌ | - | Callback when selection changes |
| `loading` | boolean | ❌ | `false` | Loading state |
| `emptyMessage` | string | ❌ | `No data available` | Empty state message |
| `maxHeight` | string | ❌ | - | Maximum height for scrollable table |
| `"aria-label"` | string | ❌ | - | Custom aria-label for accessibility |
| `expandable` | boolean | ❌ | - | Enable expandable rows. If true, the Table will render an extra details row using
the column with id 'details' or via a provided renderRowDetails prop. |
| `renderRowDetails` | (row: T, index: number) => React.ReactNode | ❌ | - | Custom renderer for the expandable row details. Receives (row, index) and
should return ReactNode. If omitted, the Table will look for a 'details' field
on the row object. |
| `hierarchical` | boolean | ❌ | `false` | Enable hierarchical/tree mode for nested data structures |
| `maxDepth` | number | ❌ | `10` | Maximum nesting depth for hierarchical mode |
| `showTreeLines` | boolean | ❌ | `true` | Show tree lines for hierarchical visualization |
| `onLoadChildren` | (row: T) => Promise<T[]> | ❌ | - | Callback when loading children asynchronously |
| `defaultExpanded` | boolean | ❌ | `false` | Default expanded state for hierarchical rows |

## Variants

### Variants

- `default`
- `striped`
- `bordered`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Table, TableProps } from '@intelation/ui';
```
