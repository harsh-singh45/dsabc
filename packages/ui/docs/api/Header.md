# Header

**Category:** Components

## Description

Header component with logo, navigation, and profile dropdown

## Import

```typescript
import { Header } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `logo` | React.ReactNode | ❌ | - | Logo element or image to display on the left |
| `navigationItems` | NavigationItem[] | ❌ | - | Navigation items to display in the center |
| `userProfile` | UserProfile | ❌ | - | User profile information |
| `profileMenuItems` | ProfileMenuItem[] | ❌ | - | Profile dropdown menu items |
| `fixed` | boolean | ❌ | `false` | Whether the header should have a fixed position |
| `maxWidth` | string | ❌ | `1180px` | Maximum width for the header content container |
| `onLogoClick` | () => void | ❌ | - | Handler for logo click |
| `onProfileClick` | (profile: UserProfile) => void | ❌ | - | Handler for profile click (when no dropdown items provided) |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Header, HeaderProps } from '@intelation/ui';
```
