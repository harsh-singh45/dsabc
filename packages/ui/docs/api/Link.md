# Link

**Category:** Components

## Description

Link component for anchor-based navigation

## Import

```typescript
import { Link } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `href` | string | ✅ | - | URL to navigate to |
| `variant` | "default" \| "nav" \| "breadcrumb" | ❌ | `default` | Link variant |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Link size |
| `active` | boolean | ❌ | `false` | Whether the link is active/current |
| `disabled` | boolean | ❌ | `false` | Whether the link is disabled |
| `leftIcon` | React.ReactNode | ❌ | - | Icon to display on the left |
| `rightIcon` | React.ReactNode | ❌ | - | Icon to display on the right |
| `underline` | boolean | ❌ | `false for nav variant, true for others` | Whether to show underline |
| `external` | boolean | ❌ | `false` | Whether to open link in new tab |

## Examples

### Example 1

```tsx
<Link href="/about">About Us</Link>
```

### Example 2

```tsx
<Link href="/dashboard" variant="nav" active leftIcon={<Icon />}>
  Dashboard
</Link>
```

### Example 3

```tsx
<Link href="https://example.com" external>
  External Link
</Link>
```

## Variants

### Variants

- `default`
- `nav`
- `breadcrumb`

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
import { Link, LinkProps } from '@intelation/ui';
```
