import React from 'react';
import type { AreaChartDataset, ChartSize, ExportFormat } from '../types';
import './AreaChart.css';
export interface AreaChartProps {
    /**
     * Labels for the x-axis
     */
    labels: string[];
    /**
     * Array of datasets to display
     */
    datasets: AreaChartDataset[];
    /**
     * Chart size
     * @default "lg"
     */
    size?: ChartSize;
    /**
     * Enable stacked mode
     * @default false
     */
    stacked?: boolean;
    /**
     * Enable smooth curves (bezier)
     * @default true
     */
    smooth?: boolean;
    /**
     * Show data points on lines
     * @default true
     */
    showPoints?: boolean;
    /**
     * Show grid lines
     * @default true
     */
    showGrid?: boolean;
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
     * X-axis configuration
     */
    xAxis?: {
        label?: string;
        display?: boolean;
    };
    /**
     * Y-axis configuration
     */
    yAxis?: {
        label?: string;
        display?: boolean;
        min?: number;
        max?: number;
    };
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
 * AreaChart component for displaying trends with filled areas
 *
 * @example
 * ```tsx
 * <AreaChart
 *   labels={['Jan', 'Feb', 'Mar', 'Apr']}
 *   datasets={[
 *     { label: 'Revenue', data: [100, 120, 140, 160] },
 *     { label: 'Expenses', data: [80, 90, 95, 100] },
 *   ]}
 *   size="lg"
 * />
 * ```
 */
export declare const AreaChart: React.ForwardRefExoticComponent<AreaChartProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AreaChart.d.ts.map