import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  tailwindcss()
  ],
<<<<<<< HEAD
=======
  server: {
    proxy: {
      '/api': {
        target: 'https://mern-stack-backend-2719.onrender.com'
      }
    }
  }
>>>>>>> d6eee0beefa02fff9f42541f9816dcb62a856852
})
