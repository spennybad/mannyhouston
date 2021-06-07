import { css } from 'styled-components'

const sizes = {
    width_2000: 2000,
    width_1500: 1500,
    width_1200: 1200,
    width_1000: 1000,
    width_900: 900,
    width_800: 800,
    width_700: 700,
    width_600: 600,
    width_500: 500,
    width_450: 450,
    width_400: 400,
    width_350: 350,
    width_300: 300
}

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})