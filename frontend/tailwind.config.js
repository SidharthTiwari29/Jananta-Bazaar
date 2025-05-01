
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure that TailwindCSS can find all your component files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6f00',   // Orange
        secondary: '#009933', // Green
      },
    },
  },
  plugins: [],
}
