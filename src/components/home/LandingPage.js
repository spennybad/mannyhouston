import styled from 'styled-components';
import Image from 'next/image';

import Section from '../comps/section';

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

const BackgroundImage = styled(Image)`
    object-fit: cover;
`

const Socials = styled.ul`
    position: absolute;
    top: 0;
    left: 0;

    padding: 3rem;

    z-index: 1;

    & > a * {
        width: 7rem;
        height: 7rem;
        text-shadow: ${(props) => props.theme.textShadows.textShadowLight};
        
        transition: all .2s;

        &:hover {
            transform: scale(1.2);
        }

        ${media.width_800`
            width: 6rem;
            height: 6rem;
        `}

        ${media.width_500`
            width: 5rem;
            height: 5rem;
        `}

    }

    & > :not(:last-child) {
        margin-right: 1rem;
    }

`


const LandingPage = () => {
    return (
        <Section>
            <Socials>
                <a href="https://twitter.com/themannyhouston"><img src="/imgs/svg/twitter-with-circle.svg"/></a>
                <a href="https://instagram.com/themannyhouston"><img src="/imgs/svg/instagram-with-circle.svg"/></a>
            </Socials>
            <Title>Manny <span>Houston</span></Title>
            <BackgroundImageContainer>
                <BackgroundImage 
                    src="https://res.cloudinary.com/spencercv7-dev/image/upload/v1620053588/manny_4_qqbi0a.webp"
                    layout="fill"
                    alt="Manny Houston on roof top."
                />
            </BackgroundImageContainer>
        </Section>
    );
}

export default LandingPage;