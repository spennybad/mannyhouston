import styled, { css } from 'styled-components';

const StyledH2 = styled.h2`
    font-size: clamp(2.5rem, 4vw, 7rem);
    color: ${(props) => props.theme.colors.green};

    letter-spacing: .2rem;

    white-space: nowrap;

    padding: 1rem 4rem;

    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    ${({ styling }) =>
        (styling === "schedule" && css`
            justify-self: center;
            margin-bottom: 6rem;
            background-color: ${(props) => props.theme.colors.transBlack_75};
            color: ${(props) => props.theme.colors.white};
        `)
        ||
        (styling === "contact" && css`
            margin-bottom: 2rem;
           
            
            color: ${(props) => props.theme.colors.green};
            text-shadow: ${(props) => props.theme.textShadows.textShadowLight};
            background-color: ${(props) => props.theme.colors.transBlack_75};
            z-index: 1;
        `)
    }

    /* ----------- iPad 3, 4 and Pro 9.7" ----------- */
    @media only screen 
        and (min-device-width: 768px) 
        and (max-device-width: 1024px) 
        and (orientation: portrait) 
        and (-webkit-min-device-pixel-ratio: 2) {
            font-size: 5vw;
    }


`

const H2 = ({ styling, children }) => {
    return (
        <StyledH2 styling={styling}>{children}</StyledH2>
    );
}

export default H2;