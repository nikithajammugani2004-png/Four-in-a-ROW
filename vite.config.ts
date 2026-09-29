/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Four-in-a-ROW/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'node'
  }
});
