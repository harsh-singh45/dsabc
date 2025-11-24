import React, { forwardRef } from "react";

import { cn } from "../../utils";

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
export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = "div",
      className,
      style,
      padding,
      margin,
      bg,
      borderRadius,
      border,
      width,
      height,
      display,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as as React.ElementType;
    
    const boxClasses = cn("box", className);
    
    const boxStyles: React.CSSProperties = {
      ...style,
      ...(padding && { padding: padding.includes("var(") ? padding : `var(--spacing-${padding})` }),
      ...(margin && { margin: margin.includes("var(") ? margin : `var(--spacing-${margin})` }),
      ...(bg && { backgroundColor: bg.includes("var(") || bg.includes("#") || bg.includes("rgb") ? bg : `var(--color-${bg})` }),
      ...(borderRadius && { borderRadius: borderRadius.includes("var(") ? borderRadius : `var(--borderRadius-${borderRadius})` }),
      ...(border && { border }),
      ...(width && { width }),
      ...(height && { height }),
      ...(display && { display }),
    };

    return (
      <Component
        ref={ref}
        className={boxClasses}
        style={boxStyles}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";
