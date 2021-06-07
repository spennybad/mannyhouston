import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import media from '../MediaQueries';
import styled from 'styled-components';
import Section from '../../components/comps/section';
import useWindowDimensions from '../../hooks/WindowDimensions';

const NavButton = styled(motion.button)`
    position: absolute;

    top: 0;
    right: 0;

    z-index: 1001;

    height: 7.5rem;
    width: 7.5rem;
    margin: 3rem;

    display: grid;
    grid-gap: .5rem;

    grid-template-columns: 100%;
    grid-template-rows: repeat(1fr, 3);

    justify-items: center;
    align-content: center;

    background-color: ${(props) => props.theme.colors.white};

    border: .2rem solid ${(props) => props.theme.colors.grey};

    border-radius: 100%;
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    cursor: pointer;


    ${media.width_1200`
        height: 7rem;
        width: 7rem;
        grid-gap: .50rem;
        margin: 3rem 1.5rem;
    `}

    ${media.width_1000`
        height: 6.5rem;
        width: 6.5rem;
        grid-gap: .48rem;
        margin: 3rem 1rem;
    `}

    ${media.width_800`
        height: 7rem;
        width: 7rem;
        grid-gap: .45rem;
        margin: 3rem;
    `}

    ${media.width_700`
        margin: 2rem;
    `}

    ${media.width_500`
        height: 6.5rem;
        width: 6.5rem;
        grid-gap: .45rem;
        margin: 2rem;
    `}

    ${media.width_400`
        height: 6rem;
        width: 6rem;
        grid-gap: .3rem;
    `}

`

const NavButtonLine = styled(motion.div)`
    height: .5rem;
    width: 55%;
    background-color: ${(props) => props.theme.colors.black};

    ${media.width_400`
    `}
`

const NavPage = styled(motion.div)`
    position: fixed;
    
    height: 100%;
    width: 100%;

    display: grid;

    justify-content: center;
    align-content: center;

    z-index: 1000;

    background-image: linear-gradient(to bottom right, ${(props) => props.theme.colors.green}, ${(props) => props.theme.colors.blue});
`

const NavList = styled(motion.nav)`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(max-content, 3);
    list-style: none;
`

const NavListItem = styled(motion.li)`
    font-size: ${(props) => props.theme.fontSize_default.nav};
    
`

// Animations
const navButtonAnimation = {
    onHover: {
        scale: .95,
    }
}

const navPageAnimation = {
    hidden: {
        x: "100%",
        transition: {
            type: "linear",
            duration: .2
        }
    },
    visible: {
        x: 0,
        transition: {
            type: "linear",
            duration: .2
        }
    }
}

const navListAnimation = {
    hidden: {
        x: "100%",
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .4,
        }
    }
}

const navLine1Animation = {
    animate: {
        rotate: "-45deg",
        y: "60%",
        x: "-10%",
        width: "40%"
    }
}

const navLine2Animation = {
    animate: {
        opacity: 0,
        transition: {
            duration: .1
        }
    }
}

const navLine3Animation = {
    animate: {
        rotate: "45deg",
        y: "-60%",
        x: "-10%",
        width: "40%"
    }
}


// Component Constructor
const Navbar = ({isChildLoaded}) => {

    const [isClicked, setIsClicked] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);
    const {width, height} = useWindowDimensions();

    const router = useRouter();

    const handleNavButtonClick = () => {
        setIsClicked(!isClicked);
    }

    const handleNavListItemClick = () => {
        setIsClicked(true);
    }

    // Used to automatically retract the navigation bar once a new page has completed loading.
    useEffect(() => {
        if (isChildLoaded) {
            setIsClicked(false);
        }
    }, [isChildLoaded]);

    return (
       <AnimatePresence>
           {(router.route != "/blog/posts/[slug]" || width > 800) && <NavButton 
                variants={navButtonAnimation} 
                whileHover="onHover" 
                // onMouseEnter={() => setButtonHovered(true)}
                // onMouseLeave={() => setButtonHovered(false)} 
                onClick={() => handleNavButtonClick()}
                initial="hidden"
                animate="animate"
                exit={{opacity: 0}}
                >
                    <NavButtonLine variants={navLine1Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
                    <NavButtonLine variants={navLine2Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
                    <NavButtonLine variants={navLine3Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
            </NavButton>}
           <NavPage variants={navPageAnimation} initial="hidden" animate={isClicked ? "visible" : ""} key="NavPage">
                <NavList variants={navListAnimation}>
                    <NavListItem><Link href="/"><a onClick={() => handleNavListItemClick()}>Home</a></Link></NavListItem>
                    <NavListItem><Link href="/blog"><a onClick={() => handleNavListItemClick()}>Thoughts</a></Link></NavListItem>
                    <NavListItem><Link href="/videos"><a onClick={() => handleNavListItemClick()}>Manny's World</a></Link></NavListItem>
                </NavList>
            </NavPage>
        </AnimatePresence>
    );
}

export default Navbar;