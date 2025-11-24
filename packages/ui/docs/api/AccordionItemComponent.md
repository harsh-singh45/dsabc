# AccordionItemComponent

**Category:** Components

## Description

Accordion component for collapsible content sections

## Import

```typescript
import { AccordionItemComponent } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `item` | AccordionItem | ✅ | - | - |
| `isExpanded` | boolean | ✅ | - | - |
| `isDisabled` | boolean | ❌ | - | - |
| `onToggle` | () => void | ✅ | - | - |
| `onKeyDown` | (e: React.KeyboardEvent) => void | ✅ | - | - |

## Examples

### Example 1

```tsx
<Accordion
  items={[
    { id: '1', trigger: 'Section 1', content: 'Content 1' },
    { id: '2', trigger: 'Section 2', content: 'Content 2' }
  ]}
/>
```

### Example 2

```tsx
<Accordion
  mode="multiple"
  defaultExpanded={['1']}
  items={items}
  onExpandChange={(expanded) => console.log(expanded)}
/>
```

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { AccordionItemComponent, AccordionItemComponentProps } from '@intelation/ui';
```
