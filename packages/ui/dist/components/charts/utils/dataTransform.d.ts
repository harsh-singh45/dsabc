/**
 * Utility functions for data transformation and validation
 */
/**
 * Parses a comma-separated string into an array of numbers
 * @param str - Comma-separated string
 * @returns Array of parsed numbers
 */
export declare function parseCSV(str: string): number[];
/**
 * Parses a comma-separated string into an array of category strings
 * @param str - Comma-separated string
 * @returns Array of trimmed strings
 */
export declare function parseCategories(str: string): string[];
/**
 * Clamps a value between min and max
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Derives analytics data (trend and volatility) from base metrics
 * @param labels - Category labels
 * @param activeFrameworks - Active frameworks data
 * @param countriesCovered - Countries covered data
 * @returns Object with trend and volatility arrays
 */
export declare function deriveAnalytics(labels: string[], activeFrameworks: number[], countriesCovered: number[]): {
    trend: number[];
    volatility: number[];
};
/**
 * Pads an array to a specific length with a default value
 * @param arr - Input array
 * @param length - Target length
 * @param defaultValue - Value to pad with
 * @returns Padded array
 */
export declare function padArray<T>(arr: T[], length: number, defaultValue: T): T[];
//# sourceMappingURL=dataTransform.d.ts.map