import React from "react";
import "./Card.css";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Card title
     */
    title?: string;
    /**
     * Card description
     */
    description?: string;
    /**
     * Card content
     */
    children?: React.ReactNode;
    /**
     * Whether to show the menu button (three dots)
     * @default false
     */
    showMenu?: boolean;
    /**
     * Handler for menu button click
     */
    onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Card variant
     * @default "default"
     */
    variant?: "default" | "image-overlay" | "list" | "multi-section";
    /**
     * Background image URL (used with image-overlay variant)
     */
    backgroundImage?: string;
    /**
     * Optional link to make the entire card clickable
     */
    href?: string;
    /**
     * Link target attribute (e.g., "_blank" for new tab)
     */
    target?: string;
    /**
     * Optional footer content displayed below the card content
     */
    footer?: React.ReactNode;
}
/**
 * Card component with title, description, and content area
 *
 * @example
 * ```tsx
 * <Card
 *   title="Card Title"
 *   description="Card description text"
 * >
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map