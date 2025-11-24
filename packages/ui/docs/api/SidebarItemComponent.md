# SidebarItemComponent

**Category:** Components

## Description

SidebarItemComponent component

## Import

```typescript
import { SidebarItemComponent } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `item` | SidebarItem | ✅ | - | - |
| `collapsed` | boolean | ✅ | - | - |
| `level` | number | ✅ | - | - |
| `activeItemId` | string | ❌ | - | - |
| `expandedItems` | Set<string> | ✅ | - | - |
| `onItemClick` | (item: SidebarItem) => void | ❌ | - | - |
| `onToggleExpand` | (itemId: string) => void | ✅ | - | - |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { SidebarItemComponent, SidebarItemComponentProps } from '@intelation/ui';
```
