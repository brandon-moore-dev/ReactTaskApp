import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    include: [
      'react-icons/fa6',
      'react-markdown'
    ]
  }
});
