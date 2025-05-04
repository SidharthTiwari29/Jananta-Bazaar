import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.janata-bazaar.in',
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: ['.replit.dev'], // Allow all Replit-hosted URLs
  },
});
