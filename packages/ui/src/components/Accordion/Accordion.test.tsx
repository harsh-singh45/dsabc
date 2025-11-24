import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import type { AccordionItem } from "./Accordion";
import { Accordion } from "./Accordion";

const mockItems: AccordionItem[] = [
  {
    id: "item-1",
    trigger: "First Item",
    content: "Content for first item",
  },
  {
    id: "item-2",
    trigger: "Second Item",
    content: "Content for second item",
  },
  {
    id: "item-3",
    trigger: "Third Item",
    content: "Content for third item",
  },
];

describe("Accordion", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      render(<Accordion items={mockItems} />);
      expect(screen.getByText("First Item")).toBeInTheDocument();
    });

    it("renders all accordion items", () => {
      render(<Accordion items={mockItems} />);
      
      expect(screen.getByText("First Item")).toBeInTheDocument();
      expect(screen.getByText("Second Item")).toBeInTheDocument();
      expect(screen.getByText("Third Item")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      const { container } = render(
        <Accordion items={mockItems} className="custom-class" />
      );
      
      const accordion = container.querySelector(".accordion");
      expect(accordion).toHaveClass("custom-class");
    });

    it("renders with custom trigger content", () => {
      const customItems: AccordionItem[] = [
        {
          id: "custom",
          trigger: <div data-testid="custom-trigger">Custom Trigger</div>,
          content: "Custom Content",
        },
      ];

      render(<Accordion items={customItems} />);
      expect(screen.getByTestId("custom-trigger")).toBeInTheDocument();
    });
  });

  describe("Single Mode (Default)", () => {
    it("starts with all items collapsed by default", () => {
      render(<Accordion items={mockItems} />);
      
      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => {
        expect(button).toHaveAttribute("aria-expanded", "false");
      });
    });

    it("expands item when clicked", async () => {
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      fireEvent.click(firstButton);

      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("collapses expanded item when clicked again", async () => {
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      
      // First click - expand
      fireEvent.click(firstButton);
      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });

      // Second click - collapse
      fireEvent.click(firstButton);
      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "false");
      });
    });

    it("only allows one item to be expanded at a time", async () => {
      render(<Accordion items={mockItems} mode="single" />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const secondButton = screen.getByRole("button", { name: "Second Item" });

      // Expand first item
      fireEvent.click(firstButton);
      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });

      // Expand second item
      fireEvent.click(secondButton);
      await waitFor(() => {
        expect(secondButton).toHaveAttribute("aria-expanded", "true");
        expect(firstButton).toHaveAttribute("aria-expanded", "false");
      });
    });

    it("respects defaultExpanded prop in single mode", () => {
      render(<Accordion items={mockItems} mode="single" defaultExpanded={["item-2"]} />);
      
      const secondButton = screen.getByRole("button", { name: "Second Item" });
      expect(secondButton).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("Multiple Mode", () => {
    it("allows multiple items to be expanded simultaneously", async () => {
      render(<Accordion items={mockItems} mode="multiple" />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const secondButton = screen.getByRole("button", { name: "Second Item" });

      // Expand first item
      fireEvent.click(firstButton);
      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });

      // Expand second item
      fireEvent.click(secondButton);
      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
        expect(secondButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("allows toggling individual items independently", async () => {
      render(<Accordion items={mockItems} mode="multiple" />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const secondButton = screen.getByRole("button", { name: "Second Item" });

      // Expand both
      fireEvent.click(firstButton);
      fireEvent.click(secondButton);

      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
        expect(secondButton).toHaveAttribute("aria-expanded", "true");
      });

      // Collapse first only
      fireEvent.click(firstButton);
      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "false");
        expect(secondButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("respects defaultExpanded prop with multiple items", () => {
      render(
        <Accordion
          items={mockItems}
          mode="multiple"
          defaultExpanded={["item-1", "item-3"]}
        />
      );
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const thirdButton = screen.getByRole("button", { name: "Third Item" });

      expect(firstButton).toHaveAttribute("aria-expanded", "true");
      expect(thirdButton).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("Controlled Mode", () => {
    it("uses controlled expanded state", () => {
      const { rerender } = render(
        <Accordion items={mockItems} expanded={["item-1"]} />
      );
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      expect(firstButton).toHaveAttribute("aria-expanded", "true");

      // Update controlled state
      rerender(<Accordion items={mockItems} expanded={["item-2"]} />);
      
      const secondButton = screen.getByRole("button", { name: "Second Item" });
      expect(firstButton).toHaveAttribute("aria-expanded", "false");
      expect(secondButton).toHaveAttribute("aria-expanded", "true");
    });

    it("calls onExpandChange when items are toggled", async () => {
      const handleExpandChange = jest.fn();
      render(
        <Accordion
          items={mockItems}
          expanded={[]}
          onExpandChange={handleExpandChange}
        />
      );
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      fireEvent.click(firstButton);

      expect(handleExpandChange).toHaveBeenCalledWith(["item-1"]);
    });

    it("calls onExpandChange with correct values in multiple mode", async () => {
      const handleExpandChange = jest.fn();
      render(
        <Accordion
          items={mockItems}
          mode="multiple"
          expanded={["item-1"]}
          onExpandChange={handleExpandChange}
        />
      );
      
      const secondButton = screen.getByRole("button", { name: "Second Item" });
      fireEvent.click(secondButton);

      expect(handleExpandChange).toHaveBeenCalledWith(["item-1", "item-2"]);
    });
  });

  describe("Disabled Items", () => {
    const itemsWithDisabled: AccordionItem[] = [
      {
        id: "item-1",
        trigger: "Enabled Item",
        content: "Enabled content",
      },
      {
        id: "item-2",
        trigger: "Disabled Item",
        content: "Disabled content",
        disabled: true,
      },
    ];

    it("renders disabled items correctly", () => {
      render(<Accordion items={itemsWithDisabled} />);
      
      const disabledButton = screen.getByRole("button", { name: "Disabled Item" });
      expect(disabledButton).toBeDisabled();
      expect(disabledButton).toHaveAttribute("aria-disabled", "true");
    });

    it("prevents disabled items from being expanded", async () => {
      render(<Accordion items={itemsWithDisabled} />);
      
      const disabledButton = screen.getByRole("button", { name: "Disabled Item" });
      fireEvent.click(disabledButton);

      await waitFor(() => {
        expect(disabledButton).toHaveAttribute("aria-expanded", "false");
      });
    });

    it("does not call onExpandChange for disabled items", () => {
      const handleExpandChange = jest.fn();
      render(
        <Accordion items={itemsWithDisabled} onExpandChange={handleExpandChange} />
      );
      
      const disabledButton = screen.getByText("Disabled Item");
      fireEvent.click(disabledButton);

      expect(handleExpandChange).not.toHaveBeenCalled();
    });
  });

  describe("Keyboard Navigation", () => {
    it("expands item on Enter key", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      firstButton.focus();
      await user.keyboard("{Enter}");

      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("expands item on Space key", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      firstButton.focus();
      await user.keyboard(" ");

      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("navigates to next item with ArrowDown", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const secondButton = screen.getByRole("button", { name: "Second Item" });
      
      firstButton.focus();
      await user.keyboard("{ArrowDown}");

      expect(secondButton).toHaveFocus();
    });

    it("navigates to previous item with ArrowUp", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const secondButton = screen.getByRole("button", { name: "Second Item" });
      
      secondButton.focus();
      await user.keyboard("{ArrowUp}");

      expect(firstButton).toHaveFocus();
    });

    it("wraps to first item when ArrowDown on last item", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const thirdButton = screen.getByRole("button", { name: "Third Item" });
      
      thirdButton.focus();
      await user.keyboard("{ArrowDown}");

      expect(firstButton).toHaveFocus();
    });

    it("wraps to last item when ArrowUp on first item", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const thirdButton = screen.getByRole("button", { name: "Third Item" });
      
      firstButton.focus();
      await user.keyboard("{ArrowUp}");

      expect(thirdButton).toHaveFocus();
    });

    it("navigates to first item with Home key", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const thirdButton = screen.getByRole("button", { name: "Third Item" });
      
      thirdButton.focus();
      await user.keyboard("{Home}");

      expect(firstButton).toHaveFocus();
    });

    it("navigates to last item with End key", async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const thirdButton = screen.getByRole("button", { name: "Third Item" });
      
      firstButton.focus();
      await user.keyboard("{End}");

      expect(thirdButton).toHaveFocus();
    });

    it("does not activate disabled items with keyboard", async () => {
      const user = userEvent.setup();
      const itemsWithDisabled: AccordionItem[] = [
        {
          id: "item-1",
          trigger: "Enabled Item",
          content: "Enabled content",
        },
        {
          id: "item-2",
          trigger: "Disabled Item",
          content: "Disabled content",
          disabled: true,
        },
      ];

      render(<Accordion items={itemsWithDisabled} />);
      
      const disabledButton = screen.getByRole("button", { name: "Disabled Item" });
      disabledButton.focus();
      await user.keyboard("{Enter}");

      expect(disabledButton).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("Accessibility", () => {
    it("has correct ARIA attributes", () => {
      render(<Accordion items={mockItems} />);
      
      const buttons = screen.getAllByRole("button");
      
      buttons.forEach((button) => {
        expect(button).toHaveAttribute("aria-expanded");
      });
    });

    it("updates aria-expanded when items are toggled", async () => {
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      expect(firstButton).toHaveAttribute("aria-expanded", "false");

      fireEvent.click(firstButton);

      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("has aria-disabled on disabled items", () => {
      const itemsWithDisabled: AccordionItem[] = [
        {
          id: "item-1",
          trigger: "Disabled Item",
          content: "Disabled content",
          disabled: true,
        },
      ];

      render(<Accordion items={itemsWithDisabled} />);
      
      const button = screen.getByRole("button", { name: "Disabled Item" });
      expect(button).toHaveAttribute("aria-disabled", "true");
    });

    it("has type='button' on triggers", () => {
      render(<Accordion items={mockItems} />);
      
      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => {
        expect(button).toHaveAttribute("type", "button");
      });
    });
  });

  describe("Content Display", () => {
    it("shows content when item is expanded", async () => {
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByText("First Item");
      fireEvent.click(firstButton);

      await waitFor(() => {
        expect(screen.getByText("Content for first item")).toBeInTheDocument();
      });
    });

    it("hides content when item is collapsed", async () => {
      render(<Accordion items={mockItems} defaultExpanded={["item-1"]} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });
      const content = screen.getByText("Content for first item");
      expect(content).toBeInTheDocument();

      fireEvent.click(firstButton);

      await waitFor(() => {
        // Content should still be in DOM but with height 0
        expect(firstButton).toHaveAttribute("aria-expanded", "false");
      });
    });

    it("renders complex content correctly", () => {
      const complexItems: AccordionItem[] = [
        {
          id: "complex",
          trigger: "Complex Item",
          content: (
            <div>
              <p>Paragraph 1</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            </div>
          ),
        },
      ];

      render(<Accordion items={complexItems} defaultExpanded={["complex"]} />);
      
      expect(screen.getByText("Paragraph 1")).toBeInTheDocument();
      expect(screen.getByText("Item 1")).toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    it("handles empty items array", () => {
      render(<Accordion items={[]} />);
      
      const buttons = screen.queryAllByRole("button");
      expect(buttons).toHaveLength(0);
    });

    it("handles single item", () => {
      const singleItem: AccordionItem[] = [
        {
          id: "single",
          trigger: "Single Item",
          content: "Single content",
        },
      ];

      render(<Accordion items={singleItem} />);
      
      expect(screen.getByText("Single Item")).toBeInTheDocument();
    });

    it("handles rapid toggling", async () => {
      render(<Accordion items={mockItems} />);
      
      const firstButton = screen.getByRole("button", { name: "First Item" });

      // Rapid clicks
      fireEvent.click(firstButton);
      fireEvent.click(firstButton);
      fireEvent.click(firstButton);

      await waitFor(() => {
        expect(firstButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Accordion ref={ref} items={mockItems} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass("accordion");
    });
  });
});
