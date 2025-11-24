import React from 'react';
import { render, screen } from '@testing-library/react';

import { Box } from './Box';

describe('Box', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(<Box>Box content</Box>);
      
      expect(screen.getByText('Box content')).toBeInTheDocument();
    });

    it('renders as div by default', () => {
      render(<Box data-testid="box">Content</Box>);
      
      const element = screen.getByTestId('box');
      expect(element.tagName).toBe('DIV');
    });

    it('renders with custom className', () => {
      render(<Box className="custom-box" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveClass('custom-box');
      expect(screen.getByTestId('box')).toHaveClass('box');
    });

    it('applies box class', () => {
      render(<Box data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveClass('box');
    });
  });

  describe('Polymorphic "as" prop', () => {
    it('renders as section when as="section"', () => {
      render(<Box as="section" data-testid="box">Content</Box>);
      
      const element = screen.getByTestId('box');
      expect(element.tagName).toBe('SECTION');
    });

    it('renders as article when as="article"', () => {
      render(<Box as="article" data-testid="box">Content</Box>);
      
      const element = screen.getByTestId('box');
      expect(element.tagName).toBe('ARTICLE');
    });

    it('renders as main when as="main"', () => {
      render(<Box as="main" data-testid="box">Content</Box>);
      
      const element = screen.getByTestId('box');
      expect(element.tagName).toBe('MAIN');
    });

    it('renders as aside when as="aside"', () => {
      render(<Box as="aside" data-testid="box">Content</Box>);
      
      const element = screen.getByTestId('box');
      expect(element.tagName).toBe('ASIDE');
    });

    it('renders as span when as="span"', () => {
      render(<Box as="span" data-testid="box">Content</Box>);
      
      const element = screen.getByTestId('box');
      expect(element.tagName).toBe('SPAN');
    });
  });

  describe('Padding', () => {
    it('applies padding with token', () => {
      render(<Box padding="4" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        padding: 'var(--spacing-4)' 
      });
    });

    it('applies padding with md token', () => {
      render(<Box padding="md" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        padding: 'var(--spacing-md)' 
      });
    });

    it('applies padding with lg token', () => {
      render(<Box padding="lg" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        padding: 'var(--spacing-lg)' 
      });
    });

    it('applies padding with CSS variable directly', () => {
      render(<Box padding="var(--spacing-xl)" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        padding: 'var(--spacing-xl)' 
      });
    });

    it('does not apply padding when not provided', () => {
      render(<Box data-testid="box">Content</Box>);
      
      const element = screen.getByTestId('box');
      expect(element.style.padding).toBe('');
    });
  });

  describe('Margin', () => {
    it('applies margin with token', () => {
      render(<Box margin="4" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        margin: 'var(--spacing-4)' 
      });
    });

    it('applies margin with md token', () => {
      render(<Box margin="md" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        margin: 'var(--spacing-md)' 
      });
    });

    it('applies margin with sm token', () => {
      render(<Box margin="sm" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        margin: 'var(--spacing-sm)' 
      });
    });

    it('applies margin with CSS variable directly', () => {
      render(<Box margin="var(--spacing-2xl)" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        margin: 'var(--spacing-2xl)' 
      });
    });
  });

  describe('Background Color', () => {
    it('applies background color with token', () => {
      render(<Box bg="brand-500" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        backgroundColor: 'var(--color-brand-500)' 
      });
    });

    it('applies background color with gray token', () => {
      render(<Box bg="gray-100" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        backgroundColor: 'var(--color-gray-100)' 
      });
    });

    it('applies background color with CSS variable directly', () => {
      render(<Box bg="var(--color-primary)" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        backgroundColor: 'var(--color-primary)' 
      });
    });

    it('applies background color with hex value', () => {
      render(<Box bg="#ff0000" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        backgroundColor: '#ff0000' 
      });
    });

    it('applies background color with rgb value', () => {
      render(<Box bg="rgb(255, 0, 0)" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        backgroundColor: 'rgb(255, 0, 0)' 
      });
    });
  });

  describe('Border Radius', () => {
    it('applies border radius with token', () => {
      render(<Box borderRadius="md" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        borderRadius: 'var(--borderRadius-md)' 
      });
    });

    it('applies border radius with lg token', () => {
      render(<Box borderRadius="lg" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        borderRadius: 'var(--borderRadius-lg)' 
      });
    });

    it('applies border radius with full token', () => {
      render(<Box borderRadius="full" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        borderRadius: 'var(--borderRadius-full)' 
      });
    });

    it('applies border radius with CSS variable directly', () => {
      render(<Box borderRadius="var(--borderRadius-xl)" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        borderRadius: 'var(--borderRadius-xl)' 
      });
    });
  });

  describe('Border', () => {
    it('applies border style', () => {
      render(<Box border="1px solid #e5e7eb" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        border: '1px solid #e5e7eb' 
      });
    });

    it('applies border with different style', () => {
      render(<Box border="2px dashed red" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        border: '2px dashed red' 
      });
    });
  });

  describe('Width', () => {
    it('applies width with percentage', () => {
      render(<Box width="100%" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        width: '100%' 
      });
    });

    it('applies width with pixels', () => {
      render(<Box width="200px" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        width: '200px' 
      });
    });

    it('applies width with auto', () => {
      render(<Box width="auto" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        width: 'auto' 
      });
    });
  });

  describe('Height', () => {
    it('applies height with percentage', () => {
      render(<Box height="100%" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        height: '100%' 
      });
    });

    it('applies height with pixels', () => {
      render(<Box height="150px" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        height: '150px' 
      });
    });

    it('applies height with vh units', () => {
      render(<Box height="100vh" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        height: '100vh' 
      });
    });
  });

  describe('Display', () => {
    it('applies display flex', () => {
      render(<Box display="flex" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        display: 'flex' 
      });
    });

    it('applies display block', () => {
      render(<Box display="block" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        display: 'block' 
      });
    });

    it('applies display inline-block', () => {
      render(<Box display="inline-block" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        display: 'inline-block' 
      });
    });

    it('applies display grid', () => {
      render(<Box display="grid" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        display: 'grid' 
      });
    });

    it('applies display none', () => {
      render(<Box display="none" data-testid="box">Content</Box>);
      
      expect(screen.getByTestId('box')).toHaveStyle({ 
        display: 'none' 
      });
    });
  });

  describe('Combined Props', () => {
    it('applies multiple style properties together', () => {
      render(
        <Box
          padding="md"
          margin="lg"
          bg="brand-500"
          borderRadius="lg"
          width="100%"
          data-testid="box"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      expect(element).toHaveStyle({
        padding: 'var(--spacing-md)',
        margin: 'var(--spacing-lg)',
        backgroundColor: 'var(--color-brand-500)',
        borderRadius: 'var(--borderRadius-lg)',
        width: '100%',
      });
    });

    it('applies all available props together', () => {
      render(
        <Box
          padding="4"
          margin="4"
          bg="gray-100"
          borderRadius="md"
          border="1px solid #e5e7eb"
          width="200px"
          height="150px"
          display="flex"
          data-testid="box"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      expect(element).toHaveStyle({
        padding: 'var(--spacing-4)',
        margin: 'var(--spacing-4)',
        backgroundColor: 'var(--color-gray-100)',
        borderRadius: 'var(--borderRadius-md)',
        border: '1px solid #e5e7eb',
        width: '200px',
        height: '150px',
        display: 'flex',
      });
    });

    it('works with custom element and all props', () => {
      render(
        <Box
          as="section"
          padding="lg"
          bg="#ffffff"
          className="custom"
          data-testid="box"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      expect(element.tagName).toBe('SECTION');
      expect(element).toHaveClass('custom');
      expect(element).toHaveStyle({
        padding: 'var(--spacing-lg)',
        backgroundColor: '#ffffff',
      });
    });
  });

  describe('Custom Styles', () => {
    it('merges custom style prop with box styles', () => {
      render(
        <Box
          style={{ fontSize: '16px', color: 'red' }}
          data-testid="box"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      expect(element).toHaveStyle({
        fontSize: '16px',
        color: 'red',
      });
    });

    it('style prop comes after box props in spread', () => {
      render(
        <Box
          padding="md"
          style={{ padding: '20px' }}
          data-testid="box"
        >
          Content
        </Box>
      );
      
      // Box applies box props after style in the spread order
      expect(screen.getByTestId('box')).toHaveStyle({ 
        padding: 'var(--spacing-md)' 
      });
    });

    it('combines box props with style prop', () => {
      render(
        <Box
          padding="md"
          bg="gray-100"
          style={{ fontSize: '14px', lineHeight: '1.5' }}
          data-testid="box"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      expect(element).toHaveStyle({
        padding: 'var(--spacing-md)',
        backgroundColor: 'var(--color-gray-100)',
        fontSize: '14px',
        lineHeight: '1.5',
      });
    });
  });

  describe('Accessibility', () => {
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLElement>();
      render(<Box ref={ref}>Content</Box>);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('forwards ref with custom element', () => {
      const ref = React.createRef<HTMLElement>();
      render(<Box as="section" ref={ref}>Content</Box>);
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.tagName).toBe('SECTION');
    });

    it('spreads additional HTML props', () => {
      render(
        <Box
          data-testid="box"
          aria-label="Box container"
          role="region"
          id="custom-box"
          title="Box title"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      expect(element).toHaveAttribute('aria-label', 'Box container');
      expect(element).toHaveAttribute('role', 'region');
      expect(element).toHaveAttribute('id', 'custom-box');
      expect(element).toHaveAttribute('title', 'Box title');
    });

    it('supports event handlers', () => {
      const handleClick = jest.fn();
      
      render(
        <Box
          onClick={handleClick}
          data-testid="box"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      element.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty children', () => {
      render(<Box data-testid="box" />);
      
      expect(screen.getByTestId('box')).toBeInTheDocument();
      expect(screen.getByTestId('box')).toBeEmptyDOMElement();
    });

    it('renders with null children', () => {
      render(<Box data-testid="box">{null}</Box>);
      
      expect(screen.getByTestId('box')).toBeInTheDocument();
    });

    it('renders with conditional children', () => {
      render(
        <Box data-testid="box">
          {true && <div>Shown</div>}
          {false && <div>Hidden</div>}
        </Box>
      );
      
      expect(screen.getByText('Shown')).toBeInTheDocument();
      expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
    });

    it('handles complex nested content', () => {
      render(
        <Box padding="md" bg="gray-100" data-testid="box">
          <Box padding="sm" bg="white">
            <span>Nested content</span>
          </Box>
        </Box>
      );
      
      expect(screen.getByText('Nested content')).toBeInTheDocument();
    });

    it('handles undefined props gracefully', () => {
      render(
        <Box
          padding={undefined}
          margin={undefined}
          bg={undefined}
          data-testid="box"
        >
          Content
        </Box>
      );
      
      const element = screen.getByTestId('box');
      expect(element.style.padding).toBe('');
      expect(element.style.margin).toBe('');
      expect(element.style.backgroundColor).toBe('');
    });
  });
});
