import { tokens } from "@intelation/tokens";

// Export all constants
export * from "./constants";

/**
 * Utility function to combine class names (similar to clsx)
 */
export function cn(...inputs: (string | number | boolean | object | undefined | null)[]): string {
  const classes: string[] = [];
  
  for (const input of inputs) {
    if (!input) {
      continue;
    }
    
    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
    } else if (typeof input === 'object' && !Array.isArray(input)) {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }
  
  return classes.join(' ');
}

/**
 * Get responsive styles for different breakpoints
 */
export function getResponsiveValue<T>(
  value: T | ResponsiveValue<T>,
  breakpoint: BreakpointKey = "base"
): T {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const responsiveValue = value as ResponsiveValue<T>;
    const key = breakpoint as keyof ResponsiveValue<T>;
    return responsiveValue[key] ?? responsiveValue.base ?? (value as T);
  }
  return value as T;
}

/**
 * Generate responsive CSS classes
 */
export function generateResponsiveClasses<T>(
  value: ResponsiveValue<T>,
  classGenerator: (val: T) => string
): string {
  const classes: string[] = [];
  
  Object.entries(value).forEach(([breakpoint, val]) => {
    if (val !== undefined) {
      const className = classGenerator(val as T);
      if (breakpoint === "base") {
        classes.push(className);
      } else {
        classes.push(`${breakpoint}:${className}`);
      }
    }
  });
  
  return classes.join(" ");
}

/**
 * Convert token key to CSS custom property
 */
export function getTokenVar(tokenPath: string): string {
  return `var(--${tokenPath.replace(/\./g, "-")})`;
}

/**
 * Get color value from tokens
 */
export function getColor(colorKey: string): string {
  const colorPath = colorKey.split(".");
  let color: any = tokens.color;
  
  for (const key of colorPath) {
    color = color?.[key];
  }
  
  return color || colorKey;
}

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
