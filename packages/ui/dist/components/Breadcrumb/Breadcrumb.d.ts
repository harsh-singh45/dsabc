import React from 'react';
import './Breadcrumb.css';
export interface BreadcrumbItem {
    /**
     * Unique identifier for the breadcrumb item
     */
    id: string;
    /**
     * Display label for the breadcrumb item
     */
    label: string;
    /**
     * Optional href for navigation
     */
    href?: string;
    /**
     * Whether this is the active/current page
     */
    active?: boolean;
    /**
     * Optional icon to display before the label
     */
    icon?: React.ReactNode;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Array of breadcrumb items to display
     */
    items: BreadcrumbItem[];
    /**
     * Custom separator between breadcrumb items
     * @default '/'
     */
    separator?: React.ReactNode;
    /**
     * Maximum number of items to display before collapsing
     * Middle items will be collapsed with an ellipsis
     */
    maxItems?: number;
    /**
     * Callback when a breadcrumb item is clicked
     */
    onItemClick?: (item: BreadcrumbItem) => void;
    /**
     * Additional CSS class names
     */
    className?: string;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Breadcrumb.d.ts.map