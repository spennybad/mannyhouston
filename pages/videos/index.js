import styles from './videos.module.scss';

import YouTube from 'react-youtube';

const YOUTUBE_VIDEO_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_PLAYLIST_ID = "PLpqrUtVuSh1BhwAYbz45YKhwGDGYyLLMe";

const UNAVAILABLE_VIDEO_DESC = "This video is unavailable.";

export const getServerSideProps = async () => {
    
    const res_videos = await fetch(`${YOUTUBE_VIDEO_ITEMS_API}?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res_videos.json();

    return {
        props: {
            data
        }
    }
}

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0
    },
  };

const Videos = ({ data }) => {

    console.log(data);
    const videos = data.items;
    
    return (
    
        <section className={styles.videos}>
            <ul className={styles.videos__list}>
                {
                    videos.map(video => {
                        return (
                            <li key={video.id} className={styles.videos__list_item}>
                               { (video.snippet.description != UNAVAILABLE_VIDEO_DESC) && <YouTube videoId={video.snippet.resourceId.videoId} opts={opts}/> }
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );

}
 
export default Videos;