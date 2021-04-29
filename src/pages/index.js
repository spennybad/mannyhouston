import { createClient } from 'contentful';
import styled from 'styled-components';

import LandingPage from '../components/home/LandingPage';
import ShowList from '../components/shows/ShowList';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Credit from '../components/credit/Credit';


const Wrapper = styled.div `
    width: 100%;
`

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
        <Wrapper>
            <LandingPage />
            <About />
            {/* <ShowList shows= { shows }/> */}
            <Contact />
            <Credit />
        </Wrapper>
    );
}

export default Home;
