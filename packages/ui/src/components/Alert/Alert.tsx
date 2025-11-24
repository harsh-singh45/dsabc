import React, { forwardRef, useState } from "react";
import { cn } from "../../utils";
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
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "info",
      title,
      dismissible = false,
      onDismiss,
      icon,
      actions,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      if (onDismiss) {
        onDismiss();
      }
    };

    if (!isVisible) {
      return null;
    }

    const alertClasses = cn(
      "alert",
      `alert--${variant}`,
      className
    );

    // Default icons for each variant
    const defaultIcons: Record<AlertVariant, string> = {
      info: "ℹ",
      success: "✓",
      warning: "⚠",
      error: "✕",
    };

    const displayIcon = icon !== undefined ? icon : defaultIcons[variant];

    return (
      <div
        ref={ref}
        className={alertClasses}
        role="alert"
        aria-live="polite"
        {...props}
      >
        {displayIcon && (
          <div className="alert__icon" aria-hidden="true">
            {displayIcon}
          </div>
        )}

        <div className="alert__content">
          {title && <div className="alert__title">{title}</div>}
          {children && <div className="alert__message">{children}</div>}
          {actions && <div className="alert__actions">{actions}</div>}
        </div>

        {dismissible && (
          <button
            type="button"
            className="alert__close"
            onClick={handleDismiss}
            aria-label="Dismiss alert"
          >
            <span aria-hidden="true">✕</span>
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
