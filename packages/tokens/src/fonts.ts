/**
 * Font Loading Configuration for Intelation Design System
 * This file contains Google Fonts and other font loading configurations
 */

export interface FontConfig {
  name: string;
  weights: number[];
  styles?: string[];
  display?: string;
  preload?: boolean;
}

export const GOOGLE_FONTS: FontConfig[] = [
  {
    name: 'Manrope',
    weights: [200, 300, 400, 500, 600, 700, 800],
    styles: ['normal'],
    display: 'swap',
    preload: true,
  },
];

/**
 * Generate Google Fonts URL
 */
export function generateGoogleFontsUrl(fonts: FontConfig[]): string {
  const families = fonts.map(font => {
    const weights = font.weights.join(',');
    const styles = font.styles ? `:ital,wght@${font.styles.includes('italic') ? '0;1' : '0'},${weights}` : `:wght@${weights}`;
    return `${font.name.replace(/ /g, '+')}${styles}`;
  });
  
  return `https://fonts.googleapis.com/css2?${families.map(f => `family=${f}`).join('&')}&display=swap`;
}

/**
 * Generate font-face CSS for self-hosted fonts
 */
export function generateFontFaceCSS(fontName: string, fontPath: string, weights: number[]): string {
  return weights.map(weight => `
@font-face {
  font-family: '${fontName}';
  src: url('${fontPath}/${fontName}-${weight}.woff2') format('woff2'),
       url('${fontPath}/${fontName}-${weight}.woff') format('woff');
  font-weight: ${weight};
  font-style: normal;
  font-display: swap;
}
`).join('\n');
}

/**
 * Font preload links for critical fonts
 */
export function generatePreloadLinks(fonts: FontConfig[]): string[] {
  return fonts
    .filter(font => font.preload)
    .map(font => 
      `<link rel="preload" href="${generateGoogleFontsUrl([font])}" as="style" onload="this.onload=null;this.rel='stylesheet'">`
    );
}