import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    minify: 'esbuild', // szybsza i mniejsza minifikacja
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // monitoruj wielkość
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
