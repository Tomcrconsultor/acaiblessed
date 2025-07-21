/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais Açaí Blessed
        'acai-purple': {
          50: '#f5f0fa',
          100: '#ebe0f5',
          200: '#d6c1eb',
          300: '#b89adb',
          400: '#9a71c9',
          500: '#6B2C91', // Principal
          600: '#5a267d',
          700: '#4a1b63', // Dark purple
          800: '#3a154f',
          900: '#2a0f3b',
        },
        'acai-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF8C00', // Principal
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'acai-cream': {
          50: '#fefdf8',
          100: '#fefbf3',
          200: '#fdf5e3',
          300: '#fbeed0',
          400: '#f8e3b8',
          500: '#F5E6D3', // Principal
          600: '#e8d5c1',
          700: '#d4c4b0',
          800: '#c0b39f',
          900: '#aca28e',
        },
        'acai-light-orange': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFB347', // Light orange
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6B2C91 0%, #4A1B63 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FF8C00 0%, #FFB347 100%)',
        'gradient-background': 'linear-gradient(180deg, #F5E6D3 0%, #FFFFFF 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}