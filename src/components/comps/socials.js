import styled, { css } from 'styled-components';
import media from '../MediaQueries';
import { motion } from 'framer-motion';

const StyledSocials = styled(motion.ul)`
    display: grid;
    grid-gap: ${ props => props.gap || "0px"};

    position: ${ props => props.position || "relative" };
    top: 0;
    left: 0;

    align-content: center;
    justify-content: center;

    padding: 3rem;

    z-index: 100;

    list-style: none;

    ${({ color }) => 
        (color === "white" && css`
           filter: invert();
        `)
        ||
        (color === "black" && css`
           filter: none;
        `)
    }

    ${({ direction }) => 
        (direction === "vertical" && css`
            grid-auto-flow: row;
        `)
        ||
        (direction === "horizontal" && css`
            grid-auto-flow: column;
        `)
    }

    & > li a * {
        width: 7rem;
        height: 7rem;
        
        transition: all .2s;

        &:hover {
            transform: scale(1.2);
        }

        ${media.width_1500`
            width: 6rem;
            height: 6rem;
        `}

        ${media.width_800`
            width: 4rem;
            height: 4rem;
        `}

    }

`

const socialsAnimation = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            duration: .8
        }
    },
    exit: {
        x: "-100vw"
    }
}

const Socials = ({ color, direction, position, gap, layoutId }) => {
    return (
        <StyledSocials color={ color } direction={ direction } position={ position } gap={ gap }
            variants={ socialsAnimation }
            initial="hidden"
            animate="visible"
            exit="exit"
            layoutId="layoutId"
        >
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
        </StyledSocials>
    );
}

export default Socials;