import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout'

// Includes font imports.
import "./_app.css";

import theme from '../theme/theme';
import GlobalStyles from '../theme/globalStyles';
import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps, router}) {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <header><title>Manny Houston</title></header>
            <AnimateSharedLayout>
                <Layout>
                    <Component {...pageProps} key={router.route}/>
                </Layout>
            </AnimateSharedLayout>
        </ThemeProvider>
    )
}

export default MyApp
