import React from "react";
import "./Footer.css";
export interface FooterLink {
    /**
     * Unique identifier for the link
     */
    id: string;
    /**
     * Display label for the link
     */
    label: string;
    /**
     * URL or route for the link
     */
    href?: string;
    /**
     * Click handler for the link
     */
    onClick?: (link: FooterLink) => void;
    /**
     * Whether the link is disabled
     * @default false
     */
    disabled?: boolean;
}
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Copyright text to display on the left
     * @default "© 2025 Company Name. All rights reserved."
     */
    copyright?: string;
    /**
     * Links to display on the right
     */
    links?: FooterLink[];
}
/**
 * Footer component with transparent background, copyright text on the left, and links on the right
 *
 * @example
 * ```tsx
 * <Footer
 *   copyright="© 2025 Intelation. All rights reserved."
 *   links={[
 *     { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
 *     { id: 'terms', label: 'Terms of Service', href: '/terms' },
 *     { id: 'contact', label: 'Contact', href: '/contact' }
 *   ]}
 * />
 * ```
 */
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Footer.d.ts.map