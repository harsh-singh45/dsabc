# SearchBox

**Category:** Components

## Description

SearchBox component for advanced search with autocomplete and filtering

## Import

```typescript
import { SearchBox } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | string | ❌ | - | Current search value |
| `onChange` | (value: string) => void | ❌ | - | Callback when search value changes |
| `onSearch` | (query: string) => void | ❌ | - | Callback when search is executed (Enter key or suggestion selected) |
| `suggestions` | SearchSuggestion[] | ❌ | - | Array of search suggestions |
| `loading` | boolean | ❌ | `false` | Loading state for suggestions |
| `showHistory` | boolean | ❌ | `true` | Show search history |
| `maxSuggestions` | number | ❌ | `10` | Maximum number of suggestions to display |
| `categories` | SearchCategory[] | ❌ | - | Available search categories |
| `selectedCategory` | string | ❌ | - | Selected category filter |
| `onCategoryChange` | (categoryId: string | undefined) => void | ❌ | - | Callback when category is selected |
| `debounceMs` | number | ❌ | `300` | Debounce delay in milliseconds |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size variant |
| `className` | string | ❌ | - | Additional CSS class |
| `showClear` | boolean | ❌ | `true` | Show clear button |

## Examples

### Example 1

```tsx
<SearchBox
  value={query}
  onChange={setQuery}
  onSearch={handleSearch}
  suggestions={suggestions}
  loading={isLoading}
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
import { SearchBox, SearchBoxProps } from '@intelation/ui';
```
