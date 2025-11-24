# DatePicker

**Category:** Components

## Description

DatePicker component for selecting dates

## Import

```typescript
import { DatePicker } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | "null" | ❌ | - | Selected date (controlled mode)
- Single mode: Date | null
- Range mode: [Date, Date] | null
- Multiple mode: Date[] | null |
| `defaultValue` | "null" | ❌ | - | Default selected date (uncontrolled mode) |
| `onChange` | (date: Date | Date[] | [Date, Date] | null) => void | ❌ | - | Callback when date changes |
| `mode` | "single" \| "range" \| "multiple" | ❌ | `single` | Selection mode |
| `dateFormat` | string | ❌ | `MM/dd/yyyy` | Date format for display |
| `placeholder` | string | ❌ | `Select date` | Placeholder text |
| `minDate` | Date | ❌ | - | Minimum selectable date |
| `maxDate` | Date | ❌ | - | Maximum selectable date |
| `disabledDates` | (date: Date) => boolean | ❌ | - | Function to determine if a date should be disabled |
| `showTimeSelect` | boolean | ❌ | `false` | Show time selection |
| `presets` | DatePreset[] | ❌ | - | Quick date presets |
| `disabled` | boolean | ❌ | `false` | Disabled state |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size variant |
| `clearable` | boolean | ❌ | `true` | Show clear button |

## Examples

### Example 1

```tsx
<DatePicker
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
/>
```

### Example 2

```tsx
<DatePicker
  mode="range"
  value={dateRange}
  onChange={(range) => setDateRange(range)}
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
import { DatePicker, DatePickerProps } from '@intelation/ui';
```
