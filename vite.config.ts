import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { resolve } from "path";

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: ['es2018'], // Adjust target here
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), 
      src: resolve(__dirname, "src"),
    },
  },
});
