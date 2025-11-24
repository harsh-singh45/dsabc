import React from "react";
import "./Flex.css";
export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Flex direction
     * @default "row"
     */
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    /**
     * Gap between items using spacing tokens
     * @default "4"
     */
    gap?: string;
    /**
     * Align items
     * @default "stretch"
     */
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    /**
     * Justify content
     * @default "start"
     */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    /**
     * Flex wrap
     * @default false
     */
    wrap?: boolean | "wrap" | "nowrap" | "wrap-reverse";
    /**
     * The HTML tag to render
     * @default "div"
     */
    as?: keyof JSX.IntrinsicElements;
}
/**
 * Flex component for flexbox layouts
 *
 * @example
 * ```tsx
 * <Flex direction="row" gap="4" align="center" justify="between">
 *   <Button>Left</Button>
 *   <Button>Right</Button>
 * </Flex>
 * ```
 */
export declare const Flex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Flex.d.ts.map