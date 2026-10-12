/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        yellow: 'var(--yellow)',
        orange: 'var(--orange)',
        army: 'var(--army)',
        steel: 'var(--steel)',
        concrete: 'var(--concrete)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Jersey 10"', 'Impact', 'sans-serif'],
        hand: ['"Permanent Marker"', 'cursive'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
