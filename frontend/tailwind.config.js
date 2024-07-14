module.exports = {
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto'],
        },
        colors: {
        prime: {
          light: '#80cbc4',
          DEFAULT: '#009688',
          dark: '#077069',
        },
        second: {
          lighter: '#f1f1f1',
          light: '#d0d0d0',
          DEFAULT: '#444f60',
          dark: 'black',
        }
      }
      },
    },
    variants: {},
    plugins:[require('@tailwindcss/forms')],
    }
    