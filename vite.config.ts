import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "https://backend.getlinked.ai",
        changeOrigin: true,
        secure: false,      
        ws: true,
      }
      
    }
  },
  plugins: [react()],
})
