import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import media from '../MediaQueries';
import styled, { css } from 'styled-components';
import Section from '../../components/comps/section';
import useWindowDimensions from '../../hooks/WindowDimensions';

const NavButton = styled.button`
    position: absolute;

    top: 0;
    right: 0;

    z-index: 2;

    height: 7.5rem;
    width: 7.5rem;
    margin: 3rem;

    display: grid;
    grid-gap: .5rem;

    grid-template-columns: 100%;

    justify-items: center;
    align-content: center;

    background-color: ${(props) => props.theme.colors.white};

    border: none;

    border-radius: 100%;
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    cursor: pointer;

    ${({isClicked}) => 
        (isClicked) && css`
            position: fixed;
        `
    }

    
    ${({isNavFixed}) => 
        (isNavFixed) && css`
            position: fixed;
        `
    }

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
        box-shadow: none;
        background-color: transparent;
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
    height: .4rem;
    width: 55%;
    background-color: ${(props) => props.theme.colors.black};
`

const NavPage = styled(motion.div)`
    position: fixed;
    
    height: 100%;
    width: 100%;

    display: grid;

    justify-content: center;
    align-content: center;

    z-index: 1;

    background-image: linear-gradient(to bottom right, ${(props) => props.theme.colors.green}, ${(props) => props.theme.colors.blue});
`

const NavList = styled(motion.nav)`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(max-content, 3);
    list-style: none;
    justify-items: center;
`

const NavItem = styled(motion.li)`
    font-size: ${(props) => props.theme.fontSize_default.nav};
    overflow: hidden;
    position: relative;
    padding: .5rem 1rem;
    transition: all .2s;
    width: max-content;
    text-shadow: ${(props) => props.theme.textShadows.textShadowLight};

    & > * {
        color: ${(props) => props.theme.colors.white} !important;
    }

    &:hover {
        transform: scale(1.1);
    }
`

const NavListItemBackground = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.transBlack_75};
    bottom: 0;
    left: 0;
    z-index: -1;
`

// Animations
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
    const {width} = useWindowDimensions();
    const [isNavFixed, setIsNavFixed] = useState(false);

    const router = useRouter();

    const handleNavButtonClick = () => {
        setIsClicked(!isClicked);
    }

    // Closes Nav Panel if the current page is selected.
    const handleNavListItemClick = (_href) => {
        if (router.route == _href) {
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }
    }

    /*
        @TODO: Should be broken out into seperate folder. Will require the passing of multiple states.
    */
    const NavListItem = ({lable, _href}) => {

        const [isHovered, setIsHovered] = useState(false);

        return (
            <NavItem onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => handleNavListItemClick(_href)}>
                <Link href={ _href }>
                    <a>{ lable }</a>
                </Link>
                <NavListItemBackground initial={{ x: "-110%" }} animate={isHovered ? {x: 0, transition: {type: "linear", duration: .2} } : ""}/>
            </NavItem>
        );
    };


    // Used to automatically retract the navigation bar once a new page has completed loading.
    useEffect(() => {
        if (isChildLoaded) {
            setIsClicked(false);
        }

        // Sets fixes the nav on all pages but the home page.
        if (router.route != "/" && width > 800) {
            setIsNavFixed(true);
        } else {
            setIsNavFixed(false);
        }
    }, [isChildLoaded, width]);
    
    return (
        <>
            <NavButton isClicked={isClicked} onClick={() => handleNavButtonClick()} isNavFixed={isNavFixed}>
                <NavButtonLine variants={navLine1Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
                <NavButtonLine variants={navLine2Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
                <NavButtonLine variants={navLine3Animation} animate={buttonHovered && !isClicked ? "animate" : ""}/>
            </NavButton>
            <NavPage variants={navPageAnimation} initial="hidden" animate={isClicked ? "visible" : ""} key="NavPage">
                <NavList variants={navListAnimation}>
                    <NavListItem lable="Home" _href="/" />
                    <NavListItem lable="Thoughts" _href="/blog" />
                    <NavListItem lable="Manny's World" _href="/videos" />
                </NavList>
        </NavPage>
        </>
    );
}

export default Navbar;