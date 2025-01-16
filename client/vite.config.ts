import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import electron from 'vite-plugin-electron'

export default defineConfig({
  plugins: [
    react(),
    electron({
      // Define the Electron main entry point
      entry: resolve(__dirname, 'src', 'main.js'),

    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext', 
    minify: false, 
    sourcemap: true, 
  },
  esbuild: {
    loader: 'tsx', // Uses SWC for faster builds
  },
})
