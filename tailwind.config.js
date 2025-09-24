/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#FF4F00',
        second: '#CFCFCF',
        background: '#2A1A12',
        border: "hsl(20 5.9% 90%)",
        input: "hsl(20 5.9% 90%)",
        ring: "hsl(20 90% 50%)",
        card: "hsl(20 10% 5% / 0.2)",
        primary: {
          DEFAULT: "hsl(20 90% 50%)",
          foreground: "hsl(20 10% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(20 10% 20% / 0.8)",
          foreground: "hsl(20 10% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 62.8% 30.6%)",
          foreground: "hsl(20 10% 98%)",
        },
        muted: {
          DEFAULT: "hsl(20 10% 20% / 0.4)",
          foreground: "hsl(20 10% 80%)",
        },
        accent: {
          DEFAULT: "hsl(20 10% 20% / 0.4)",
          foreground: "hsl(20 10% 98%)",
        },
        popover: {
          DEFAULT: "hsl(20 10% 5% / 0.9)",
          foreground: "hsl(20 10% 98%)",
        },
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'monospace'],
        'mono': ['Space Grotesk', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}