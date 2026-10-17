/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDFB',
          100: '#FDF8F3',
          200: '#F9EFE6',
          300: '#F3E2D3',
        },
        pastelPink: {
          50: '#FFF5F7',
          100: '#FCE8EE',
          200: '#F9D2DF',
          300: '#F4B4CA',
          400: '#EC84A6',
          500: '#E25B87',
          600: '#CD3E6D',
        },
        choco: {
          50: '#F8F4F2',
          100: '#EDE3DF',
          200: '#D9C5BD',
          500: '#6D4336',
          600: '#543227',
          700: '#3E231A',
          800: '#2E1810',
          900: '#21100A',
        },
        warmBeige: {
          100: '#F7EFE6',
          200: '#EFE1D1',
          300: '#E2CCB4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Nunito"', 'system-ui', 'sans-serif'],
        display: ['"Fredoka"', '"Nunito"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(62, 35, 26, 0.06), 0 4px 12px -2px rgba(226, 91, 135, 0.05)',
        'soft-lg': '0 20px 40px -10px rgba(62, 35, 26, 0.12), 0 8px 20px -4px rgba(226, 91, 135, 0.08)',
        '3d': '0 18px 35px -8px rgba(46, 24, 16, 0.18), 0 6px 0 0 rgba(226, 91, 135, 0.15)',
        'btn-pink': '0 8px 20px -4px rgba(226, 91, 135, 0.45), inset 0 2px 2px rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
