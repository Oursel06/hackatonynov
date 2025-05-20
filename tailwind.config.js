/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        receipt: {
          paper: '#FAF7F0',
          text: '#1A1A1A',
          border: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        receipt: ['VT323', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': 'var(--tw-prose-receipt)',
            '--tw-prose-body': 'var(--tw-prose-receipt)',
            'font-family': 'var(--font-receipt)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'receipt-print': 'receipt-print 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'receipt-print': {
          '0%': { 
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        }
      },
      backgroundImage: {
        'receipt-dots': 'radial-gradient(#2A2A2A 1px, transparent 0)',
      },
      backgroundSize: {
        'dots-sm': '8px 8px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};