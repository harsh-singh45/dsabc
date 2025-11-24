# Pagination

**Category:** Components

## Description

Pagination component for navigating through pages of content

## Import

```typescript
import { Pagination } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `currentPage` | number | ✅ | - | Current active page (1-indexed) |
| `totalPages` | number | ✅ | - | Total number of pages |
| `onPageChange` | (page: number) => void | ✅ | - | Callback when page changes |
| `siblingCount` | number | ❌ | `1` | Number of pages to show on each side of current page |
| `boundaryCount` | number | ❌ | `1` | Number of pages to show at start and end |
| `showFirstLast` | boolean | ❌ | `true` | Show first and last page buttons |
| `showPrevNext` | boolean | ❌ | `true` | Show previous and next buttons |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size variant |
| `variant` | "default" \| "outlined" \| "rounded" | ❌ | `default` | Visual variant |
| `disabled` | boolean | ❌ | `false` | Disable all interactions |
| `"aria-label"` | string | ❌ | - | Custom aria-label for accessibility |

## Examples

### Example 1

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
/>
```

## Variants

### Variants

- `default`
- `outlined`
- `rounded`

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
import { Pagination, PaginationProps } from '@intelation/ui';
```
