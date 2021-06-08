// Dependencies
import styled from 'styled-components';
import { useEffect } from 'react';
import ContentfulApi from '../../api/ContentfulApi';

// Components
import BlogPageContent from '../../components/blog_post/BlogPageContent';
import Section from '../../components/comps/section';
import Socials from '../../components/comps/socials';
import media from '../../components/MediaQueries';
import BlogBackground from '../../components/comps/blogBackground';
import BlogItemContent from '../../components/blog_post/BlogPageContent';

const SocialsWrapper = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    ${media.width_600`
        display: none;
    `}
`

export const getStaticProps = async () => {

    const res = await ContentfulApi.getPagePosts(0);
    const total = await ContentfulApi.getTotalPostsNumber();

    return {
        props: {
            posts: res.posts || null,
            totalPages: total
        }
    }
}

const Blog = ({ handleChildLoaded, posts, totalPages}) => {
    
    // Used to detect page load completion. Used in automatic closing of navigation for page transition.
    useEffect(() => {
        handleChildLoaded()
    }, [])

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
                />
            </SocialsWrapper>
            <BlogPageContent posts={ posts } pageNum={ 0 } totalPages={ totalPages } />
        </Section>
    );
}

export default Blog;