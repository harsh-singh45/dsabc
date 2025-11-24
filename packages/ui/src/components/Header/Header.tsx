import React, { useEffect,useRef, useState } from "react";

import { cn } from "../../utils";
import { NavItem } from "../Link/NavItem";

import "./Header.css";

export interface NavigationItem {
  /**
   * Unique identifier for the navigation item
   */
  id: string;
  
  /**
   * Display label for the navigation item
   */
  label: string;
  
  /**
   * URL or route for the navigation item
   */
  href?: string;
  
  /**
   * Click handler for the navigation item
   */
  onClick?: (item: NavigationItem) => void;
  
  /**
   * Whether the navigation item is active/current
   * @default false
   */
  active?: boolean;
  
  /**
   * Whether the navigation item is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface ProfileMenuItem {
  /**
   * Unique identifier for the menu item
   */
  id: string;
  
  /**
   * Display label for the menu item
   */
  label: string;
  
  /**
   * Icon to display alongside the menu item
   */
  icon?: React.ReactNode;
  
  /**
   * Click handler for the menu item
   */
  onClick?: (item: ProfileMenuItem) => void;
  
  /**
   * Whether this is a separator item
   * @default false
   */
  separator?: boolean;
  
  /**
   * Whether the menu item is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface UserProfile {
  /**
   * User's display name
   */
  name: string;
  
  /**
   * User's email address
   */
  email?: string;
  
  /**
   * URL to user's avatar image
   */
  avatar?: string;
  
  /**
   * User's initials (fallback for avatar)
   */
  initials?: string;
  
  /**
   * Custom icon component to display (e.g., <i className="bi bi-person-circle" />)
   * Priority: avatar → icon → initials → default icon
   */
  icon?: React.ReactNode;
  
  /**
   * Hide the avatar/icon in the profile section
   * @default false
   */
  hideAvatar?: boolean;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Logo element or image to display on the left
   */
  logo?: React.ReactNode;
  
  /**
   * Navigation items to display in the center
   */
  navigationItems?: NavigationItem[];
  
  /**
   * User profile information
   */
  userProfile?: UserProfile;
  
  /**
   * Profile dropdown menu items
   */
  profileMenuItems?: ProfileMenuItem[];
  
  /**
   * Whether the header should have a fixed position
   * @default false
   */
  fixed?: boolean;
  
  /**
   * Maximum width for the header content container
   * @default "1180px"
   */
  maxWidth?: string;
  
  /**
   * Handler for logo click
   */
  onLogoClick?: () => void;
  
  /**
   * Handler for profile click (when no dropdown items provided)
   */
  onProfileClick?: (profile: UserProfile) => void;
}

/**
 * Header component with logo, navigation, and profile dropdown
 * 
 * @example
 * ```tsx
 * <Header
 *   logo={<img src="/logo.png" alt="Company Logo" />}
 *   navigationItems={[
 *     { id: 'home', label: 'Home', href: '/', active: true },
 *     { id: 'about', label: 'About', href: '/about' },
 *     { id: 'contact', label: 'Contact', href: '/contact' }
 *   ]}
 *   userProfile={{
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     initials: 'JD'
 *   }}
 *   profileMenuItems={[
 *     { id: 'profile', label: 'Profile', onClick: () => {} },
 *     { id: 'settings', label: 'Settings', onClick: () => {} },
 *     { id: 'logout', label: 'Logout', onClick: () => {} }
 *   ]}
 * />
 * ```
 */
export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      logo,
      navigationItems = [],
      userProfile,
      profileMenuItems = [],
      fixed = false,
      maxWidth = "1180px",
      onLogoClick,
      onProfileClick,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const profileButtonRef = useRef<HTMLButtonElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          profileButtonRef.current &&
          !profileButtonRef.current.contains(event.target as Node)
        ) {
          setIsProfileDropdownOpen(false);
        }
      };

      if (isProfileDropdownOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isProfileDropdownOpen]);

    // Close dropdown on escape key
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsProfileDropdownOpen(false);
        }
      };

      if (isProfileDropdownOpen) {
        document.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isProfileDropdownOpen]);

    const headerClasses = cn(
      "header",
      {
        "header--fixed": fixed,
      },
      className
    );

    const handleProfileButtonClick = () => {
      if (profileMenuItems.length > 0) {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
      } else if (onProfileClick && userProfile) {
        onProfileClick(userProfile);
      }
    };

    const handleProfileMenuItemClick = (item: ProfileMenuItem) => {
      if (item.disabled || item.separator) {
        return;
      }
      
      setIsProfileDropdownOpen(false);
      if (item.onClick) {
        item.onClick(item);
      }
    };

    const renderAvatar = () => {
      // Don't render avatar if hideAvatar is true
      if (userProfile?.hideAvatar) {
        return null;
      }
      
      if (userProfile?.avatar) {
        return (
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="header__profile-avatar"
          />
        );
      }
      
      if (userProfile?.icon) {
        return (
          <div className="header__profile-icon-wrapper">
            {userProfile.icon}
          </div>
        );
      }
      
      if (userProfile?.initials) {
        return (
          <div className="header__profile-initials">
            {userProfile.initials}
          </div>
        );
      }

      // Default avatar icon
      return (
        <div className="header__profile-initials">
          <svg
            className="header__profile-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      );
    };

    return (
      <header
        ref={ref}
        className={headerClasses}
        style={style}
        {...props}
      >
        <div className="header__container" style={{ maxWidth }}>
          {/* Logo Section */}
          <div className="header__logo">
            {logo && (
              <button
                type="button"
                className="header__logo-button"
                onClick={onLogoClick}
                aria-label="Go to homepage"
              >
                {logo}
              </button>
            )}
          </div>

          {/* Navigation Section */}
          <nav className="header__navigation" role="navigation" aria-label="Main navigation">
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li key={item.id} className="header__nav-item">
                  <NavItem
                    href={item.href || "#"}
                    className={cn(
                      "header__nav-link",
                      {
                        "header__nav-link--active": item.active,
                        "header__nav-link--disabled": item.disabled,
                      }
                    )}
                    active={item.active}
                    disabled={item.disabled}
                    onClick={(e) => {
                      if (item.disabled) {
                        e.preventDefault();
                        return;
                      }
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick(item);
                      }
                    }}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.label}
                  </NavItem>
                </li>
              ))}
            </ul>
          </nav>

          {/* Profile Section */}
          {userProfile && (
            <div className="header__profile">
              <button
                ref={profileButtonRef}
                type="button"
                className={cn(
                  "header__profile-button",
                  {
                    "header__profile-button--open": isProfileDropdownOpen,
                  }
                )}
                onClick={handleProfileButtonClick}
                aria-expanded={isProfileDropdownOpen}
                aria-haspopup={profileMenuItems.length > 0 ? "menu" : undefined}
                aria-label={`${userProfile.name} profile menu`}
              >
                {renderAvatar()}
                <div className="header__profile-info">
                  <span className="header__profile-name">{userProfile.name}</span>
                  {userProfile.email && (
                    <span className="header__profile-email">{userProfile.email}</span>
                  )}
                </div>
                {profileMenuItems.length > 0 && (
                  <svg
                    className={cn(
                      "header__profile-arrow",
                      {
                        "header__profile-arrow--open": isProfileDropdownOpen,
                      }
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Profile Dropdown */}
              {profileMenuItems.length > 0 && (
                <div
                  ref={dropdownRef}
                  className={cn(
                    "header__profile-dropdown",
                    {
                      "header__profile-dropdown--open": isProfileDropdownOpen,
                    }
                  )}
                  role="menu"
                  aria-labelledby="profile-button"
                >
                  <ul className="header__profile-menu">
                    {profileMenuItems.map((item) => (
                      <li key={item.id} className="header__profile-menu-item">
                        {item.separator ? (
                          <div className="header__profile-separator" role="separator" />
                        ) : (
                          <button
                            type="button"
                            className={cn(
                              "header__profile-menu-link",
                              {
                                "header__profile-menu-link--disabled": item.disabled,
                              }
                            )}
                            onClick={() => handleProfileMenuItemClick(item)}
                            disabled={item.disabled}
                            role="menuitem"
                          >
                            {item.icon && (
                              <span className="header__profile-menu-icon" aria-hidden="true">
                                {item.icon}
                              </span>
                            )}
                            <span className="header__profile-menu-label">{item.label}</span>
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";