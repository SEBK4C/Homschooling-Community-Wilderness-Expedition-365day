/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./outputs/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Magus of Potatoes Color Palette
        // Rich, earthy tones inspired by nature and warmth

        // Muted forest green (#5c8170 base)
        forest: {
          50: '#f2f5f4',
          100: '#e4ebe8',
          200: '#c9d7d1',
          300: '#a8bfb5',
          400: '#7fa393',
          500: '#5c8170', // Original color
          600: '#4a6a5c',
          700: '#3d574b',
          800: '#33473e',
          900: '#2b3b34',
          950: '#16201c',
        },
        // Warm terracotta/tan (#bd8962 base)
        terracotta: {
          50: '#faf6f3',
          100: '#f3ebe4',
          200: '#e8d5c7',
          300: '#d9b9a3',
          400: '#bd8962', // Original color
          500: '#b07a54',
          600: '#a36847',
          700: '#87543c',
          800: '#6f4635',
          900: '#5b3b2e',
          950: '#301d17',
        },
        // Deep burgundy/rust red (#941e02 base)
        burgundy: {
          50: '#fef4f2',
          100: '#fee7e2',
          200: '#fdd3ca',
          300: '#fbb4a5',
          400: '#f68771',
          500: '#eb5b43',
          600: '#d83f25',
          700: '#b5311a',
          800: '#941e02', // Original color
          900: '#7b2013',
          950: '#430c05',
        },
        // Burnt orange/sienna (#a45d25 base)
        sienna: {
          50: '#fdf6ef',
          100: '#faead9',
          200: '#f4d3b2',
          300: '#ecb481',
          400: '#e28d4e',
          500: '#d97228',
          600: '#a45d25', // Original color
          700: '#a34a1c',
          800: '#863c1c',
          900: '#6d331a',
          950: '#3b180b',
        },
        // Golden yellow/ochre (#d8a647 base)
        golden: {
          50: '#fdfaef',
          100: '#faf2d1',
          200: '#f4e29f',
          300: '#edce6c',
          400: '#d8a647', // Original color
          500: '#de9d25',
          600: '#c57b1a',
          700: '#a45b18',
          800: '#86481b',
          900: '#6f3c19',
          950: '#401e0a',
        },
        // Warm cream (complementary neutral)
        cream: {
          50: '#fefdfb',
          100: '#fcf8f3',
          200: '#f8f0e5',
          300: '#f2e5d4',
          400: '#e8d5be',
          500: '#dbc4a6',
          600: '#c4a985',
          700: '#a68b67',
          800: '#886f52',
          900: '#6f5b44',
          950: '#3b2f23',
        },
        // Deep earth (dark neutral, replaces black)
        earth: {
          50: '#f7f6f5',
          100: '#edebe8',
          200: '#d9d5d0',
          300: '#c1bab2',
          400: '#a59b8f',
          500: '#8f8275',
          600: '#7a6d62',
          700: '#635851',
          800: '#534a44',
          900: '#47403b',
          950: '#27231f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'forest': '0 4px 20px -2px rgba(92, 129, 112, 0.2)',
        'terracotta': '0 4px 20px -2px rgba(189, 137, 98, 0.2)',
        'burgundy': '0 4px 20px -2px rgba(148, 30, 2, 0.15)',
        'sienna': '0 4px 20px -2px rgba(164, 93, 37, 0.2)',
        'golden': '0 4px 20px -2px rgba(216, 166, 71, 0.2)',
        'glass': '0 8px 32px -4px rgba(39, 35, 31, 0.1)',
        'magus': '0 4px 24px -4px rgba(92, 129, 112, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'earth-texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235c8170' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#5c8170', // forest-500
              '&:hover': {
                color: '#3d574b', // forest-700
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
