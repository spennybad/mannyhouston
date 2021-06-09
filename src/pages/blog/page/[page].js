// Dependencies
import styled from 'styled-components';
import { useEffect } from 'react';

// Components
import Section from '../../../components/comps/section';
import Socials from '../../../components/comps/socials';
import media from '../../../components/MediaQueries';
import BlogPageContent from '../../../components/blog_post/BlogPageContent';
import BlogBackground from '../../../components/comps/blogBackground';

// API
import ContentfulApi from '../../../api/ContentfulApi';

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

const Blog = ({ handleChildLoaded, posts, pageNum, totalPages }) => {

    // Used to detect page load completion. Used in automatic closing of navigation for page transition.
    useEffect(() => {
        handleChildLoaded()
    }, [])

    totalPages

    return (
        <Section padding="none" area="1by3">
            <BlogBackground />
            <SocialsWrapper>
                <Socials
                    color="white"
                    gap="1rem"
                    direction="vertical"
                    media_query="blog"
                    layoutId="socials"
                    backing={true}
                />
            </SocialsWrapper>
            <BlogPageContent posts={ posts } pageNum={ pageNum } totalPages={ totalPages } />
        </Section>
    );
}

export default Blog;