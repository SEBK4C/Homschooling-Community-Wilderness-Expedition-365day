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
        // Waldorf-inspired color palette
        // Warm, muted earth tones like watercolors and natural pigments

        // Warm cream/off-white (replaces stark white)
        cream: {
          50: '#FFFDFB',
          100: '#FDF8F3',
          200: '#F5EFE6',
          300: '#EDE5D8',
          400: '#E2D6C4',
          500: '#D4C4AD',
          600: '#C4B096',
          700: '#A89578',
          800: '#8A7A62',
          900: '#6B5F4D',
          950: '#4A4235',
        },
        // Soft rose/pink tones
        rose: {
          50: '#FDF6F6',
          100: '#F8EDED',
          200: '#F0DCDC',
          300: '#E8C4C4',
          400: '#DCADAD',
          500: '#D4A5A5',
          600: '#C48B8B',
          700: '#A86E6E',
          800: '#8B5858',
          900: '#6E4545',
          950: '#4A2F2F',
        },
        // Soft sage green (muted, not bright)
        sage: {
          50: '#F5F7F3',
          100: '#EAF0E6',
          200: '#D8E2D0',
          300: '#C4D4B8',
          400: '#B4C4A5',
          500: '#9CAF88',
          600: '#839470',
          700: '#6B785C',
          800: '#565F4B',
          900: '#434A3B',
          950: '#2E332A',
        },
        // Golden yellow/ochre
        golden: {
          50: '#FDFAF2',
          100: '#FAF3E0',
          200: '#F2E5C4',
          300: '#E5C287',
          400: '#D9B26A',
          500: '#D4A84B',
          600: '#B8923D',
          700: '#967632',
          800: '#745B28',
          900: '#5A4720',
          950: '#3D3018',
        },
        // Warm terracotta/earth brown
        terracotta: {
          50: '#FAF6F2',
          100: '#F2EBE2',
          200: '#E5D6C4',
          300: '#D4BCA0',
          400: '#C4A484',
          500: '#B08968',
          600: '#96724F',
          700: '#7A5C40',
          800: '#5D4E37',
          900: '#4A3E2C',
          950: '#3D3229',
        },
        // Soft blue (gentle, not saturated)
        softblue: {
          50: '#F5F7FA',
          100: '#EBF0F5',
          200: '#D8E2ED',
          300: '#C4D4E2',
          400: '#A5B4C4',
          500: '#8FA5B5',
          600: '#728A9C',
          700: '#5C7080',
          800: '#4A5A66',
          900: '#3B4750',
          950: '#2A3238',
        },
        // Deep earth brown (replaces stark black)
        earth: {
          50: '#F8F6F4',
          100: '#EDE9E4',
          200: '#DBD4CC',
          300: '#C4BAA8',
          400: '#A89882',
          500: '#8B7A64',
          600: '#6E6050',
          700: '#5D4E37',
          800: '#4A3E2C',
          900: '#3D3229',
          950: '#2A231D',
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
        'earth': '0 4px 20px -2px rgba(93, 78, 55, 0.15)',
        'sage': '0 4px 20px -2px rgba(156, 175, 136, 0.2)',
        'rose': '0 4px 20px -2px rgba(212, 165, 165, 0.2)',
        'golden': '0 4px 20px -2px rgba(212, 168, 75, 0.15)',
        'glass': '0 8px 32px -4px rgba(61, 50, 41, 0.1)',
        'waldorf': '0 4px 24px -4px rgba(93, 78, 55, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'earth-texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
              color: '#9CAF88', // sage-500
              '&:hover': {
                color: '#6B785C', // sage-700
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
