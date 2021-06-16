import { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/WindowDimensions';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ video }) => {

    const { width } = useWindowDimensions();

    return (
        <YouTube videoId={video.snippet.resourceId.videoId} opts={{ 
            height: `${width * 0.75 * 0.5625}`,
            width: `${width * 0.75}`,
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                modestbranding: 1,
                rel: 0
            }
        }}
        />
    );
}

export default YouTubePlayer;
