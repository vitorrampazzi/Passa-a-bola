/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    // Certifique-se de que todas as pastas onde você usa classes Tailwind estão aqui
  ],
  theme: {
    extend: {
      colors: {
        'passa-bola-primary': '#663399',
        'passa-bola-secondary': '#E91E63',
        'passa-bola-accent': '#4CAF50',
        'passa-bola-yellow': '#FFD700',
        'passa-bola-bg-light': '#FDFDFD',
        'passa-bola-text-dark': '#333333',
        'passa-bola-header-footer-bg': '#3A1C5A',
        'passa-bola-input-border': '#cccccc',
        'passa-bola-error': '#CC3300',

        'passa-bola-primary-hover': '#52297A',
        'passa-bola-accent-hover': '#388E3C',
        'passa-bola-light-pink-bg': '#FFF0F5',
        'passa-bola-primary-transparent': 'rgba(102, 51, 153, 0.25)',
      },
      spacing: {
        'header-height': '5rem',
      },
      boxShadow: {
        'primary-transparent-focus': '0 0 0 0.25rem var(--passa-bola-primary-transparent)',
      }
    },
  },
  plugins: [],
};