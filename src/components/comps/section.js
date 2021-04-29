import styled, {css} from 'styled-components';
import media from "../MediaQueries";


const StyledSection = styled.section`    
    position: relative;
    background-color: ${(props) => props.theme.colors.black};
    padding: 8rem;
    overflow: hidden;

    ${media.width_800`
        padding: 6rem;
    `}

    ${media.width_600`
        padding: 3rem;
    `}

    ${media.width_400`
        padding: 1rem;
    `}



`

const Section = ({styling, children}) => {
    return (
        <StyledSection styling={ styling }>
            {children}
        </StyledSection>
    );
}
 
export default Section;