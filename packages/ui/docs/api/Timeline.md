# Timeline

**Category:** Components

## Description

Timeline component for displaying chronological events

## Import

```typescript
import { Timeline } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `events` | TimelineEvent[] | ✅ | - | Array of timeline events |
| `orientation` | "vertical" \| "horizontal" | ❌ | `vertical` | Timeline orientation |
| `groupBy` | "date" \| "category" \| "none" | ❌ | `none` | Group events by date or category |
| `expandable` | boolean | ❌ | `false` | Whether events are expandable |
| `realTime` | boolean | ❌ | `false` | Enable real-time updates (visual indicator) |
| `formatDate` | (date: Date) => string | ❌ | - | Custom date formatter |
| `className` | string | ❌ | - | Additional CSS class names |

## Examples

### Example 1

```tsx
<Timeline
  events={[
    {
      id: '1',
      timestamp: new Date(),
      title: 'Document uploaded',
      status: 'success',
    },
  ]}
  orientation="vertical"
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
import { Timeline, TimelineProps } from '@intelation/ui';
```
