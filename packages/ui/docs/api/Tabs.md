# Tabs

**Category:** Components

## Description

Tabs component for content organization with horizontal and vertical tab navigation

## Import

```typescript
import { Tabs } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | TabItem[] | ✅ | - | Array of tab items |
| `activeTab` | string | ❌ | - | ID of the active tab (controlled) |
| `defaultActiveTab` | string | ❌ | - | ID of the default active tab (uncontrolled) |
| `onChange` | (tabId: string) => void | ❌ | - | Callback when active tab changes |
| `orientation` | "horizontal" \| "vertical" | ❌ | `horizontal` | Tab orientation |
| `variant` | "underline" \| "pills" \| "cards" | ❌ | `underline` | Visual variant |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Tab size |
| `className` | string | ❌ | - | Custom className |

## Examples

### Example 1

```tsx
<Tabs
  items={[
    { id: '1', label: 'Tab 1', content: 'Content 1' },
    { id: '2', label: 'Tab 2', content: 'Content 2' }
  ]}
/>
```

### Example 2

```tsx
<Tabs
  items={tabs}
  variant="pills"
  orientation="vertical"
  activeTab={activeId}
  onChange={setActiveId}
/>
```

## Variants

### Variants

- `underline`
- `pills`
- `cards`

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
import { Tabs, TabsProps } from '@intelation/ui';
```
