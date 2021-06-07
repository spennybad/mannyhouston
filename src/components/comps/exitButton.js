import styled from 'styled-components';
import media from '../MediaQueries';

import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledExitButton = styled.div`

    position: absolute;
    top: 0;
    right: 0;

    height: 6rem;
    width: 6rem;

    background-color: ${(props) => props.theme.colors.blue};
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    border-radius: 100%;

    margin: 3rem;

    transition: all .2s;

    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    ${media.width_400`
        height: 5rem;
        width: 5rem;
        margin: 1.5rem;
    `}
`

// Had to seperate into two seperate components due to glitch in Firefox and Google Chrome
const XLine_1 = styled.div`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);

    height: 60%;
    width: 8%;

    background-color: ${(props) => props.theme.colors.white};
    
    cursor: pointer;
`

// Had to seperate into two seperate components due to glitch in Firefox and Google Chrome
const XLine_2 = styled.div`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);

    height: 60%;
    width: 8%;

    background-color: ${(props) => props.theme.colors.white};

    cursor: pointer;
`

const ExitButton = () => {
    
    const router = useRouter();

    const handleExit = () => {
        console.log(router.back());
    }
    
    return (
         <StyledExitButton onClick={() => handleExit()}>
            <button>
                <a>
                    <XLine_1 />
                    <XLine_2 />
                </a>
            </button>
        </StyledExitButton>
    );
}
 
export default ExitButton;