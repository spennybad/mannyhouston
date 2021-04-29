import styled, {css} from 'styled-components';

const StyledSection = styled.section`    
    position: relative;
    background-color: ${(props) => props.theme.colors.black};
`

const Section = ({styling, children}) => {
    return (
        <StyledSection styling={ styling }>
            {children}
        </StyledSection>
    );
}
 
export default Section;