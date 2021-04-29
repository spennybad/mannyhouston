import styled from 'styled-components';
import Image from 'next/image';

import media from '../MediaQueries';


// Styles
const Title = styled.h1`

    align-self: center;
    justify-self: center;

    transform: translateY(1rem);

    color: ${(props) => props.theme.colors.white};
    font-size: 12vw;


    text-shadow: ${(props) => props.theme.textShadows.textShadowHeavy};

    letter-spacing: 1rem;
    font-weight: normal;

    white-space: nowrap;

    // Temporary fix for Google Chrome blurry font defect.
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    ${media.width_400`

        font-size: 10vw;

    `}


`

const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    overflow: hidden;
    
    z-index: -1;

`

const BackgroundImage = styled(Image)`
    object-fit: cover;
`


const LandingPage = () => {
    return (
        <section>
            <Title>Manny Houston</Title>
            <BackgroundImageContainer>
                <BackgroundImage 
                    src="/imgs/manny_4.png"
                    layout="fill"
                    alt="Manny Houston on roof top."
                />
            </BackgroundImageContainer>
        </section>
    );
}

export default LandingPage;