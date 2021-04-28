import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%; /* == 1 rem == 10px */
        font-family: 'Staatliches', cursive;
    }


    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        // Used to see if something is cliping over screen bounds.
        /* border: 1px solid #f00 !important; */
    }

    section {
        width: 100%;
        height: 100vh;

        display: grid;
        justify-content: center;

    }

    p {
        font-family: 'Reem Kufi';
    }

    a,
    a:link,
    a:visited {
        text-decoration: none;
        color: #000;
    }


`

export default GlobalStyle;