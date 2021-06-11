import styled, {css} from 'styled-components';

const StyledH1 = styled.h1`
    position: relative;
    font-size: ${(props) => props.theme.fontSize_default.h1};
    color: ${(props) => props.theme.colors.green};
    margin: 6rem 0 3rem 0;
    padding: ${(props) => props.padding};
    text-shadow: ${(props) => props.theme.textShadows.textShadowLight};

    ${({backgroundColor}) =>
        (backgroundColor) === "blue" && css`
            background-color: ${(props) => props.theme.colors.blue};
        `
        ||
        (backgroundColor) === "green" && css`
            background-color: ${(props) => props.theme.colors.green};
        `
        ||
        (backgroundColor) === "yellow" && css`
            background-color: ${(props) => props.theme.colors.yellow};
        `
        ||
        (backgroundColor) === "pink" && css`
            background-color: ${(props) => props.theme.colors.pink};
        `
        ||
        (backgroundColor) === "light_grey" && css`
            background-color: ${(props) => props.theme.colors.light_grey};
        `
    }

    ${({color}) =>
        (color) === "blue" && css`
            color: ${(props) => props.theme.colors.blue};
        `
        ||
        (color) === "green" && css`
            color: ${(props) => props.theme.colors.green};
        `
        ||
        (color) === "yellow" && css`
            color: ${(props) => props.theme.colors.yellow};
        `
        ||
        (color) === "pink" && css`
            color: ${(props) => props.theme.colors.pink};
        `
        ||
        (color) === "light_grey" && css`
            color: ${(props) => props.theme.colors.light_grey};
        `
    }
`       

const H1 = ({ children, backgroundColor, color, padding}) => {
    return (
        <StyledH1 backgroundColor={ backgroundColor } padding={ padding } color={ color }>{children}</StyledH1>
    );
}

export default H1;