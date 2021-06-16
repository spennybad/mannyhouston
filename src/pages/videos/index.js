import { useEffect } from 'react';
import styled from 'styled-components';
import media from '../../components/MediaQueries';

import Section from '../../components/comps/section';
import Socials from '../../components/comps/socials';
import VideoList from '../../components/videos/VideoList';
import BlogBackground from '../../components/comps/blogBackground';


const YOUTUBE_VIDEO_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_PLAYLIST_ID = "PL8KV1nWcRiJRh5oRwSz2CCROUdsMNGulR";

export const getServerSideProps = async () => {
    
    const res_videos = await fetch(`${YOUTUBE_VIDEO_ITEMS_API}?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res_videos.json();

    return {
        props: {
            data
        }
    }
}

  const SocialsWrapper = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    ${media.width_800`
        display: none;
    `}
`

const Videos = ({ data, handleChildLoaded }) => {

    useEffect(() => {
        handleChildLoaded()
    }, [])

    console.log(data);

    return (
        <Section area="1by3" justify="center" padding="none">
            <BlogBackground />
            <SocialsWrapper>
                <Socials 
                    color="white"
                    gap="1rem"
                    direction="vertical"
                    media_query="notmain"
                    layoutId="socials"
                    backing={true}
                />
            </SocialsWrapper>
            <VideoList videos={ data } />    
        </Section>
    );

}
 
export default Videos; 