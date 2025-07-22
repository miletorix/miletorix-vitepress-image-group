import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ImageGroup',
      formats: ['es', 'umd'],
      fileName: (format) => `image-group.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vitepress'],
      output: {
        globals: {
          vue: 'Vue',
          vitepress: 'vitepress'
        }
      }
    }
  }
})