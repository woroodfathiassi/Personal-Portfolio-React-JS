// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";
// export default defineConfig({
// plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { resolve } from "path";

export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      // This sets the 'src' alias
      '@': resolve(__dirname, 'src'), 
      src: resolve(__dirname, "src"),
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";
// import { resolve } from "path";

// export default defineConfig({
//   root: 'src', // Set the root directory to 'src'
//   build: {
//     outDir: '../dist', // Output directory for build
//     emptyOutDir: true, // Clear the output directory before building
//   },
//   // base: '/', // Base public path
//   plugins: [react()], // Plugins configuration
//   css: {
//     postcss: {
//       plugins: [tailwindcss()], // Tailwind CSS integration
//     },
//   },
//   resolve: {
//     alias: {
//       // Aliases for easier imports
//       '@': resolve(__dirname, 'src'), 
//       src: resolve(__dirname, "src"),
//     },
//   },
// });

