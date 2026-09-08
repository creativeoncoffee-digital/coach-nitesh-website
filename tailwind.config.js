/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-0': '#050507',
        'bg-1': '#0B0C14',
        'marigold': '#E8A33D',
        'marigold-2': '#F4C06B',
        'teal': '#22B08D',
        'rose': '#E15577',
        'text-light': '#F5F3EE',
        'text-mute': '#9CA2B6',
        'text-dim': '#6C7286',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}