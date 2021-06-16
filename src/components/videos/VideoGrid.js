import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

import media from '../MediaQueries';
import VideoModal from './VideoModal';

const VideoGridContent = styled.ul`
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 2rem;
    justify-content: center;

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: max-content;

    ${media.width_1200`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.width_600`
        grid-template-columns: 1fr;
    `}

`

const VideoGridItem = styled.li`
    position: relative;
    list-style: none;
    object-fit: cover;
    height: 100%;
    width: 100%;

    transition: transform .2s;

    &:hover {
        transform: scale(1.03);
    }

    cursor: pointer;
`

const VideoItemButton = styled.button`
    border: none;

    &:focus {
        outline: none;
        & > * {
            border: .5rem solid ${(props) => props.theme.colors.blue};
        }
    }
   
`

const VideoGrid = ({ videos }) => {

    const [currentVideo, setCurrentVideo] = useState(null);

    const getVideoThumbnail = (video) => {
        let thumbnail = undefined;
        try {
            thumbnail = 
                <Image
                    src={ video.snippet.thumbnails.standard.url }
                    height={ video.snippet.thumbnails.standard.height }
                    width={ video.snippet.thumbnails.standard.width }
                />
        } catch (err) {
            console.log("Deleted or hidden video.")
        }
        return thumbnail;
    }

    const getVideoItem = (videos) => {  
        return videos.items.map(video => {
            const thumbnail = getVideoThumbnail(video);
            if (thumbnail != undefined) {
                return (
                    <VideoGridItem key={video.id}>
                        <VideoItemButton onClick={() => handleVideoClick(video)}>
                            { thumbnail }
                        </VideoItemButton>
                    </VideoGridItem>
                );
            }
        })
    }

    const handleVideoClick = (video) => {
        setCurrentVideo(video);
    }
    
    return (
        <>
           {currentVideo && <VideoModal video={ currentVideo } setCurrentVideo={ setCurrentVideo }/>}
            <VideoGridContent>
                { getVideoItem(videos) }
            </VideoGridContent>
        </>
    );
}
export default VideoGrid;