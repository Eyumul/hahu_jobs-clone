import { darkMode } from '#tailwind-config';

module.exports = {
  darkMode: 'selector',
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto'],
        },
        colors: {
        prime: {
          light: '#80cbc4',
          lighter: '#e2f2f0',
          DEFAULT: '#009688',
          dark: '#077069',
        },
        second: {
          lighter: '#f1f1f1',
          light: '#d0d0d0',
          DEFAULT: '#444f60',
          dark: '#1b2637',
          darker: '#02201d',
        }
      }
      },
    },
    variants: {},
    plugins:[require('@tailwindcss/forms')],
    }
    