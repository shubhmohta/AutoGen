// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/AutoGen/',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:5500",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

