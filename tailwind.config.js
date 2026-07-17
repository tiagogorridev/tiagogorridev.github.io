/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#11071F',
        surface: {
          DEFAULT: '#1A0B2E',
          strong: '#2D005A',
        },
        accent: {
          DEFAULT: '#6C4988',
          200: '#DCCBEF',
          300: '#C3A6E1',
          400: '#9A74BC',
          500: '#6C4988',
          600: '#563A6D',
          700: '#412C52',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 40px rgba(108, 73, 136, 0.25)',
      },
      keyframes: {
        'fade-down': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-down': 'fade-down 0.3s ease-out both',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
