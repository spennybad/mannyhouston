import styled, { css } from 'styled-components';

const StyledH2 = styled.h2`
    margin-top: 6rem;
    font-size: ${(props) => props.theme.fontSize.h2};
    color: ${(props) => props.theme.colors.yellow};

    ${({styling}) =>
        styling &&
        css`
            justify-self: center;
            grid-area: 1 / 2 / 2 / 6;
            margin-bottom: 6rem;
        `
    }

`

const H2 = ({styling, children}) => {
    return (
        <StyledH2 styling={ styling }>{children}</StyledH2>
    );
}
 
export default H2;