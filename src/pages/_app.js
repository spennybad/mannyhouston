import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout'

// Includes font imports.
import "./_app.css";

import theme from '../theme/theme';
import GlobalStyles from '../theme/globalStyles';
import { AnimateSharedLayout } from 'framer-motion';
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps, router}) {

    const [isChildLoaded, setIsChildLoaded] = useState(false);

    // Function passed to all components in project. Allows UseEffect() in each component to have control over
    // isChildLoaded state. Updates isChildLoaded to tell the Nav menu to close only once the new page is fully
    // loaded.
    const handleChildLoaded = () => {
        setIsChildLoaded(true);
    }

    return (
        <>
            <head>
                <title>Manny Houston</title>
            </head>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <AnimateSharedLayout>
                    <Layout setIsChildLoaded={setIsChildLoaded} isChildLoaded={isChildLoaded}>
                        <Component {...pageProps} key={router.route ? router.route : "home"} isChildLoaded={isChildLoaded} handleChildLoaded={handleChildLoaded}/>
                    </Layout>
                </AnimateSharedLayout>
            </ThemeProvider>
        </>
    )
}

export default MyApp
