import styled from 'styled-components';

import Link from 'next/link';

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

    & * :first-child {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    & * :nth-child(2) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
        transform: scale(1.1);
    }
`

const XLine = styled.div`
    position: absolute;

    height: 60%;
    width: 8%;

    background-color: ${(props) => props.theme.colors.white};
`

const ExitButton = () => {
    return (
        <Link href={"/blog"}>
            <a>
                <StyledExitButton>
                    <XLine />
                    <XLine />
                </StyledExitButton>
            </a>
        </Link>
    );
}
 
export default ExitButton;