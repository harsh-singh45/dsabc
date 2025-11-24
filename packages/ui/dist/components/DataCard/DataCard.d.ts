import React from 'react';
import './DataCard.css';
export interface DataField {
    /**
     * Field label/name
     */
    label: string;
    /**
     * Field value (can be text, badge, or custom component)
     */
    value: React.ReactNode;
    /**
     * Grid column span (used in grid layout)
     * @default 1
     */
    span?: number;
    /**
     * Field type for rendering
     * @default 'text'
     */
    type?: 'text' | 'badge' | 'link' | 'custom';
}
export interface CardAction {
    /**
     * Action label
     */
    label: string;
    /**
     * Click handler
     */
    onClick: () => void;
    /**
     * Action variant
     * @default 'secondary'
     */
    variant?: 'primary' | 'secondary' | 'danger';
    /**
     * Optional icon
     */
    icon?: React.ReactNode;
    /**
     * Whether action is disabled
     */
    disabled?: boolean;
}
export interface DataCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Card title
     */
    title: string;
    /**
     * Optional subtitle
     */
    subtitle?: string;
    /**
     * Array of data fields to display
     */
    fields: DataField[];
    /**
     * Layout mode for fields
     * @default 'grid'
     */
    layout?: 'grid' | 'list';
    /**
     * Actions to display in header
     */
    actions?: CardAction[];
    /**
     * Whether card content is expandable
     * @default false
     */
    expandable?: boolean;
    /**
     * Status indicator
     */
    status?: 'active' | 'inactive' | 'warning' | 'error';
    /**
     * Avatar image URL or custom component
     */
    avatar?: string | React.ReactNode;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Controlled expanded state
     */
    expanded?: boolean;
    /**
     * Callback when expanded state changes
     */
    onExpandChange?: (expanded: boolean) => void;
    /**
     * Footer content
     */
    footer?: React.ReactNode;
}
/**
 * DataCard component for structured information display
 *
 * @example
 * ```tsx
 * <DataCard
 *   title="User Profile"
 *   subtitle="Active user"
 *   status="active"
 *   fields={[
 *     { label: 'Name', value: 'John Doe' },
 *     { label: 'Email', value: 'john@example.com', type: 'link' },
 *     { label: 'Status', value: 'Active', type: 'badge' }
 *   ]}
 *   layout="grid"
 * />
 * ```
 */
export declare const DataCard: React.ForwardRefExoticComponent<DataCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DataCard.d.ts.map