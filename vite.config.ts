import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'es2017',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
});
