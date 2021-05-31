import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import media from '../MediaQueries';

import styled from 'styled-components';

// Styling
const NavWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;

    padding: 1rem 0rem 1rem 1rem;

    margin-top: 3rem;

    width: max-content;
    height: max-content;

    overflow: hidden;

    z-index: 1000;
`

const Nav = styled(motion.div)`
    display: grid;

    grid-template-columns: 6rem 1fr;

    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};
`

const NavButton = styled.div`
    height: 100%;
    width: 100%;

    background-color: ${(props) => props.theme.colors.white};

    cursor: pointer;

    & > * {
        width: 100%;
        height: 100%;
    }
    
`

const NavList = styled.ul` 
    list-style: none;
    display: flex;
    position: relative;

    width: 100%;

    justify-items: space-between;
    align-items: center;

    padding: 1rem;

    background-color: ${(props) => props.theme.colors.white};

    & * :not(:last-child) {
        border-right: .5rem solid ${(props) => props.theme.colors.blue};
    }

`

const NavListItem = styled.li`
    font-size: ${(props) => props.theme.fontSize_default.nav};
    padding: 0 3rem;

    & > * {
        transition: all .2s;
        display: inline-block;
        
        &:hover {
            transform: scale(1.1);
            color: ${(props) => props.theme.colors.blue};
        }
    }

`

// Animation Variants
const navAnimation = {
    open: {
        x: 0,
        transition: {
            type: "linear",
            ease: "easeInOut"
        }
    },
    closed: {
        x: "calc(100% - 6rem)"
    }
}

// Event Handlers
const handleNavShow = (navShown, setNavShown) => {
    setNavShown(!navShown);
}

const handleNavAutoClose = (setNavShown) => {
    setTimeout(() => {
        setNavShown(false);
    }, 250);
}

// Component Constructor
const Navbar = () => {

    const [navShown, setNavShown] = useState(false);
    const router = useRouter();

    return (
        <AnimatePresence> {
                router.route !== "/blog/posts/[slug]" && <NavWrapper initial={{x: "100%"}} animate={{x: 0,  transition: {type: "linear"}}} exit={{x: "100%"}}>
                    <Nav
                        variants={ navAnimation }
                        initial="closed"
                        animate={navShown ? "open" : "closed"}
                    >
                        <NavButton onClick={() => handleNavShow(navShown, setNavShown)}>
                            <img src="/imgs/svg/menu.svg"></img>
                        </NavButton>
                        <NavList>
                            <NavListItem><Link href="/"><a onClick={() => handleNavAutoClose(setNavShown)}>Home</a></Link></NavListItem>
                            <NavListItem><Link href="/blog"><a onClick={() => handleNavAutoClose(setNavShown)}>Thoughts</a></Link></NavListItem>
                            <NavListItem><Link href="/videos"><a onClick={() => handleNavAutoClose(setNavShown)}>Manny's World</a></Link></NavListItem>
                        </NavList>
                    </Nav>
                </NavWrapper>
            }
        </AnimatePresence>
    );
}

export default Navbar;