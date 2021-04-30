import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%; /* == 1 rem == 10px */
        font-family: 'Staatliches', cursive;
        font-style: normal;
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

    p {
        font-family: 'Reem Kufi';
    }

    a,
    a:link,
    a:visited {
        text-decoration: none;
        color: #000;
    }
    
    input:focus, textarea:focus, select:focus{
        outline: none;
    }


`

export default GlobalStyle;