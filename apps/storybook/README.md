# Intelation Design System - Storybook

Interactive documentation for the Intelation Design System components.

## Running Locally

```bash
npm run storybook
```

Opens on http://localhost:6006

## Building

```bash
npm run build-storybook
```

Outputs to `storybook-static/`

## Structure

- `src/stories/` - Story files organized by category
  - `components/` - UI component stories
  - `charts/` - Chart component stories  
  - `layout/` - Layout component stories
  - `design-system/` - Typography and design tokens
- `.storybook/` - Storybook configuration
- `public/` - Static assets

## Writing Stories

Follow the component story template in CONTRIBUTING.md:
- Create meta definition with proper typing
- Include argTypes with descriptions
- Provide multiple story variants
- Add interactive examples with action handlers
- Use decorators for context when needed

## Accessibility Testing

The a11y addon is enabled. Click the "Accessibility" tab in the addons panel to:
- Check color contrast
- Verify ARIA attributes
- Test keyboard navigation
- Ensure semantic HTML

## Deployment

Storybook is automatically deployed on push to main via GitHub Actions.
View live: [Add your deployment URL]
