import { createClient } from 'contentful'

export const getStaticProps = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });

    const res_shows = await client.getEntries({ content_type: 'show' });


    return {
        props: {
            shows: res_shows
        },
        revalidate: 1
    }
}

const Home = ({ shows }) => {
    
    return (
        <section className="home">
            <h1>Home</h1>
        </section>
    );
}

export default Home;
