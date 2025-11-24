import React from 'react';
import type { CenterTextConfig, ChartDataPoint, ChartSize } from '../types';
import './DonutChart.css';
export interface DonutChartProps {
    /**
     * Chart data array
     */
    data: ChartDataPoint[];
    /**
     * Center text configuration
     */
    centerText?: CenterTextConfig;
    /**
     * Size of the chart
     * @default 'md'
     */
    size?: ChartSize;
    /**
     * Default colors if not specified in data
     */
    defaultColors?: string[];
    /**
     * Show legend
     * @default false
     */
    showLegend?: boolean;
    /**
     * Enable animations
     * @default true
     */
    animated?: boolean;
    /**
     * Callback when segment is clicked
     */
    onSegmentClick?: (segment: ChartDataPoint, index: number) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Custom aria-label for accessibility
     */
    'aria-label'?: string;
}
/**
 * DonutChart - A customizable donut chart with optional center text
 *
 * @example
 * ```tsx
 * <DonutChart
 *   data={[
 *     { label: 'Active', value: 30 },
 *     { label: 'Healthy', value: 25 },
 *   ]}
 *   centerText={{ value: '93.1%', label: 'Healthy' }}
 * />
 * ```
 */
export declare const DonutChart: React.ForwardRefExoticComponent<DonutChartProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DonutChart.d.ts.map