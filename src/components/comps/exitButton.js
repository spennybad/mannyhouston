import styled from 'styled-components';
import { motion } from 'framer-motion';

import Link from 'next/link';
import {useState} from 'react';

const StyledExitButton = styled(motion.div)`

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
        transform: translate(-50%, -50%) rotate(45deg);
    }

    & * :nth-child(2) {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
        transform: scale(1.1);
    }
`

const XLine = styled(motion.div)`
    position: absolute;

    top: 50%;
    left: 50%;

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