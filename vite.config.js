import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // or react, etc.

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'build'
  }
});