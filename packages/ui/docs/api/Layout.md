# Layout

**Category:** Components

## Description

Layout wrapper component that provides consistent page structure with Header, Footer, and main content area

## Import

```typescript
import { Layout } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | React.ReactNode | ✅ | - | Page content to render in the main area |
| `header` | "false" | ❌ | - | Header configuration. Pass false to hide the header. |
| `footer` | "false" | ❌ | - | Footer configuration. Pass false to hide the footer. |
| `contentMaxWidth` | string | ❌ | `1180px` | Maximum width for the content container |
| `contentPadding` | string | ❌ | `2rem` | Padding around the content area |
| `fullWidth` | boolean | ❌ | `false` | Remove content container constraints for full-width layouts |
| `stickyFooter` | boolean | ❌ | `false` | Keep footer at the bottom even on short pages |
| `contentClassName` | string | ❌ | - | Custom className for the main content area |

## Examples

### Example 1

```tsx
// Full layout with header and footer
<Layout
  header={{
    logo: <Logo />,
    navigationItems: navItems,
    userProfile: user,
    profileMenuItems: menuItems,
  }}
  footer={{
    copyright: "© 2025 Company",
    links: footerLinks,
  }}
>
  <h1>Page Content</h1>
</Layout>

// Content only (no header/footer)
<Layout header={false} footer={false}>
  <LoginForm />
</Layout>

// Full width content
<Layout
  header={headerConfig}
  footer={footerConfig}
  fullWidth={true}
>
  <Dashboard />
</Layout>
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
import { Layout, LayoutProps } from '@intelation/ui';
```
