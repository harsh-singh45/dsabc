import React from "react";
export interface MetricGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Metric components to display
     */
    children: React.ReactNode;
}
/**
 * MetricGroup component for displaying multiple metrics together
 * Used within Card components for organizing related statistics
 * Metrics handle their own spacing via margin-bottom
 *
 * @example
 * ```tsx
 * <MetricGroup>
 *   <Metric value="278 MB" label="Processing Volume" />
 *   <Metric value="93.1%" label="Anonymization Rate" />
 * </MetricGroup>
 * ```
 */
export declare const MetricGroup: React.ForwardRefExoticComponent<MetricGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MetricGroup.d.ts.map