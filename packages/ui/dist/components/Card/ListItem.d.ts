import React from "react";
import "./ListItem.css";
export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon element or image URL
     */
    icon?: React.ReactNode | string;
    /**
     * Icon color variant
     * @default undefined
     */
    iconColor?: "violet" | "green" | "cyan" | "orange" | "gray";
    /**
     * Icon size variant
     * @default "md"
     */
    iconSize?: "sm" | "md" | "lg";
    /**
     * Main title text
     */
    title: string;
    /**
     * Optional value text
     */
    value?: string | number;
    /**
     * Position of the value
     * @default "right"
     */
    valuePosition?: "right" | "bottom";
    /**
     * Click handler for the list item
     */
    onClick?: () => void;
}
/**
 * ListItem component for displaying items in a Card list variant
 *
 * @example
 * ```tsx
 * <ListItem
 *   icon={<UserIcon />}
 *   iconColor="violet"
 *   iconSize="md"
 *   title="John Doe"
 *   value="Active"
 * />
 * ```
 */
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ListItem.d.ts.map