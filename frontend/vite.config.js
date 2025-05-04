export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Add this line
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.janata-bazaar.in',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
