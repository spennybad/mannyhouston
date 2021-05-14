import Link from 'next/link';
import styled from 'styled-components';

const NavButton = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    
    width: 7rem;
    height: 7rem;
    background-color: ${(props) => props.theme.colors.blue};
    
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    & > * {
        height: 5rem;
        width: 5rem;
        filter: invert();
    }
`

const Nav = styled.nav`

    position: fixed;

    margin-top: 3rem;

    height: 7rem;

    right: 0;
    top: 0;

    display: flex;
    justify-content: center;

    font-size: ${(props) => props.theme.fontSize_default.nav};
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    z-index: 100;

    transform: translateX(calc(100% - 7rem));

    transition: .4s all ease-in-out;

    &:hover, &:active, &:focus {
        transform: translateX(0);
    }
`

const NavList = styled.ul`
    
    display: flex;
    
    align-items: center;

    list-style: none;

    background-color: ${(props) => props.theme.colors.white};

    & > :not(:last-child) :not(:first-child) {
        border-right: .2rem solid ${(props) => props.theme.colors.blue};
    }

`

const NavListItem = styled.li`
    transition: all .2s;

    height: 100%;

    display: grid;
    
    align-content: center;
    padding: 2rem;

    & > * {
        transition: border-bottom .2s;
    }

    &:hover {
        & > * {
            border-bottom: .5rem solid ${(props) => props.theme.colors.blue};
        }
    }
`

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavButton>
                    <img src="/imgs/svg/menu.svg"></img>
                </NavButton>
                <NavListItem><Link href="/"><a>Home</a></Link></NavListItem>
                <NavListItem><Link href="/blog"><a>Thoughts</a></Link></NavListItem>
                <NavListItem><Link href="/videos"><a>Manny's World</a></Link></NavListItem>
            </NavList>
        </Nav>
    );
}

export default Navbar;