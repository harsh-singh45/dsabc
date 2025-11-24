export * from "./constants";
/**
 * Utility function to combine class names (similar to clsx)
 */
export declare function cn(...inputs: (string | number | boolean | object | undefined | null)[]): string;
/**
 * Get responsive styles for different breakpoints
 */
export declare function getResponsiveValue<T>(value: T | ResponsiveValue<T>, breakpoint?: BreakpointKey): T;
/**
 * Generate responsive CSS classes
 */
export declare function generateResponsiveClasses<T>(value: ResponsiveValue<T>, classGenerator: (val: T) => string): string;
/**
 * Convert token key to CSS custom property
 */
export declare function getTokenVar(tokenPath: string): string;
/**
 * Get color value from tokens
 */
export declare function getColor(colorKey: string): string;
/**
 * Type definitions
 */
export type BreakpointKey = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
export interface ResponsiveValue<T> {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    "2xl"?: T;
}
export type ColorTokens = string;
export type FontSizeTokens = string;
export type BorderRadiusTokens = string;
//# sourceMappingURL=index.d.ts.map