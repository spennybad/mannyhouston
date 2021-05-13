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

const Socials = styled.ul`
    display: flex;
    
    position: absolute;
    top: 0;
    left: 0;

    padding: 3rem;

    z-index: 1;

    list-style: none;

    & > li a * {
        width: 7rem;
        height: 7rem;
        text-shadow: ${(props) => props.theme.textShadows.textShadowLight};
        
        transition: all .2s;

        &:hover {
            transform: scale(1.2);
        }

        ${media.width_1500`
            width: 5.5rem;
            height: 5.5rem;
        `}

        ${media.width_800`
            width: 4rem;
            height: 4rem;
        `}

    }

    & > :not(:last-child) {
        margin-right: 1rem;
    }

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
            <Socials>
                <li>
                    <a href="https://twitter.com/themannyhouston" target="_blank" rel="noopener">
                        <img src="/imgs/svg/twitter-with-circle.svg" alt="Twitter Logo" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/themannyhouston" target="_blank" rel="noopener">
                        <img src="/imgs/svg/instagram-with-circle.svg" alt="Instagram Logo" />
                    </a>
                </li>
                <li>
                    <a href="https://open.spotify.com/artist/6pyEuZWUVowkiKDeWkhrrJ?si=dw0sqttXRBeHIz14CEhwyg" target="_blank" rel="noopener">
                        <img src="/imgs/svg/spotify.svg" alt="Spotify Logo" />
                    </a>
                </li>
            </Socials>
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