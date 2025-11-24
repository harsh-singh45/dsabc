import React from "react";
import "./Avatar.css";
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Avatar image source
     */
    src?: string;
    /**
     * Avatar alt text
     */
    alt?: string;
    /**
     * Name to generate initials from (if no src)
     */
    name?: string;
    /**
     * Avatar size
     * @default "md"
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * Avatar shape
     * @default "circle"
     */
    shape?: "circle" | "square";
    /**
     * Custom color scheme
     */
    colorScheme?: "primary" | "secondary" | "success" | "danger" | "warning" | "gradient";
}
/**
 * Avatar component for user profile pictures or initials
 *
 * @example
 * ```tsx
 * <Avatar
 *   src="/avatar.jpg"
 *   alt="John Doe"
 *   size="md"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Avatar
 *   name="John Doe"
 *   size="lg"
 *   colorScheme="primary"
 * />
 * ```
 */
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Avatar.d.ts.map