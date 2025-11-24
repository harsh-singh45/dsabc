import React from "react";
import "./Alert.css";
export type AlertVariant = "info" | "success" | "warning" | "error";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Alert variant
     * @default "info"
     */
    variant?: AlertVariant;
    /**
     * Alert title
     */
    title?: string;
    /**
     * Whether the alert can be dismissed
     * @default false
     */
    dismissible?: boolean;
    /**
     * Callback when alert is dismissed
     */
    onDismiss?: () => void;
    /**
     * Optional icon to display
     */
    icon?: React.ReactNode;
    /**
     * Action buttons or links
     */
    actions?: React.ReactNode;
    /**
     * Alert content
     */
    children?: React.ReactNode;
}
/**
 * Alert component for displaying important messages to users
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!">
 *   Your changes have been saved.
 * </Alert>
 * ```
 *
 * @example
 * ```tsx
 * <Alert
 *   variant="error"
 *   dismissible
 *   onDismiss={() => console.log('Dismissed')}
 * >
 *   An error occurred. Please try again.
 * </Alert>
 * ```
 */
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Alert.d.ts.map