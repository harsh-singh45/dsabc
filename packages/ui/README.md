# @intelation/ui

React component library for the Intelation design system.

## Installation

```bash
npm install @intelation/ui @intelation/tokens
```

## Quick Start

```tsx
import { Button, Card, Header } from '@intelation/ui';
import '@intelation/ui/styles';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Body>
        <Button colorScheme="violet">Get Started</Button>
      </Card.Body>
    </Card>
  );
}
```

## Component Categories

### Layout
- **Layout** - Full page layout with header, sidebar, and content areas
- **Header** - Navigation header with logo, nav items, and user profile
- **Sidebar** - Collapsible navigation sidebar
- **Footer** - Page footer
- **Grid** - Responsive grid system
- **Flex** - Flexbox layout utilities
- **Stack** - Vertical/horizontal stacking layout
- **Box** - Primitive container component

### Navigation
- **Breadcrumb** - Breadcrumb navigation
- **Link** - Styled anchor component with active states
- **Menu** - Dropdown menus
- **Pagination** - Page navigation controls
- **Tabs** - Tab navigation

### Forms
- **Button** - Primary interactive element
- **Input** - Text input fields
- **Select** - Dropdown selection
- **Checkbox** - Checkbox inputs
- **RadioGroup** - Radio button groups
- **Textarea** - Multi-line text input
- **Switch** - Toggle switch
- **DatePicker** - Date selection
- **FileUpload** - File upload with drag-and-drop
- **FilterBar** - Search and filter controls

### Data Display
- **Table** - Data tables with sorting and pagination
- **DataGrid** - Advanced data grid
- **DataCard** - Metric display cards
- **Card** - Content container
- **List** - Ordered/unordered lists
- **Timeline** - Event timeline
- **Badge** - Status badges
- **Avatar** - User avatars

### Feedback
- **Alert** - Notification messages
- **Toast** - Toast notifications
- **Modal** - Dialog modals
- **Drawer** - Slide-out panels
- **Progress** - Progress indicators
- **Skeleton** - Loading skeletons
- **Tooltip** - Contextual tooltips

### Charts
- **BarChart** - Bar chart visualization
- **AreaChart** - Area chart visualization
- **LineChart** - Line chart visualization
- **PieChart** - Pie chart visualization

### Workflows
- **Wizard** - Multi-step form workflows
- **Stepper** - Step indicator

### Misc
- **Accordion** - Collapsible content sections
- **Divider** - Content dividers
- **Logo** - Brand logo component

## Token Integration

All components use the @intelation/tokens design token system:

```tsx
import { Button } from '@intelation/ui';

// Components automatically use CSS variables from tokens
<Button colorScheme="violet">Styled with Tokens</Button>
```

Access tokens directly in custom styles:

```css
.custom-element {
  color: var(--color-violet);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}
```

## Documentation

- **Full API Documentation**: [docs/api/index.md](./docs/api/index.md)
- **Component Metadata**: Import from `@intelation/ui/components.json`
- **TypeScript**: Full TypeScript definitions included

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Type checking
npm run type-check

# Build package
npm run build
```

## Peer Dependencies

- `react` >= 18.0.0
- `react-dom` >= 18.0.0

## License

Private package for Intelation use.
