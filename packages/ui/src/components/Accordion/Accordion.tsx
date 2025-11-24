import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "../../utils";

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
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      mode = "single",
      defaultExpanded = [],
      expanded: controlledExpanded,
      onExpandChange,
      className,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalExpanded, setInternalExpanded] = useState<string[]>(defaultExpanded);

    // Use controlled or uncontrolled state
    const isControlled = controlledExpanded !== undefined;
    const expandedItems = isControlled ? controlledExpanded : internalExpanded;

    // Handle toggle
    const handleToggle = useCallback(
      (itemId: string) => {
        const item = items.find((i) => i.id === itemId);
        if (item?.disabled) {
          return;
        }

        let newExpanded: string[];

        if (mode === "single") {
          // In single mode, toggle the clicked item or close if already open
          newExpanded = expandedItems.includes(itemId) ? [] : [itemId];
        } else {
          // In multiple mode, toggle the individual item
          newExpanded = expandedItems.includes(itemId)
            ? expandedItems.filter((id) => id !== itemId)
            : [...expandedItems, itemId];
        }

        if (!isControlled) {
          setInternalExpanded(newExpanded);
        }

        onExpandChange?.(newExpanded);
      },
      [items, mode, expandedItems, isControlled, onExpandChange]
    );

    // Handle keyboard navigation
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent, itemId: string, index: number) => {
        const item = items.find((i) => i.id === itemId);
        if (item?.disabled) {
          return;
        }

        switch (e.key) {
          case "Enter":
          case " ": {
            e.preventDefault();
            handleToggle(itemId);
            break;
          }
          case "ArrowDown": {
            e.preventDefault();
            const nextIndex = (index + 1) % items.length;
            const nextItem = items[nextIndex];
            if (nextItem) {
              const nextButton = document.querySelector(
                `[data-accordion-trigger="${nextItem.id}"]`
              ) as HTMLButtonElement;
              nextButton?.focus();
            }
            break;
          }
          case "ArrowUp": {
            e.preventDefault();
            const prevIndex = (index - 1 + items.length) % items.length;
            const prevItem = items[prevIndex];
            if (prevItem) {
              const prevButton = document.querySelector(
                `[data-accordion-trigger="${prevItem.id}"]`
              ) as HTMLButtonElement;
              prevButton?.focus();
            }
            break;
          }
          case "Home": {
            e.preventDefault();
            const firstItem = items[0];
            if (firstItem) {
              const firstButton = document.querySelector(
                `[data-accordion-trigger="${firstItem.id}"]`
              ) as HTMLButtonElement;
              firstButton?.focus();
            }
            break;
          }
          case "End": {
            e.preventDefault();
            const lastItem = items[items.length - 1];
            if (lastItem) {
              const lastButton = document.querySelector(
                `[data-accordion-trigger="${lastItem.id}"]`
              ) as HTMLButtonElement;
              lastButton?.focus();
            }
            break;
          }
        }
      },
      [items, handleToggle]
    );

    return (
      <div ref={ref} className={cn("accordion", className)} {...props}>
        {items.map((item, index) => {
          const isExpanded = expandedItems.includes(item.id);
          const isDisabled = item.disabled;

          return (
            <AccordionItem
              key={item.id}
              item={item}
              isExpanded={isExpanded}
              isDisabled={isDisabled}
              onToggle={() => handleToggle(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id, index)}
            />
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

/**
 * Individual Accordion Item Component
 */
interface AccordionItemComponentProps {
  item: AccordionItem;
  isExpanded: boolean;
  isDisabled?: boolean;
  onToggle: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const AccordionItem: React.FC<AccordionItemComponentProps> = ({
  item,
  isExpanded,
  isDisabled,
  onToggle,
  onKeyDown,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  // Measure content height when expanded state changes
  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(height);
      } else {
        setContentHeight(0);
      }
    }
  }, [isExpanded]);

  // Update height when content changes
  useEffect(() => {
    if (!isExpanded || !contentRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(height);
      }
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isExpanded]);

  return (
    <div
      className={cn(
        "accordion__item",
        isExpanded && "accordion__item--expanded",
        isDisabled && "accordion__item--disabled"
      )}
    >
      <button
        type="button"
        className="accordion__trigger"
        onClick={onToggle}
        onKeyDown={onKeyDown}
        disabled={isDisabled}
        aria-expanded={isExpanded}
        aria-disabled={isDisabled}
        data-accordion-trigger={item.id}
      >
        <span className="accordion__trigger-content">{item.trigger}</span>
        <svg
          className="accordion__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className="accordion__content-wrapper"
        style={{
          height: contentHeight !== undefined ? `${contentHeight}px` : undefined,
        }}
      >
        <div ref={contentRef} className="accordion__content">
          {item.content}
        </div>
      </div>
    </div>
  );
};
