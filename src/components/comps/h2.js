import styled, { css } from 'styled-components';

const StyledH2 = styled.h2`
    margin-top: 6rem;
    font-size: ${(props) => props.theme.fontSize.h2};
    color: ${(props) => props.theme.colors.yellow};

    ${({styling}) =>
        (styling==="shows" && css`
            justify-self: center;
            margin-bottom: 6rem;
        `)
        || 
        (styling==="contact" && css`
            color: ${(props) => props.theme.colors.white};
            text-shadow: ${(props) => props.theme.textShadows.textShadowLight};
            z-index: 1;
        `)
    }

`

const H2 = ({styling, children}) => {
    return (
        <StyledH2 styling={ styling }>{children}</StyledH2>
    );
}
 
export default H2;