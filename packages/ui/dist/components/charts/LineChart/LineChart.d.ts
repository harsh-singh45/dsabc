import React from 'react';
import type { ChartSize, ExportFormat, LineChartDataset } from '../types';
import './LineChart.css';
export interface LineChartProps {
    /**
     * Labels for the x-axis
     */
    labels: string[];
    /**
     * Array of datasets to display
     */
    datasets: LineChartDataset[];
    /**
     * Chart size
     * @default "lg"
     */
    size?: ChartSize;
    /**
     * Show grid lines
     * @default true
     */
    showGrid?: boolean;
    /**
     * Show data points on the line
     * @default true
     */
    showPoints?: boolean;
    /**
     * Use smooth curved lines instead of straight lines
     * @default true
     */
    smooth?: boolean;
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
 * LineChart component for displaying time series and continuous data
 *
 * @example
 * ```tsx
 * <LineChart
 *   labels={['Jan', 'Feb', 'Mar', 'Apr']}
 *   datasets={[
 *     { label: 'Sales', data: [120, 150, 180, 200] },
 *     { label: 'Costs', data: [80, 90, 100, 110] },
 *   ]}
 *   size="lg"
 *   showGrid={true}
 * />
 * ```
 */
export declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=LineChart.d.ts.map