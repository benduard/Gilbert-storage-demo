import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#475569', // Slate Gray
        'secondary': '#fb7185', // Coral
      },
    },
  },
  plugins: [],
} satisfies Config