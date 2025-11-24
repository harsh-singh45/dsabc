import React from 'react';
import type { ChartSize, ExportFormat, PieChartDataPoint } from '../types';
import './PieChart.css';
export interface PieChartProps {
    /**
     * Data points with labels, values, and optional colors
     */
    data: PieChartDataPoint[];
    /**
     * Chart size
     * @default "lg"
     */
    size?: ChartSize;
    /**
     * Enable donut mode (center cutout)
     * @default false
     */
    donut?: boolean;
    /**
     * Show percentage labels on slices
     * @default false
     */
    showPercentages?: boolean;
    /**
     * Show legend
     * @default true
     */
    showLegend?: boolean;
    /**
     * Show export controls (PNG/SVG)
     * @default false
     */
    showExportControls?: boolean;
    /**
     * Callback when export button is clicked
     */
    onExport?: (format: ExportFormat) => void;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Accessible label for the chart
     */
    'aria-label'?: string;
}
/**
 * PieChart component for displaying part-to-whole relationships
 *
 * @example
 * ```tsx
 * <PieChart
 *   data={[
 *     { label: 'Product A', value: 30 },
 *     { label: 'Product B', value: 45 },
 *     { label: 'Product C', value: 25 },
 *   ]}
 *   size="lg"
 * />
 * ```
 */
export declare const PieChart: React.ForwardRefExoticComponent<PieChartProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=PieChart.d.ts.map