// Dependencies
import { createClient } from 'contentful';
import styled from 'styled-components';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Components
import BlogPostItem from '../../components/blog_post/BlogPostItem';
import H2 from '../../components/comps/h2';
import Section from '../../components/comps/section';
import Socials from '../../components/comps/socials';
import Slider from '../../components/comps/slider';


export const getStaticProps = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });

    const res_blog_posts = await client.getEntries({ content_type: 'blogPost' });

    return {
        props: {
            blogPosts: res_blog_posts.items
        },
        revalidate: 1
    }
}

const BlogContent = styled.div`
    justify-self: center;

    display: grid;
    grid-template-rows: 1fr 100%;
    grid-template-columns: 100%;

    justify-items: center;

    position: relative;

    z-index: 1;

    width: 70%;
    height: 100%;

    padding-top: 7rem;

    background-color: ${(props) => props.theme.colors.transBlack_75};

`

const BlogList = styled.ul`
    width: 100%;
    height: max-content;
    padding: 3rem;

    & > :not(:last-child) {
        margin-bottom: 3rem;
    }
`

const StyledImage = styled.img`
    position: fixed;

    object-fit: cover;
    object-position: center;

    z-index: 0;

    width: 100%;
    height: 100%;
`

const SocialsWrapper = styled.div`
    height: 100%;
    width: 100%;
`

const Blog = ({ handleChildLoaded, blogPosts }) => {

    const [isClicked, setIsClicked] = useState(false);

    // Used to detect page load completion. Used in automatic closing of navigation for page transition.
    useEffect(() => {
        handleChildLoaded()
    }, [])

    return (
        <Section padding="none" area="blog">
            <SocialsWrapper>
                <Socials 
                    color="white"
                    gap="1rem"
                    direction="vertical"
                    position="fixed"
                    layoutId="socials"
                />
            </SocialsWrapper>
            <BlogContent>
                <H2 styling="blog">Thoughts</H2>
                <BlogList>
                    {
                        blogPosts.map(post => (
                            <BlogPostItem key={post.sys.id} post={post} setIsClicked={setIsClicked}/>
                        ))
                    }
                </BlogList>
               <Slider isClicked={isClicked} position="right" />
            </BlogContent>
            <StyledImage
                srcSet="https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_768/v1620053588/manny_2_ty71kl.webp 768w,
                        https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_1024/v1620053588/manny_2_ty71kl.webp 1024w,
                        https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_1920/v1620053588/manny_2_ty71kl.webp 1920w,
                        https://res.cloudinary.com/spencercv7-dev/image/upload/v1620053588/manny_2_ty71kl.webp"
                sizes="100%"
                layout="fill"
                alt="Contact Me Background - Manny Houston eating a bag of chips."
                layoutId="background-image"
            />
        </Section>
    );
}

export default Blog;