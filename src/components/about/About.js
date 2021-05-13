import Image from 'next/image';
import styled from 'styled-components';

import H2 from '../comps/h2';
import Section from '../comps/section';

import media from '../MediaQueries';


const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;

    align-self: start;

    background-color: ${(props) => props.theme.colors.black};

    overflow-x: hidden;

    & > :first-child {
        display: grid;
        grid-template-rows: repeat(2, min-content);

        grid-gap: 2rem;

        justify-items: center;
        align-items: center;

        align-self: center;

        ${media.width_500`
            grid-gap: 1rem;
        `}

        ${media.width_350`
            grid-gap: .5rem;
        `}
    }

    & > :nth-child(2) {
        position: relative;
    }

    & > div span {
        white-space: nowrap;
    }

    
    ${media.width_900`
        grid-template-columns: 100%;
    `} 

    /* ----------- iPad Pro 10.5" ----------- */
    @media only screen 
        and (min-device-width: 834px) 
        and (max-device-width: 834px) 
        and (orientation: portrait) 
        and (-webkit-min-device-pixel-ratio: 2) {
            grid-template-columns: 100%;
    }

    /* ----------- iPad Pro 12.9" ----------- */
    @media only screen 
        and (min-device-width: 1024px) 
        and (max-device-width: 1024px) 
        and (orientation: portrait) 
        and (-webkit-min-device-pixel-ratio: 2) {
            grid-template-columns: 100%;
    }
    
`

const AboutP = styled.p`

    min-width: min-content;
    max-width: 125rem;

    font-size: ${(props) => props.theme.fontSize_default.p};
    color: ${(props) => props.theme.colors.white};

    padding: 1rem;

    z-index: 1;

    background-color: rgba(0, 0, 0, .75);

    /* ----------- iPad 3, 4 and Pro 9.7" ----------- */
    @media only screen 
        and (min-device-width: 768px) 
        and (max-device-width: 1024px) 
        and (orientation: portrait) 
        and (-webkit-min-device-pixel-ratio: 2) {
            font-size: 2.3vw;
    }

`

const AboutImageWrapper = styled.div`

    width: 80rem;
    height: 80rem;
    
    position: absolute;

    bottom: 0;
    right: 0;

    ${media.width_1500`
        width: 70rem;
        height: 70rem;
    `}

    ${media.width_900`
        width: 50rem;
        height: 50rem;
    `}

    ${media.width_800`
        width: 45rem;
        height: 45rem;
    `}

    ${media.width_500`
        width: 30rem;
        height: 30rem;
    `}


`

const temp_text1 = "  Since becoming a viral sensation as a rapper and singer on musical apps like Voisey and RapChat, Manny has been steadily building a loyal fan base that is anxiously awaiting the release of his music: Music filled with raw lyrics, introspective emotions, and soulful melodies.";
const temp_text2 = "  An all-around creative from South Carolina, Manny is a well-studied musician and artist, very akin to Donald Glover and Kanye West in his creation. Though his main medium is Hip-Hop, Manny has his hands in all artistic and musical fields.";
const temp_text3 = "  He has a degree in classical piano, has worked professionally as a musician since the age of seventeen and was last seen in the Off-Broadway show “Forbidden Broadway Next Generation”. Now he is diving fully into the world of Hip-Hop to bring together all his talents. With no album out, he’s managed to garner shoutouts from artists and execs, such as: Westside Boogie, Jacob Collier,  Denzyl Fiegelson (CEO of Platoon) , and even managed to snag a deal with Snapchat for one of his first singles “Coupe”.";

const About = () => {
    return (
        <Section>
            <AboutContent>
                <div>
                    <H2>About <span>Manny Houston</span></H2>
                    <AboutP>{temp_text1}</AboutP>
                    <AboutP>{temp_text2}</AboutP>
                    <AboutP>{temp_text3}</AboutP>
                </div>
            </AboutContent>
            <AboutImageWrapper>
                <Image
                    src="https://res.cloudinary.com/spencercv7-dev/image/upload/v1620053589/about_cut_out_pvwbcd.webp"
                    alt="Manny sitting on brick wall."
                    layout="fill"
                />
            </AboutImageWrapper>
        </Section>
    );
}

export default About;