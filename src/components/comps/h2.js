import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledH2 = styled.h2`
    position: relative;
    font-size: ${(props) => props.theme.fontSize_default.h2};
    color: ${(props) => props.theme.colors.green};

    letter-spacing: .1rem;

    white-space: nowrap;

    padding: 1rem 4rem;

    text-shadow: ${(props) => props.theme.textShadows.textShadowLight};

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
            background-color: ${(props) => props.theme.colors.transBlack_75};
        `)
        ||
        (styling === "blog" && css`
            margin: 6rem 0;
            color: ${(props) => props.theme.colors.green};
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