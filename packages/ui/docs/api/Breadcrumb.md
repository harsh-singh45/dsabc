# Breadcrumb

**Category:** Components

## Description

Breadcrumb component

## Import

```typescript
import { Breadcrumb } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | BreadcrumbItem[] | ✅ | - | Array of breadcrumb items to display |
| `separator` | React.ReactNode | ❌ | `/` | Custom separator between breadcrumb items |
| `maxItems` | number | ❌ | - | Maximum number of items to display before collapsing
Middle items will be collapsed with an ellipsis |
| `onItemClick` | (item: BreadcrumbItem) => void | ❌ | - | Callback when a breadcrumb item is clicked |
| `className` | string | ❌ | - | Additional CSS class names |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Breadcrumb, BreadcrumbProps } from '@intelation/ui';
```
