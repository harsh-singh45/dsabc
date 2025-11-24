import React from "react";
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
export declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Header.d.ts.map