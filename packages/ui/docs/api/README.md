# Component API Documentation

This directory contains auto-generated API documentation for all components in the `@intelation/ui` package.

## Files

- `index.md` - Complete component index organized by category
- `[ComponentName].md` - Individual component documentation

## Generation

Documentation is automatically generated during the build process from TypeScript source files and JSDoc comments.

To regenerate:

```bash
npm run build:metadata
```

## For AI Agents

This documentation is specifically designed to be machine-readable and easily consumed by AI agents and automated systems.

Each component document includes:
- Description
- Import statement
- Props table with types and defaults
- Enum values for variants
- Code examples
- Accessibility information
- TypeScript usage

## Do Not Edit

⚠️ **Do not manually edit files in this directory.** They are auto-generated and will be overwritten on the next build.

To update documentation:
1. Edit JSDoc comments in component source files (`src/components/*`)
2. Run `npm run build:metadata`
