import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
});
