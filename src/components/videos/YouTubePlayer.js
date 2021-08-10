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
            id="youtube__player"
            videoId={ video.snippet.resourceId.videoId }
            opts={ opts }
            onPlay={() => (mobile ? fullScreen : {})}
        />
    );
}

export default YouTubePlayer;
