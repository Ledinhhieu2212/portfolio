import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    alias: {
      // Set up the alias for the parent directory using ~
      '~': '/src', // Update '/src' with the actual path to your source directory
      "@assets": "/src/assets",
    },
  },
})
