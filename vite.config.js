import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [!process.env.VITEST && reactRouter(), tailwindcss()],
  assetsInclude: ["**/*.md"],
  optimizeDeps: {
    include: ["react-icons/fa6", "react-markdown", "axios"],
  },
  test: {
    globals: true,
    setupFiles: "./app/tests/setup.js",
    environment: "jsdom",
  },
});
