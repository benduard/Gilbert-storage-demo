import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#800000', // Maroon
        'secondary': '#B89352', // New Bronze color
      },
    },
  },
  plugins: [],
} satisfies Config