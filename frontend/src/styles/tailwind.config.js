/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure Tailwind scans all relevant files for class names
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Your premium branding color (green)
        secondary: '#45a049', // Darker shade of primary color
        accent: '#F9A825', // Accent color (can be for buttons, highlights)
        background: '#f9f9f9', // Subtle off-white background
        textPrimary: '#333', // Primary text color
        textSecondary: '#555', // Secondary text color
        borderColor: '#ddd', // Border color for inputs, cards, etc.
        hoverColor: '#888', // Hover color for interactive elements like scrollbars
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Inter font (premium choice)
      },
      boxShadow: {
        'xl': '0 20px 30px rgba(0, 0, 0, 0.1)', // Subtle premium box-shadow
        'lg': '0 10px 15px rgba(0, 0, 0, 0.05)', // Lighter shadow for cards and containers
      },
      spacing: {
        18: '4.5rem', // Custom spacing for padding/margin
        72: '18rem', // Custom width/height
      },
      screens: {
        'xs': '475px', // Mobile-first breakpoint for small screens
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px', // Large screen support
      },
    },
  },
  plugins: [],
}

