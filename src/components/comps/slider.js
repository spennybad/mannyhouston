import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

// Slider Panel
const StyledPanel = styled(motion.div)`
    position: absolute;
    height: 100%;

    ${({ position }) => 
        
        (position === "left") && css`
            left: 0;
        `
        ||
        (position === "right") && css`
            right: 0;
        `
    }

    ${({color}) =>
        (color === "blue") && css`
            background-color: ${(props) => props.theme.colors.blue};
        `
        ||
        (color === "green") && css`
            background-color: ${(props) => props.theme.colors.green};
        `
        ||
        (color === "yellow") && css`
            background-color: ${(props) => props.theme.colors.yellow};
        `
        ||
        (color === "pink") && css`
            background-color: ${(props) => props.theme.colors.pink};
        `
    }

`

const PanelAnimation = {
    initial: {
        width: 0
    },
    animate: {
        width: "100%",
        transition: {
            type: "linear",
            ease: "easeOut"
        }
    }
}

const Panel = ({position, color}) => {
    return (
        <StyledPanel variants={PanelAnimation} position={position} color={ color } />
    )
}

//====================================================================\\


// Page Transition Slider
const StyledSlider = styled(motion.div)`
    position: fixed;

    height: 100%;

    z-index: 10000;

    ${({ position }) => 
        
        (position === "left") && css`
            left: 0;
        `
        ||
        (position === "right") && css`
            right: 0;
        `
    }
`

const SliderAnimation = {
    initial: {
        width: 0
    },
    animate: {
        width: "100%", 
        transition: {
            staggerChildren: .1,
            duration: 0
        }
    }
}

const Slider = ({isClicked, position}) => {
    return (
        <>  
            <StyledSlider variants={ SliderAnimation } initial="initial" animate={isClicked ? "animate" : ""} position={position}>
                <Panel position={position} color="blue"  />
                <Panel position={position} color="green"/>
                <Panel position={position} color="yellow"  />
                <Panel position={position} color="pink"  />
            </StyledSlider>
        </>
    );
}
 
export default Slider;