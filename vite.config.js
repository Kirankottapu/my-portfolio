import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/', // ✅ This tells Vite to serve from the correct subpath
  plugins: [react(), tailwindcss()],
})
