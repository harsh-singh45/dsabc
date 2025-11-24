import React from 'react';
import { cn } from '../../utils';
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

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      badgeStyle = 'solid',
      shape = 'pill',
      removable = false,
      onRemove,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove?.();
    };

    return (
      <span
        ref={ref}
        className={cn(
          'badge',
          `badge--${variant}`,
          `badge--${size}`,
          `badge--${badgeStyle}`,
          `badge--${shape}`,
          className
        )}
        {...props}
      >
        {icon && <span className="badge__icon">{icon}</span>}
        <span className="badge__content">{children}</span>
        {removable && (
          <button
            type="button"
            className="badge__remove"
            onClick={handleRemove}
            aria-label="Remove"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 3L3 9M3 3L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
