import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Generate sourcemap for better debugging
    sourcemap: false,
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router']
        }
      }
    }
  },
  // Ensure proper base for deployment
  base: '/',
  // Preview settings for production testing
  preview: {
    port: 4173,
    strictPort: true
  }
})