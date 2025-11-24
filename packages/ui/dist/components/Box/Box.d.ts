import React from "react";
import "./Box.css";
export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The HTML tag to render
     * @default "div"
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Padding value using spacing tokens
     * @example "4" | "8" | "md"
     */
    padding?: string;
    /**
     * Margin value using spacing tokens
     * @example "4" | "8" | "md"
     */
    margin?: string;
    /**
     * Background color using color tokens
     * @example "brand-500" | "gray-100"
     */
    bg?: string;
    /**
     * Border radius using border radius tokens
     * @example "md" | "lg" | "full"
     */
    borderRadius?: string;
    /**
     * Border style
     * @example "1px solid #e5e7eb"
     */
    border?: string;
    /**
     * Width
     * @example "100%" | "auto" | "200px"
     */
    width?: string;
    /**
     * Height
     * @example "100%" | "auto" | "200px"
     */
    height?: string;
    /**
     * Display property
     * @example "flex" | "block" | "inline-block"
     */
    display?: string;
}
/**
 * Box component - A flexible container component for layouts
 *
 * @example
 * ```tsx
 * <Box padding="4" bg="gray-100" borderRadius="md">
 *   Content
 * </Box>
 * ```
 */
export declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Box.d.ts.map