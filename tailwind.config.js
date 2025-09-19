/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#FF4F00',
        second: '#CFCFCF',
        background: '#2A1A12',
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'monospace'],
        'mono': ['Space Grotesk', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}