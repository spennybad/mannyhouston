
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head key="main-header">
                    <link rel="preload" href="/fonts/ReemKufi-Regular.woff" as="font" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/ReemKufi-Regular.woff2" as="font" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/Staatliches-Regular.woff" as="font" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/Staatliches-Regular.woff2" as="font" crossOrigin="anonymous" />
                    <meta
                        name="description"
                        content="Manny Houston's website. Your place for all things Manny Houston, where you can find extra content, and a behind the scenes look at the man behind the art."
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}