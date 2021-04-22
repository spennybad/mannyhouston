import { createClient } from 'contentful';
import ShowList from '../components/shows/ShowList';
import styles from './home.module.scss';

export const getStaticProps = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });

    const res_shows = await client.getEntries({ content_type: 'show' });

    return {
        props: {
            shows: res_shows.items
        }
    }
}

const Home = ({ shows }) => {
    return (
        <section className={ styles.home }>
            <h1 className={ styles.home__heading }>Manny Houston</h1>
            <ShowList shows={ shows } />
        </section>
    );
}

export default Home;
