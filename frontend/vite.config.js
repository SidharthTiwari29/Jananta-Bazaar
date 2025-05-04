const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
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
    allowedHosts: ['.replit.dev'],
  },
});
