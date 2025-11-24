/**
 * Utility functions for exporting charts
 */
import type { ExportFormat } from '../types';
/**
 * Exports a canvas element as PNG
 * @param canvas - The canvas element to export
 * @param filename - The name of the file to download
 */
export declare function exportAsPng(canvas: HTMLCanvasElement, filename: string): void;
/**
 * Exports a canvas element as SVG (canvas PNG wrapped in SVG)
 * @param canvas - The canvas element to export
 * @param filename - The name of the file to download
 */
export declare function exportAsSvg(canvas: HTMLCanvasElement, filename: string): void;
/**
 * Exports a canvas element in the specified format
 * @param canvas - The canvas element to export
 * @param format - Export format ('png' or 'svg')
 * @param filename - The name of the file to download
 */
export declare function exportChart(canvas: HTMLCanvasElement, format: ExportFormat, filename: string): void;
//# sourceMappingURL=chartExport.d.ts.map