import Link from 'next/link';
import styled from 'styled-components';


const Nav = styled.nav`

    position: absolute;

    right: 0;
    left: 0;
    top: 0;

    display: grid;
    justify-content: center;

    font-size: ${(props) => props.theme.fontSize_default.nav};

`

const NavList = styled.ul`
    
    display: flex;
    list-style: none;

    padding: 1rem;

    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0 1rem ${(props) => props.theme.colors.blue};

    & > :not(:last-child) {
        border-right: solid ${(props => props.theme.colors.blue)};
    }

`

const NavListItem = styled.li`
    padding: 0.5rem 2rem;
`


const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavListItem><Link href="/"><a>Home</a></Link></NavListItem>
                <NavListItem><Link href="/blog"><a>Blog Posts</a></Link></NavListItem>
                <NavListItem><Link href="/videos"><a>Videos</a></Link></NavListItem>
            </NavList>
        </Nav>    
    );
}
 
export default Navbar;