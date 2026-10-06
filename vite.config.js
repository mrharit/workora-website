import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // cv-verify-bot is a separate Python project (with its own venv); the web dev server must not watch it.
  server: { port: 5173, open: false, watch: { ignored: ['**/cv-verify-bot/**'] } },
})
