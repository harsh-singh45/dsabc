import React from 'react';
import type { BarChartDataset, ChartSize, ExportFormat } from '../types';
import './BarChart.css';
export interface BarChartProps {
    /**
     * Labels for the x-axis (vertical) or y-axis (horizontal)
     */
    labels: string[];
    /**
     * Array of datasets to display
     */
    datasets: BarChartDataset[];
    /**
     * Chart size
     * @default "lg"
     */
    size?: ChartSize;
    /**
     * Chart orientation
     * @default "vertical"
     */
    orientation?: 'vertical' | 'horizontal';
    /**
     * Enable stacked mode
     * @default false
     */
    stacked?: boolean;
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
        format?: 'percentage' | 'currency' | 'number';
    };
    /**
     * Layout padding configuration
     */
    layoutPadding?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /**
     * Bar width percentage (0-1). Controls how much of the category width the bars occupy.
     * @default 0.9
     */
    barPercentage?: number;
    /**
     * Category width percentage (0-1). Controls spacing between bar groups.
     * @default 0.8
     */
    categoryPercentage?: number;
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
 * BarChart component for displaying categorical data comparisons
 *
 * @example
 * ```tsx
 * <BarChart
 *   labels={['Q1', 'Q2', 'Q3', 'Q4']}
 *   datasets={[
 *     { label: 'Sales', data: [120, 150, 180, 200] },
 *     { label: 'Costs', data: [80, 90, 100, 110] },
 *   ]}
 *   size="lg"
 *   orientation="vertical"
 * />
 * ```
 */
export declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BarChart.d.ts.map