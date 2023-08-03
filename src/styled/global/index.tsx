import { createGlobalStyle } from 'styled-components'
import { COLORS } from '../enum/colors'

export const GlobalStyle = createGlobalStyle`
body {
    box-sizing: 'border-box';
    padding: 0;
    margin: 0;
    border: 0;
    overflow: hidden;
    background-color: ${() => COLORS.BLACK}
}
h1,
h2,
h3,
h4,
h5,
h6 {
    padding: 0;
    margin: 0;
    border: 0;
}
`
