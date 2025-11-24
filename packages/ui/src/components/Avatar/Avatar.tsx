import React, { forwardRef } from "react";
import { cn } from "../../utils";
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
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = "md",
      shape = "circle",
      colorScheme = "primary",
      className,
      ...props
    },
    ref
  ) => {
    const getInitials = (name: string): string => {
      return name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };
    
    const avatarClasses = cn(
      "avatar",
      `avatar--${size}`,
      `avatar--${shape}`,
      !src && `avatar--${colorScheme}`,
      className
    );

    return (
      <div ref={ref} className={avatarClasses} {...props}>
        {src ? (
          <img src={src} alt={alt || name || "Avatar"} className="avatar-image" />
        ) : name ? (
          <span className="avatar-initials">{getInitials(name)}</span>
        ) : (
          <span className="avatar-initials">?</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
