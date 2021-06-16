import styled from 'styled-components';

import VideoGrid from '../../components/videos/VideoGrid';
import H1 from '../../components/comps/H1';

const VideoListContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 100%;
    background-color: ${(props) => props.theme.colors.white};
    justify-items: center;
`

const VideoList = ({ videos }) => {
    return (
        <VideoListContentWrapper>
            <H1 color="blue" padding="3rem 0">Manny's World</H1>
            <VideoGrid videos={ videos }/>
        </VideoListContentWrapper>
    );
}
 
export default VideoList;