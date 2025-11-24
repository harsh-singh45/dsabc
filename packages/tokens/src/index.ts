// This file re-exports the generated token artifacts so that bundlers
// (vite/rollup) resolve named imports like `tokens` when working with
// the monorepo source files during Storybook builds.
// The actual token values are generated into `dist/` by the build script.

// Re-export generated tokens with proper typing
// @ts-ignore - dist files are generated at build time
export { tokens } from '../dist/index.esm.js';

// Re-export generated types for TypeScript consumers
export type { TokensType } from '../dist/index.d.ts';

// Typography utilities
export * from './typography';
export * from './fonts';

export {};