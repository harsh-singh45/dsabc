# FilterBar

**Category:** Components

## Description

FilterBar component

## Import

```typescript
import { FilterBar } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `searchValue` | string | ❌ | - | Current search value |
| `onSearchChange` | (value: string) => void | ❌ | - | Callback when search changes |
| `showSearch` | boolean | ❌ | `true` | Show search box |
| `searchPlaceholder` | string | ❌ | `Search...` | Search placeholder text |
| `quickFilters` | QuickFilter[] | ❌ | - | Quick filter buttons |
| `onQuickFilterClick` | (filterId: string) => void | ❌ | - | Callback when quick filter is clicked |
| `sortOptions` | SortOption[] | ❌ | - | Available sort options |
| `sortValue` | string | ❌ | - | Current sort value |
| `onSortChange` | (sortValue: string) => void | ❌ | - | Callback when sort changes |
| `showSort` | boolean | ❌ | `true` | Show sort dropdown |
| `viewModes` | ViewMode[] | ❌ | - | Available view modes |
| `currentViewMode` | "list" \| "grid" \| "card" | ❌ | - | Current view mode |
| `onViewModeChange` | (mode: 'list' | 'grid' | 'card') => void | ❌ | - | Callback when view mode changes |
| `showViewModes` | boolean | ❌ | `false` | Show view mode toggles |
| `activeFilters` | ActiveFilter[] | ❌ | - | Active filters (displayed as removable chips) |
| `onFilterRemove` | (filterId: string) => void | ❌ | - | Callback when filter chip is removed |
| `showClearAll` | boolean | ❌ | `true` | Show clear all filters button |
| `onClearAll` | () => void | ❌ | - | Callback when clear all is clicked |
| `resultsCount` | number | ❌ | - | Results count to display |
| `showResultsCount` | boolean | ❌ | `false` | Show results count |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { FilterBar, FilterBarProps } from '@intelation/ui';
```
