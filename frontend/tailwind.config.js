/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        editor: 'var(--bg)',
        panel: 'var(--panel)',
        side: 'var(--side)',
        surface: 'var(--surface)',
        line: 'var(--line)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        gutter: 'var(--gutter)',
        accent: 'var(--accent)',
        status: 'var(--status)',
        'syn-kw': 'var(--syn-kw)',
        'syn-str': 'var(--syn-str)',
        'syn-fn': 'var(--syn-fn)',
        'syn-prop': 'var(--syn-prop)',
        'syn-const': 'var(--syn-const)',
        'syn-tag': 'var(--syn-tag)',
        'syn-comment': 'var(--syn-comment)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
