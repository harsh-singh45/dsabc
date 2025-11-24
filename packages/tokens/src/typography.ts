/**
 * Typography utility functions for consistent text styling
 */

export interface TypographyVariant {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  fontFamily?: string;
  textTransform?: string;
}

/**
 * Predefined typography variants following design system patterns
 */
export const typographyVariants: Record<string, TypographyVariant> = {
  // Display styles for large headings
  'display-2xl': {
    fontSize: '72px',
    fontWeight: '700',
    lineHeight: '90px',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  'display-xl': {
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: '72px',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  'display-lg': {
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '60px',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  
  // Heading styles
  'heading-xl': {
    fontSize: '36px',
    fontWeight: '600',
    lineHeight: '44px',
    letterSpacing: '-0.01em',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  'heading-lg': {
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '38px',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  'heading-md': {
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '32px',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  'heading-sm': {
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '28px',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  'heading-xs': {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '28px',
    fontFamily: 'var(--typography-fontFamily-heading)',
  },
  
  // Body text styles
  'body-xl': {
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '30px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  'body-lg': {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '28px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  'body-md': {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  'body-sm': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  'body-xs': {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  
  // Code and monospace
  'code-lg': {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    fontFamily: 'var(--typography-fontFamily-code)',
  },
  'code-md': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    fontFamily: 'var(--typography-fontFamily-code)',
  },
  'code-sm': {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    fontFamily: 'var(--typography-fontFamily-code)',
  },
  
  // Labels and captions
  'label-lg': {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  'label-md': {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  'label-sm': {
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '18px',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  
  'caption': {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '0.01em',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
  
  'overline': {
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '16px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontFamily: 'var(--typography-fontFamily-body)',
  },
};

/**
 * Generate CSS class for typography variant
 */
export function getTypographyClass(variant: keyof typeof typographyVariants): string {
  return `typography-${variant}`;
}

/**
 * Get typography variant styles
 */
export function getTypographyVariant(variant: keyof typeof typographyVariants): TypographyVariant {
  const variantStyles = typographyVariants[variant];
  if (!variantStyles) {
    throw new Error(`Typography variant "${variant}" not found`);
  }
  return variantStyles;
}

/**
 * Generate CSS for all typography variants
 */
export function generateTypographyCSS(): string {
  return Object.entries(typographyVariants)
    .map(([variant, styles]) => {
      const cssProps = Object.entries(styles)
        .map(([prop, value]) => {
          const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
          return `  ${cssProp}: ${value};`;
        })
        .join('\n');
      
      return `.typography-${variant} {\n${cssProps}\n}`;
    })
    .join('\n\n');
}