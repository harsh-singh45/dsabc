/**
 * Component Constants
 * Type-safe constants for component props using const assertions
 */
/**
 * Component size variants
 */
export declare const ComponentSizes: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export type ComponentSize = typeof ComponentSizes[keyof typeof ComponentSizes];
/**
 * Component variant types
 */
export declare const ComponentVariants: {
    readonly SOLID: "solid";
    readonly OUTLINE: "outline";
    readonly GHOST: "ghost";
    readonly LINK: "link";
};
export type ComponentVariant = typeof ComponentVariants[keyof typeof ComponentVariants];
/**
 * Color scheme types
 */
export declare const ColorSchemes: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
};
export type ColorScheme = typeof ColorSchemes[keyof typeof ColorSchemes];
/**
 * Input types
 */
export declare const InputTypes: {
    readonly TEXT: "text";
    readonly EMAIL: "email";
    readonly PASSWORD: "password";
    readonly NUMBER: "number";
    readonly TEL: "tel";
    readonly URL: "url";
    readonly SEARCH: "search";
    readonly DATE: "date";
    readonly TIME: "time";
    readonly DATETIME_LOCAL: "datetime-local";
};
export type InputType = typeof InputTypes[keyof typeof InputTypes];
/**
 * Stack direction
 */
export declare const StackDirections: {
    readonly ROW: "row";
    readonly COLUMN: "column";
};
export type StackDirection = typeof StackDirections[keyof typeof StackDirections];
/**
 * Stack alignment
 */
export declare const StackAlignments: {
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
    readonly STRETCH: "stretch";
    readonly BASELINE: "baseline";
};
export type StackAlignment = typeof StackAlignments[keyof typeof StackAlignments];
/**
 * Stack justification
 */
export declare const StackJustifications: {
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
    readonly BETWEEN: "between";
    readonly AROUND: "around";
    readonly EVENLY: "evenly";
};
export type StackJustification = typeof StackJustifications[keyof typeof StackJustifications];
/**
 * Logo variant
 */
export declare const LogoVariants: {
    readonly FULL: "full";
    readonly ICON: "icon";
    readonly WHITE: "white";
};
export type LogoVariant = typeof LogoVariants[keyof typeof LogoVariants];
/**
 * Logo size
 */
export declare const LogoSizes: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
    readonly XL: "xl";
};
export type LogoSize = typeof LogoSizes[keyof typeof LogoSizes];
//# sourceMappingURL=constants.d.ts.map