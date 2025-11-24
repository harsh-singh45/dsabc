# @intelation/ui

## 1.6.0

### Minor Changes

- Stepper improved

## 1.5.0

### Minor Changes

- Links support added in navigations

## 1.4.1

### Patch Changes

- 2c52482: Fix TypeScript build errors in GaugeChart component by adding fallback defaults for token color values. This resolves compilation issues where token values were typed as potentially undefined, preventing the package from building successfully.

## 1.4.0

### Minor Changes

- README.md added in both packages

### Patch Changes

- Updated dependencies
  - @intelation/tokens@1.4.0

## 1.3.0

### Minor Changes

- Added violet colorScheme to Button component (#696CFF brand color) with all 4 variants (solid, outline, ghost, link) and custom shadow. Added navigationActiveBackground token (#f2f3f3) for highlighting active nav items. All tests passing.

### Patch Changes

- Updated dependencies
  - @intelation/tokens@1.3.0

## 1.2.0

### Minor Changes

- 1997515: More componnets created

### Patch Changes

- Updated dependencies [1997515]
  - @intelation/tokens@1.2.0

## 1.1.0

### Minor Changes

- f2132f6: Add iconColor and iconSize props to ListItem component with token-based styling. Includes violet/green/cyan/orange/gray color variants, sm/md/lg size variants, comprehensive test suite with 43 tests, and alignment with StatCard component API.
- 573c8cd: Fix CSS @import order for Turbopack/Next.js 15 compatibility

### Patch Changes

- Updated dependencies [573c8cd]
  - @intelation/tokens@1.1.0
