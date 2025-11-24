# Footer

**Category:** Components

## Description

Footer component with transparent background, copyright text on the left, and links on the right

## Import

```typescript
import { Footer } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `copyright` | string | ❌ | `© 2025 Company Name. All rights reserved.` | Copyright text to display on the left |
| `links` | FooterLink[] | ❌ | - | Links to display on the right |

## Examples

### Example 1

```tsx
<Footer
  copyright="© 2025 Intelation. All rights reserved."
  links={[
    { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
    { id: 'terms', label: 'Terms of Service', href: '/terms' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ]}
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
import { Footer, FooterProps } from '@intelation/ui';
```
