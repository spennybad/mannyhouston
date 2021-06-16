import styled from 'styled-components';

// Components
import YouTubePlayer from './YouTubePlayer';
import media from '../MediaQueries';

const Modal = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    height: 100vh;
    width: 100vw;

    background-color: ${(props) => props.theme.colors.transBlack_90};

    display: grid;
    justify-content: center;
    align-content: center;

    cursor: pointer;

`

const ExitButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    margin: 3rem;
    padding: 1rem;

    height: 6rem;
    width: 6rem;

    border: none;
    color: ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 100%;
    font-size: ${(props) => props.theme.fontSize_default.h4};
    
    cursor: pointer;

    &:before {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;

        height: 70%;
        width: 10%;

        background-color: currentColor;

        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:after {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;

        height: 70%;
        width: 10%;

        background-color: currentColor;

        transform: translate(-50%, -50%) rotate(45deg);
    }

    transition: all .2s;

    &:hover {
        transform: scale(1.1);
    }

    ${media.width_900`
        height: 5rem;
        width: 5rem;
        margin: 1rem;
        
    `}

`

const VideoModal = ({ video, setCurrentVideo }) => {

    return (
        <Modal onClick={() => setCurrentVideo(null)}>
            <ExitButton onClick={() => setCurrentVideo(null)} />
            <YouTubePlayer video={ video } />
        </Modal>
    );
}

export default VideoModal;
