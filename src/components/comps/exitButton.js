import styled from 'styled-components';

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

    &:hover {
        transform: scale(1.1);
    }
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
`

const ExitButton = () => {
    
    const router = useRouter();

    const handleExit = () => {
        router.back();
    }
    
    return (
        // <button onClick={() => handleExit()}>
            // <a>
                <StyledExitButton>
                    <XLine_1 />
                    <XLine_2 />
                </StyledExitButton>
            // </a>
        // </button>
    );
}
 
export default ExitButton;