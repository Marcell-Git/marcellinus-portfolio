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
        pink: 'var(--pink)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        orange: 'var(--orange)',
        mint: 'var(--mint)',
        sky: 'var(--sky)',
        lilac: 'var(--lilac)',
        peach: 'var(--peach)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Jersey 10"', 'Impact', 'sans-serif'],
        hand: ['"Gochi Hand"', 'cursive'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
