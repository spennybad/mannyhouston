import styled from 'styled-components';

const StyledH1 = styled.h1`
    position: relative;
    font-size: ${(props) => props.theme.fontSize_default.h1};
    color: ${(props) => props.theme.colors.green};
    margin: 6rem 0;
`

const H1 = ({ children }) => {
    return (
        <StyledH1>{children}</StyledH1>
    );
}

export default H1;