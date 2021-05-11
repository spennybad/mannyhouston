import styled, {css} from 'styled-components';
import media from "../MediaQueries";


const StyledSection = styled.section`   

    // Default Styling
    width: 100%;
    height: 100vh;

    min-height: 600px;

    display: grid;
    
    position: relative;
    background-color: ${(props) => props.theme.colors.black};
    padding: 8rem;
    overflow: hidden;

    padding: 7rem 7rem;
    
    // Prop Based Styling
    ${({ boxShadow }) =>
        (boxShadow === "inset-top" && css`
            box-shadow: ${(props) => props.theme.boxShadows.boxShadowInsetTop};
        `)
    }

    ${({ backgroundColor }) => 
            
        (backgroundColor === "green-gradient" && css`
            background-image: linear-gradient(to bottom right, ${(props) => props.theme.colors.green}, ${(props) => props.theme.colors.blue});
        `)
    }

    ${({ borderBottom }) => 
            
        (borderBottom && css`
            border-bottom: 1rem solid ${(props) => props.theme.colors.pink};
        `)

    }

    // Media Queries
    ${media.width_800`
        padding: 6rem;
    `}

    ${media.width_600`
        padding: 6rem 3rem;
    `}

    ${media.width_400`
        padding: 6rem 1rem;
    `}

`

const Section = ({boxShadow, backgroundColor, borderBottom, children}) => {
    return (
        <StyledSection boxShadow={ boxShadow } backgroundColor={ backgroundColor } borderBottom={ borderBottom }>
            {children}
        </StyledSection>
    );
}
 
export default Section;