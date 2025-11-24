# DataGrid

**Category:** Components

## Description

DataGrid component

## Import

```typescript
import { DataGrid } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `columns` | DataGridColumn<T>[] | ✅ | - | Column definitions with DataGrid-specific options |
| `data` | T[] | ✅ | - | Table data |
| `filterable` | boolean | ❌ | `false` | Enable column filtering |
| `filters` | Record<string, FilterValue> | ❌ | - | Current filter values |
| `onFilterChange` | (filters: Record<string, FilterValue>) => void | ❌ | - | Callback when filters change |
| `editable` | boolean | ❌ | `false` | Enable inline editing |
| `onCellEdit` | (rowIndex: number, columnId: string, value: unknown) => void | ❌ | - | Callback when cell is edited |
| `onDataChange` | (newData: T[]) => void | ❌ | - | Callback when data changes |
| `resizableColumns` | boolean | ❌ | `false` | Enable column resizing |
| `reorderableColumns` | boolean | ❌ | `false` | Enable column reordering |
| `columnVisibility` | Record<string, boolean> | ❌ | - | Column visibility state |
| `onColumnResize` | (columnId: string, width: number) => void | ❌ | - | Callback when column is resized |
| `onColumnReorder` | (columnIds: string[]) => void | ❌ | - | Callback when columns are reordered |
| `persistColumnConfig` | boolean | ❌ | `false` | Persist column configuration to localStorage |
| `virtualScrolling` | boolean | ❌ | `false` | Enable virtual scrolling for large datasets |
| `rowHeight` | number | ❌ | `48` | Row height for virtual scrolling |
| `exportable` | boolean | ❌ | `false` | Enable export functionality |
| `exportFormats` | ("csv" | "excel")[] | ❌ | `[csv]` | Export formats to enable |
| `pagination` | {
    page: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
  } | ❌ | - | Pagination configuration |
| `multiSort` | boolean | ❌ | `false` | Enable multi-column sorting |
| `sortState` | Array<{ columnId: string; direction: "asc" | "desc" }> | ❌ | - | Current sort state for multi-sort |
| `onSortChange` | (sortState: Array<{ columnId: string; direction: "asc" | "desc" }>) => void | ❌ | - | Callback when sort changes |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { DataGrid, DataGridProps } from '@intelation/ui';
```
