import styled from 'styled-components';
import media from '../MediaQueries';


const StyledDiv = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.colors.white};

    font-size: calc(${(props) => props.theme.fontSize_default.p} - 1rem);

    padding: 2rem;

    background-color: ${(props) => props.theme.colors.black};    

    ${media.width_900`
        font-size: calc(${(props) => props.theme.fontSize_br_800.p} - .5rem);
    `}

    ${media.width_500`
        font-size: calc(${(props) => props.theme.fontSize_br_500.p} - .5rem);
    `}

`

const StyledSpan = styled.span`

    display: inline-block;

    color: ${(props) => props.theme.colors.green};
    background-color: ${(props) => props.theme.colors.black};

    transition: all .2s;

    white-space: nowrap;

    &:hover {
        transform: scale(1.3) rotate(3deg);
    }
`

const Credit = () => {
    return (
        <StyledDiv>
            <p>Designed and Developed by <a href="https://www.linkedin.com/in/spencer-venable-31494a187/"><StyledSpan>Spencer Venable</StyledSpan></a></p>
        </StyledDiv>
    );
}
 
export default Credit;