import { createClient } from 'contentful';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Skeleton from '../../../components/Skeleton';
import Section from '../../../components/comps/section';
import ExitButton from '../../../components/comps/exitButton';
import BlogBackground from '../../../components/comps/blogBackground'
import media from '../../../components/MediaQueries';

import Socials from '../../../components/comps/socials';
import RichTextParser from '../../../utils/RichTextParser';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

// Gets executed at build time.
export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blogPost' // Content id to pull from Contentful.
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

// Gets executed at build time for however many Paths are returned by getStaticPaths.
// Recieves 'context' as a parameter which contains the context of each page 
// returned by getStaticPaths.
export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
    })

    if (!items.length) { // If there is no items for current slug.
        return {
            redirect: {
                destination: '/',
                permanent: false // Set to false as we may have a page someday equal to the currently non-existent slug.
            }
        }
    }

    return {
        props: { post: items[0] },
        revalidate: 1
    }
}

const Post = styled.div`
    
    position: relative;

    justify-self: center;

    padding: 5rem 3rem;
    
    height: 100%;
    width: 100%;
    
    background-color: ${(props) => props.theme.colors.white};

    z-index: 1;
`

const StyledImage = styled.img`
    position: fixed;

    object-fit: cover;
    object-position: center;

    z-index: 0;

    width: 100%;
    height: 100%;
`

const OpenSlider = styled(motion.div)`
    position: absolute;
    height: 100%;
    width: 100%;

    background-color: ${(props) => props.theme.colors.pink};
    
    z-index: 10000;
`

const SocialsWrapper = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    ${media.width_600`
        display: none;
    `}
`

const Media = styled.div`

`

const PostTitle = styled(motion.h3)`
    font-size: calc(${(props) => props.theme.fontSize_default.h2});
`

const PostContentWrapper = styled.div`
    width: 100%;
    height: max-content;

    font-size: ${(props) => props.theme.fontSize_default.p};
`

const BlogPost = ({ post }) => {

    if (!post) return <Skeleton />

    const { blogEntryTitle, blogPostContent, blogPostMedia } = post.fields;

    RichTextParser.blogPostRenderer(blogPostContent);

    return (
        <Section padding="none" area="1by3" height="100%">
            <SocialsWrapper>
                <Socials color="white" gap="1rem" media_query="blog" layoutId="socials"/>
            </SocialsWrapper>
            <Post>
                <OpenSlider animate={{width: 0}}/>
                <PostTitle>
                    {blogEntryTitle}
                </PostTitle>
                <PostContentWrapper>
                    {RichTextParser.blogPostRenderer(blogPostContent)}
                </PostContentWrapper>
                <Media>
                    {
                        blogPostMedia && blogPostMedia.map(photo => (
                            <div key={photo.sys.id}>
                                <Image
                                    src={'https:' + photo.fields.file.url}
                                    width={300}
                                    height={400}
                                />
                            </div>
                        ))
                    }
                </Media>
                <ExitButton/>
            </Post>
            <BlogBackground />
        </Section>
    );

}

export default BlogPost;