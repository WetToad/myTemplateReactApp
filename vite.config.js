import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config
export default defineConfig({
  plugins: [react()],

  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },

  server: {
    host: true,
    strictPort: true,
    port: 5173
  }
})