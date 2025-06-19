module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 6000ms linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      colors:{
        purple: {
          900: '#1e0b36',
          800: '#2d1060',
          700: '#3d1b8a',
          600: '#6d28d9',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(107, 70, 193, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}