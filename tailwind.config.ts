import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury black and gold theme colors
        background: '#0a0a0a', // Deep black
        foreground: '#fafafa', // Pure white
        card: '#1a1a1a', // Dark gray for cards
        'card-foreground': '#fafafa', // White text on cards
        popover: '#0a0a0a', // Black popover background
        'popover-foreground': '#fafafa', // White popover text
        primary: '#d4af37', // Luxury gold
        'primary-foreground': '#0a0a0a', // Black text on gold
        secondary: '#1a1a1a', // Dark gray secondary
        'secondary-foreground': '#d4af37', // Gold text on dark
        muted: '#4a4a4a', // Muted gray
        'muted-foreground': '#fafafa', // White muted text
        accent: '#d4af37', // Gold accent
        'accent-foreground': '#0a0a0a', // Black accent text
        destructive: '#dc2626', // Red for errors
        'destructive-foreground': '#fafafa', // White error text
        border: '#404040', // Dark border
        input: '#1a1a1a', // Dark input background
        ring: '#d4af37', // Gold focus ring
        
        // Additional luxury colors
        gold: {
          DEFAULT: '#d4af37',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4af37',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        black: {
          DEFAULT: '#0a0a0a',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config