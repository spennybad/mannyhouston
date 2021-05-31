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

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
        height: 70vh;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }


`

export default GlobalStyle;