import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // ✅ This fixes the GitHub Pages 404 issue
  plugins: [react(), tailwindcss()],
})
