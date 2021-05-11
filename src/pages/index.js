import { createClient } from 'contentful';
import styled from 'styled-components';

import LandingPage from '../components/home/LandingPage';
// import Schedule from '../components/schedule/Schedule';
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

const Home = () => {

    return (
        <div>
            <LandingPage />
            <About />
            {/* <Schedule schedule= { schedule }/> */}
            <Contact />
            <Credit />
        </div>
    );
}

export default Home;
