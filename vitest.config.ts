import { defineConfig } from "vitest/config";

export default defineConfig({
  css: {
    // Disable PostCSS loading for tests to avoid Next/Tailwind-specific config issues
    postcss: null
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    coverage: {
      reporter: ["text", "html"]
    }
  }
});