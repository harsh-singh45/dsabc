import React from "react";
import "./Accordion.css";
export interface AccordionItem {
    /**
     * Unique identifier for the accordion item
     */
    id: string;
    /**
     * Trigger content (visible part that can be clicked)
     */
    trigger: React.ReactNode;
    /**
     * Content to show when expanded
     */
    content: React.ReactNode;
    /**
     * Whether this item is disabled
     */
    disabled?: boolean;
}
export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Array of accordion items
     */
    items: AccordionItem[];
    /**
     * Expansion mode
     * - 'single': Only one item can be expanded at a time
     * - 'multiple': Multiple items can be expanded simultaneously
     * @default "single"
     */
    mode?: "single" | "multiple";
    /**
     * IDs of items that should be expanded by default
     */
    defaultExpanded?: string[];
    /**
     * Controlled expanded state
     */
    expanded?: string[];
    /**
     * Callback when expanded items change
     */
    onExpandChange?: (expandedItems: string[]) => void;
    /**
     * Custom className
     */
    className?: string;
}
/**
 * Accordion component for collapsible content sections
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     { id: '1', trigger: 'Section 1', content: 'Content 1' },
 *     { id: '2', trigger: 'Section 2', content: 'Content 2' }
 *   ]}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Accordion
 *   mode="multiple"
 *   defaultExpanded={['1']}
 *   items={items}
 *   onExpandChange={(expanded) => console.log(expanded)}
 * />
 * ```
 */
export declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Accordion.d.ts.map