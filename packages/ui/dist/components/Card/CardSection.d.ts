import React from "react";
import "./CardSection.css";
export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Section title (optional)
     */
    title?: string;
    /**
     * Section description (optional)
     */
    description?: string;
    /**
     * Section content
     */
    children: React.ReactNode;
    /**
     * Flex grow/basis value
     * Can be a number (flex-grow) or string (flex-basis like "300px")
     * @default 1
     */
    flex?: number | string;
    /**
     * Whether to show the divider on the right side
     * Automatically determined based on position, but can be overridden
     * @default undefined (auto-detected)
     */
    showDivider?: boolean;
    /**
     * Gap from top and bottom borders for the divider
     * @default "md"
     */
    dividerGap?: "none" | "sm" | "md" | "lg";
}
/**
 * CardSection component for creating split/sectioned cards
 * Use multiple CardSection components inside a Card to create split layouts
 *
 * @example
 * ```tsx
 * <Card title="Split Card">
 *   <CardSection flex={2}>
 *     <BarChart data={data} />
 *   </CardSection>
 *   <CardSection flex={1} title="Metrics">
 *     <GaugeChart value={85} />
 *   </CardSection>
 * </Card>
 * ```
 */
export declare const CardSection: React.ForwardRefExoticComponent<CardSectionProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=CardSection.d.ts.map