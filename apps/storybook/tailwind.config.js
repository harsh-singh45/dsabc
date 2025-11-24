import tokens from '@intelation/tokens/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tokens],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
