import React from 'react';
import './Divider.css';
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Orientation of the divider
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Optional text label to display in the divider
     */
    label?: string;
    /**
     * Line style of the divider
     * @default 'solid'
     */
    dividerStyle?: 'solid' | 'dashed' | 'dotted';
    /**
     * Thickness of the divider line in pixels
     * @default 1
     */
    thickness?: 1 | 2 | 3;
    /**
     * Custom color for the divider (CSS custom property or color value)
     * Falls back to design token if not provided
     */
    color?: string;
    /**
     * Additional CSS class names
     */
    className?: string;
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Divider.d.ts.map