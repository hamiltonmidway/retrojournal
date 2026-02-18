import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',             // <--- ENSURES PATHS WORK IN ELECTRON
  server: {
    host: '127.0.0.1',    // <--- FORCE IPv4
    port: 5173,           // <--- LOCK THE PORT
  }
})