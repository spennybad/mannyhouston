import { createClient } from 'contentful';
import ShowList from '../components/shows/ShowList';
import styles from './home.module.scss';

const YOUTUBE_VIDEO_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_PLAYLIST_ID = "PLpqrUtVuSh1BhwAYbz45YKhwGDGYyLLMe";

export const getServerSideProps = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });

    const res_shows = await client.getEntries({ content_type: 'show' });

    const res_videos = await fetch(`${YOUTUBE_VIDEO_ITEMS_API}?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res_videos.json();


    return {
        props: {
            shows: res_shows.items,
            videos: data
        }
    }
}

const Home = ({ shows, videos }) => {

    console.log(videos);

    return (
        <section className={ styles.home }>
            <h1 className={ styles.home__heading }>Manny Houston</h1>
            <ShowList shows={ shows } />
        </section>
    );
}

export default Home;
