import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import media from '../MediaQueries';
import styled from 'styled-components';
import Section from '../../components/comps/section';

const NavButton = styled(motion.button)`
    position: fixed;

    top: 0;
    right: 0;

    z-index: 1001;

    height: 8rem;
    width: 8rem;
    margin: 3rem;

    display: grid;
    grid-gap: .7rem;

    grid-template-columns: 100%;
    grid-template-rows: repeat(1fr, 3);

    justify-items: center;
    align-content: center;

    background-color: ${(props) => props.theme.colors.white};

    border-radius: 100%;

    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    cursor: pointer;

`

const NavButtonLine = styled(motion.div)`
    height: .5rem;
    width: 60%;
    background-color: ${(props) => props.theme.colors.black};
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
        <>
            <NavButton 
                variants={navButtonAnimation} 
                whileHover="onHover" 
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)} 
                onClick={() => handleNavButtonClick()}
                >
                    <NavButtonLine variants={navLine1Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
                    <NavButtonLine variants={navLine2Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
                    <NavButtonLine variants={navLine3Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
            </NavButton>
           <NavPage variants={navPageAnimation} initial="hidden" animate={isClicked ? "visible" : ""} key="NavPage">
                <NavList variants={navListAnimation}>
                    <NavListItem><Link href="/"><a onClick={() => handleNavListItemClick()}>Home</a></Link></NavListItem>
                    <NavListItem><Link href="/blog"><a onClick={() => handleNavListItemClick()}>Thoughts</a></Link></NavListItem>
                    <NavListItem><Link href="/videos"><a onClick={() => handleNavListItemClick()}>Manny's World</a></Link></NavListItem>
                </NavList>
            </NavPage>
        </>
        
    );
}

export default Navbar;