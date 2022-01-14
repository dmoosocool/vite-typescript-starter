/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxFragment: 'Fragment',
    jsxFactory: 'h',
  },
  test: {
    /** for example, use global to avoid globals imports (describe, test, expect): */
    global: true,
  },
});
