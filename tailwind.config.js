/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f4fbf7',
          mint: '#e6f6ec',
          accent: '#059669', // emerald-600
          hover: '#047857',  // emerald-700
          dark: '#064e3b',   // emerald-900
          cardBg: '#ffffff',
          textMuted: '#4b5563', // gray-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(6, 78, 59, 0.05), 0 1px 3px rgba(6, 78, 59, 0.02)',
        'card-hover': '0 20px 40px -15px rgba(6, 78, 59, 0.1), 0 1px 5px rgba(6, 78, 59, 0.03)',
      },
    },
  },
  plugins: [],
}
