/**
 * Utility functions for color interpolation
 */
export type RGB = [number, number, number];
/**
 * Interpolates between two RGB colors
 * @param color1 - Start color as RGB array
 * @param color2 - End color as RGB array
 * @param factor - Interpolation factor (0-1)
 * @returns Interpolated color as CSS rgb string
 */
export declare function interpolateColor(color1: RGB, color2: RGB, factor: number): string;
/**
 * Converts hex color to RGB array
 * @param hex - Hex color string (e.g., '#FF5733')
 * @returns RGB array [r, g, b]
 */
export declare function hexToRgb(hex: string): RGB;
/**
 * Converts RGB array to hex color string
 * @param rgb - RGB array [r, g, b]
 * @returns Hex color string (e.g., '#FF5733')
 */
export declare function rgbToHex(rgb: RGB): string;
/**
 * Resolves CSS variable to computed color value
 * @param cssVar - CSS variable string (e.g., 'var(--color-primary)' or '#FF5733')
 * @returns Resolved color value
 */
export declare function resolveCssColor(cssVar: string): string;
//# sourceMappingURL=colorInterpolation.d.ts.map