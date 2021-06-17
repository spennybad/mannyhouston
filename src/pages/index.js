import { createClient } from 'contentful';
import styled from 'styled-components';
import { useEffect } from 'react'
import Head from 'next/head';

import LandingPage from '../components/home/LandingPage';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Credit from '../components/credit/Credit';

// export const getStaticProps = async () => {

//     const client = createClient({
//         space: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_KEY
//     });

//     const res_schedule = await client.getEntries({ content_type: 'schedule' });

//     return {
//         props: {
//             schedule: res_schedule.items
//         }
//     }
// }

const Home = ({ handleChildLoaded }) => {

    // Updates isChildLoaded state when the component has been loaded.
    useEffect(() => {
        handleChildLoaded()
    }, [])

    return (
        <div>
            <Head>
                <title key="homepage">Manny Houston | Homepage</title>
            </Head>
            <LandingPage />
            <About />
            {/* <Schedule schedule= { schedule }/> */}
            <Contact />
            <Credit />
        </div>
    );
}

export default Home;
