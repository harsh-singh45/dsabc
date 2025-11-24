import React from "react";
import "./Drawer.css";
export interface DrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Whether the drawer is open
     */
    open: boolean;
    /**
     * Callback when drawer should close
     */
    onClose: () => void;
    /**
     * Direction from which the drawer slides
     * @default "right"
     */
    direction?: "left" | "right" | "top" | "bottom";
    /**
     * Drawer size
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | "full";
    /**
     * Variant of the drawer
     * @default "temporary"
     */
    variant?: "persistent" | "temporary";
    /**
     * Drawer title
     */
    title?: string;
    /**
     * Footer content
     */
    footer?: React.ReactNode;
    /**
     * Drawer content
     */
    children: React.ReactNode;
    /**
     * Custom className for drawer content
     */
    className?: string;
    /**
     * Custom className for drawer overlay
     */
    overlayClassName?: string;
}
/**
 * Drawer component for slide-out panels
 *
 * @example
 * ```tsx
 * <Drawer open={isOpen} onClose={() => setIsOpen(false)} title="Settings">
 *   <p>Drawer content here</p>
 * </Drawer>
 * ```
 *
 * @example
 * ```tsx
 * <Drawer
 *   open={isOpen}
 *   onClose={handleClose}
 *   direction="left"
 *   size="lg"
 * >
 *   <nav>Navigation items</nav>
 * </Drawer>
 * ```
 */
export declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Drawer.d.ts.map