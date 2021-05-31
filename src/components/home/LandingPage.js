import styled from 'styled-components';
import Image from 'next/image';

import Section from '../comps/section';
import Socials from '../comps/socials';

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

    z-index: 1;

    // Temporary fix for Google Chrome blurry font defect.
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    ${media.width_500`

        color: ${(props) => props.theme.colors.white};

        text-shadow: ${(props) => props.theme.textShadows.textShadowHeavy};

        font-weight: 400;

        position: absolute;

        left: 0;

        padding: 5rem;

        & span {
            display: block;
        }
        font-size: 7rem;
        white-space: wrap;
    `}

    ${media.width_400`
        font-size: 6rem;
    `}

    ${media.width_350`
        font-size: 5rem;
    `}


`

const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    overflow: hidden;
    
    z-index: 0;
    
    ${media.width_500`
        width: 200%;
        right: -90%;
    `}

`

const StyledImage = styled.img`
    object-fit: cover;
    object-position: center;

    width: 100%;
    height: 100%;
`


const LandingPage = () => {
    return (
        <Section>
            <Socials position="absolute" color="black" direction="horizontal" gap="1rem"/>
            <Title>Manny <span>Houston</span></Title>
            <BackgroundImageContainer>
                <StyledImage
                    srcSet="https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_768/v1620053588/manny_4_qqbi0a.webp 768w,
                            https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_1024/v1620053588/manny_4_qqbi0a.webp 1024w,
                            https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_1920/v1620053588/manny_4_qqbi0a.webp 1920w,
                            https://res.cloudinary.com/spencercv7-dev/image/upload/v1620053588/manny_4_qqbi0a.webp
                            "
                    sizes="100%"
                    alt="Picture of Manny Houston on a roof top."
                    layout="fill"
                />
            </BackgroundImageContainer>
        </Section>
    );
}

export default LandingPage;