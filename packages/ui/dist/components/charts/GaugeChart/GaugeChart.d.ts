import React from 'react';
import type { ChartSize } from '../types';
import './GaugeChart.css';
export interface GaugeChartProps {
    /**
     * Current value (0-100)
     * @default 0
     */
    value: number;
    /**
     * Optional custom label. If not provided, will auto-generate based on value
     */
    label?: string;
    /**
     * Size of the gauge
     * @default 'md'
     */
    size?: ChartSize;
    /**
     * Number of segments in the gauge
     * @default 40
     */
    segments?: number;
    /**
     * Start color for active segments (hex)
     * @default '#d6d7ff'
     */
    startColor?: string;
    /**
     * End color for active segments (hex)
     * @default '#5558e6'
     */
    endColor?: string;
    /**
     * Inactive segment color
     * @default '#ebebff'
     */
    inactiveColor?: string;
    /**
     * Whether to animate value changes
     * @default true
     */
    animated?: boolean;
    /**
     * Callback when value changes (for controlled component)
     */
    onChange?: (value: number) => void;
    /**
     * Show slider control
     * @default false
     */
    showControls?: boolean;
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
 * GaugeChart - A semi-circular gauge with animated segments
 *
 * @example
 * ```tsx
 * <GaugeChart value={75} size="md" />
 * ```
 */
export declare const GaugeChart: React.ForwardRefExoticComponent<GaugeChartProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=GaugeChart.d.ts.map