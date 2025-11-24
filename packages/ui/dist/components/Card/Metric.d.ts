import React from "react";
import "./Card.css";
export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Metric value to display
     */
    value: string | number;
    /**
     * Metric label/description
     */
    label: string;
}
/**
 * Metric component for displaying a value with its label
 * Used within Card components for showing statistics and KPIs
 *
 * @example
 * ```tsx
 * <Metric value="278 MB" label="Processing Volume" />
 * ```
 */
export declare const Metric: React.ForwardRefExoticComponent<MetricProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Metric.d.ts.map