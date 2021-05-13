import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout'

// Includes font imports.
import "./_app.css";

import theme from '../theme/theme';
import GlobalStyles from '../theme/globalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <head>
                <title>Manny Houston</title>
            </head>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default MyApp
