import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        post: 'src/Post/index.html'
      }
    },
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
  }
}
})
