/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@fortawesome/fontawesome-svg-core'],
    },
  },
  plugins: [
    eslint(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
