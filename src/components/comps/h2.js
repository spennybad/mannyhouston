import styled, { css } from 'styled-components';
import media from "../MediaQueries";


const StyledH2 = styled.h2`
    font-size: 7rem;
    color: ${(props) => props.theme.colors.green};

    letter-spacing: .2rem;

    white-space: nowrap;

    ${({ styling }) =>
        (styling === "shows" && css`
            justify-self: center;
            margin-bottom: 6rem;
        `)
        ||
        (styling === "contact" && css`
            color: ${(props) => props.theme.colors.white};
            text-shadow: ${(props) => props.theme.textShadows.textShadowLight};
            z-index: 1;
            margin-top: 6rem;
        `)
    }

    ${media.width_1200`
        font-size: ${(props) => props.theme.fontSize_br_1200.h2};
    `}

    ${media.width_1000`
        font-size: ${(props) => props.theme.fontSize_br_1000.h2};
    `}

    ${media.width_800`
        font-size: ${(props) => props.theme.fontSize_br_800.h2};
    `}

    ${media.width_500`
        font-size: ${(props) => props.theme.fontSize_br_500.h2};
    `}

    ${media.width_400`
        font-size: ${(props) => props.theme.fontSize_br_400.h2};
    `}

    ${media.width_300`
        font-size: ${(props) => props.theme.fontSize_br_300.h2};
    `}


`

const H2 = ({ styling, children }) => {
    return (
        <StyledH2 styling={styling}>{children}</StyledH2>
    );
}

export default H2;