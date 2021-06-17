// import { useEffect, useState } from 'react';
// import useWindowDimensions from '../../hooks/WindowDimensions';
// import YouTube from 'react-youtube';
// import screenfull from "screenfull";  
// import DeviceDetector from "device-detector-js";  

// const YouTubePlayer = ({ video }) => {

//     const { width } = useWindowDimensions();

//     return (
//         <YouTube videoId={video.snippet.resourceId.videoId} onPlay={() => (mobile ? fullScreen : {})} opts={{ 
            // height: `${width * 0.75 * 0.5625}`,
            // width: `${width * 0.75}`,
//             playerVars: {
//                 // https://developers.google.com/youtube/player_parameters
//                 autoplay: 1,
//                 modestbranding: 1,
//                 rel: 0
//             }
//         }}
//         />
//     );
// }

// export default YouTubePlayer;

import React from "react";
import screenfull from "screenfull";
import YouTube from "react-youtube";
import DeviceDetector from "device-detector-js";
import useWindowDimensions from '../../hooks/WindowDimensions';

const YouTubePlayer = ({ video }) => {

    const { width } = useWindowDimensions();
    const dd = new DeviceDetector();
    const mobile = dd.usesMobileBrowser();

    const fullScreen = event => {
        var iframe = event.target.getIframe();
        if (screenfull.isEnabled) {
            screenfull.request(iframe);
        }
    };
    
    const opts = {
        height: `${width * 0.75 * 0.5625}`,
        width: `${width * 0.75}`,
        controls: "1"
    };

    return (
        <YouTube
            videoId={ video.snippet.resourceId.videoId }
            opts={ opts }
            onPlay={() => (mobile ? fullScreen : {})}
        />
    );
}

export default YouTubePlayer;
