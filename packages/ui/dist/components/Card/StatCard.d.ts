import React from "react";
import "./StatCard.css";
export interface TrendIndicator {
    /**
     * Trend direction
     */
    direction: "up" | "down" | "neutral";
    /**
     * Trend value (numeric or percentage)
     */
    value: number;
    /**
     * Optional label for the trend
     */
    label?: string;
}
export interface ComparisonData {
    /**
     * Comparison value (e.g., "vs last month")
     */
    value: string | number;
    /**
     * Comparison label
     */
    label: string;
}
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon element to display
     */
    icon: React.ReactNode;
    /**
     * Icon color variant
     * @default "violet"
     */
    iconColor?: "violet" | "green" | "cyan" | "orange" | "gray";
    /**
     * Label text (secondary text above value)
     */
    label: string;
    /**
     * Value text (primary text, emphasized)
     */
    value: string | number;
    /**
     * Size variant
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /**
     * Click handler for the stat card
     */
    onClick?: () => void;
    /**
     * Trend indicator with direction and value
     */
    trend?: TrendIndicator;
    /**
     * Comparison data (e.g., previous period)
     */
    comparison?: ComparisonData;
    /**
     * Format type for the value
     * @default "default"
     */
    format?: "number" | "currency" | "percentage" | "default";
    /**
     * Loading state - shows skeleton placeholder
     * @default false
     */
    loading?: boolean;
}
/**
 * StatCard component for displaying statistics with icon, label, and value
 * Used for metrics, KPIs, compliance scores, and other statistical data
 *
 * @example
 * ```tsx
 * <StatCard
 *   icon={<HiLockClosed />}
 *   iconColor="violet"
 *   label="GDPR"
 *   value="91.6%"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With trend indicator
 * <StatCard
 *   icon={<HiTrendingUp />}
 *   iconColor="green"
 *   label="Revenue"
 *   value={125000}
 *   format="currency"
 *   trend={{ direction: "up", value: 12.5, label: "vs last month" }}
 * />
 * ```
 */
export declare const StatCard: React.ForwardRefExoticComponent<StatCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=StatCard.d.ts.map