import { css } from 'styled-components'

const sizes = {
    width_1500: 1500,
    width_1200: 1200,
    width_1000: 1000,
    width_900: 900,
    width_800: 800,
    width_600: 600,
    width_400: 400
}

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})