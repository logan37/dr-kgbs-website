import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// BASE_PATH is the folder the site is served from.
//   "/"                  for a custom domain (default)
//   "/dr-kgbs-website/"  for https://<user>.github.io/dr-kgbs-website/
const base = process.env.BASE_PATH || '/'

export default defineConfig(({ isSsrBuild }) => ({
  base: base.endsWith('/') ? base : `${base}/`,
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            manualChunks: { react: ['react', 'react-dom', 'react-router'] },
          },
        },
      },
}))
