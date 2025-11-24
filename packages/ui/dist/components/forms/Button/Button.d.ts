import React from "react";
import "./Button.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variant
     * @default "solid"
     */
    variant?: "solid" | "outline" | "ghost" | "link";
    /**
     * Button color scheme
     * @default "primary"
     */
    colorScheme?: "primary" | "secondary" | "success" | "warning" | "danger" | "violet";
    /**
     * Button size
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /**
     * Full width button
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Loading state
     * @default false
     */
    loading?: boolean;
    /**
     * Icon to display on the left
     */
    leftIcon?: React.ReactNode;
    /**
     * Icon to display on the right
     */
    rightIcon?: React.ReactNode;
    /**
     * The HTML tag to render
     * @default "button"
     */
    as?: "button" | "a";
}
/**
 * Button component with multiple variants and color schemes
 *
 * @example
 * ```tsx
 * <Button variant="solid" colorScheme="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map