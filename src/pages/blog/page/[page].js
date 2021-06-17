// Dependencies
import styled from 'styled-components';
import { useEffect } from 'react';
import Head from 'next/head';

// Components
import Section from '../../../components/comps/section';
import Socials from '../../../components/comps/socials';
import media from '../../../components/MediaQueries';
import BlogPageContent from '../../../components/blog_post/BlogPageContent';
import BlogBackground from '../../../components/comps/blogBackground';

// API
import ContentfulApi from '../../../api/ContentfulApi';
import { useRouter } from 'next/router';

const SocialsWrapper = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    ${media.width_600`
        display: none;
    `}
`

export const getStaticPaths = async () => {
    const totalPosts = await ContentfulApi.getTotalPostsNumber();
    const totalPages = Math.ceil(totalPosts / 4);

    const paths = [];

    for (let page = 1; page <= totalPages; page++) {
        paths.push({ params: { page: page.toString() } });
    }

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }) => {

    const res = await ContentfulApi.getPagePosts(params.page);

    const totalPosts = await ContentfulApi.getTotalPostsNumber();
    const totalPages = Math.ceil(totalPosts / 4);

    return {
        props: {
            posts: res.posts || null,
            pageNum: params.page,
            totalPages: totalPages
        }
    }
}

const Blog = ({ handleChildLoaded, posts, pageNum, totalPages, isChildLoaded }) => {

    const router = useRouter();

    useEffect(() => {
        handleChildLoaded()
    }, [router.asPath])

    // Used to detect page load completion. Used in automatic closing of navigation for page transition.
    useEffect(() => {
        handleChildLoaded()
    }, [])

    return (
        <>
            <Head>
                <title key="blog-page">Manny Houston | Thoughts</title>
            </Head>
            <Section padding="none" area="1by3">
                <BlogBackground />
                <SocialsWrapper>
                    <Socials
                        color="white"
                        gap="1rem"
                        direction="vertical"
                        media_query="notmain"
                        layoutId="socials"
                        backing={true}
                    />
                </SocialsWrapper>
                <BlogPageContent posts={posts} pageNum={pageNum} totalPages={totalPages} isChildLoaded={isChildLoaded} />
            </Section>
        </>
    );
}

export default Blog;