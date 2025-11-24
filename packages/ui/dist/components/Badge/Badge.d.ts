import React from 'react';
import './Badge.css';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Content of the badge
     */
    children: React.ReactNode;
    /**
     * Visual variant of the badge
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    /**
     * Size of the badge
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Visual style of the badge
     * @default 'solid'
     */
    badgeStyle?: 'solid' | 'outline';
    /**
     * Shape of the badge
     * @default 'pill'
     */
    shape?: 'pill' | 'rectangular';
    /**
     * Whether the badge can be removed
     * @default false
     */
    removable?: boolean;
    /**
     * Callback when remove button is clicked
     */
    onRemove?: () => void;
    /**
     * Optional icon to display before the text
     */
    icon?: React.ReactNode;
    /**
     * Additional CSS class names
     */
    className?: string;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=Badge.d.ts.map