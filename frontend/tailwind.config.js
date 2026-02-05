/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': 'var(--primary-bg)',
        'secondary-bg': 'var(--secondary-bg)',
        'text-main': 'var(--text-main)',
        'text-secondary': 'var(--text-secondary)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob-bounce': 'blob-bounce 10s infinite ease-in-out alternate',
      },
      keyframes: {
        'blob-bounce': {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%', transform: 'translate(-20px, 20px) rotate(180deg)' },
          '100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', transform: 'translate(0, 0) rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
