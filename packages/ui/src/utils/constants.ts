/**
 * Component Constants
 * Type-safe constants for component props using const assertions
 */

/**
 * Component size variants
 */
export const ComponentSizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type ComponentSize = typeof ComponentSizes[keyof typeof ComponentSizes];

/**
 * Component variant types
 */
export const ComponentVariants = {
  SOLID: 'solid',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  LINK: 'link',
} as const;

export type ComponentVariant = typeof ComponentVariants[keyof typeof ComponentVariants];

/**
 * Color scheme types
 */
export const ColorSchemes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

export type ColorScheme = typeof ColorSchemes[keyof typeof ColorSchemes];

/**
 * Input types
 */
export const InputTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  NUMBER: 'number',
  TEL: 'tel',
  URL: 'url',
  SEARCH: 'search',
  DATE: 'date',
  TIME: 'time',
  DATETIME_LOCAL: 'datetime-local',
} as const;

export type InputType = typeof InputTypes[keyof typeof InputTypes];

/**
 * Stack direction
 */
export const StackDirections = {
  ROW: 'row',
  COLUMN: 'column',
} as const;

export type StackDirection = typeof StackDirections[keyof typeof StackDirections];

/**
 * Stack alignment
 */
export const StackAlignments = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  STRETCH: 'stretch',
  BASELINE: 'baseline',
} as const;

export type StackAlignment = typeof StackAlignments[keyof typeof StackAlignments];

/**
 * Stack justification
 */
export const StackJustifications = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  BETWEEN: 'between',
  AROUND: 'around',
  EVENLY: 'evenly',
} as const;

export type StackJustification = typeof StackJustifications[keyof typeof StackJustifications];

/**
 * Logo variant
 */
export const LogoVariants = {
  FULL: 'full',
  ICON: 'icon',
  WHITE: 'white',
} as const;

export type LogoVariant = typeof LogoVariants[keyof typeof LogoVariants];

/**
 * Logo size
 */
export const LogoSizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export type LogoSize = typeof LogoSizes[keyof typeof LogoSizes];
