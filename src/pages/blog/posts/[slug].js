import { createClient } from 'contentful';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import { useEffect } from 'react';

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

const PostWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    background-color: ${(props) => props.theme.colors.white};
`

const Post = styled.div`
    
    position: relative;

    justify-self: center;

    padding: 5rem 3rem;
    
    height: 100%;
    width: 100%;
`

const OpenSlider = styled(motion.div)`
    position: absolute;
    height: 100%;
    width: 100%;

    background-color: ${(props) => props.theme.colors.pink};
    
    z-index: 1;
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
    display: grid;
    grid-template-columns: repeat(3, minmax(6rem, 1fr));
    grid-auto-rows: max-content;
    grid-gap: 3rem;
    grid-auto-flow: dense;

    ${media.width_600`
         grid-template-columns: repeat(2, minmax(6rem, 1fr));
    `}

    ${media.width_400`
         grid-template-columns: repeat(1, minmax(6rem, 1fr));
    `}
`

const BlogPostImage = styled(Image)`

`

const PostTitle = styled(motion.h3)`
    font-size: ${(props) => props.theme.fontSize_default.h1};
    max-width: 90%;
`

const MediaImageWrapper = styled.div`
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    max-height: 100%;

    overflow: hidden;

    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.colors.white};

    ${({height, width}) => 
        
        (width > height) && css`
            grid-column: span 2;
        `
    }
`

const PostContentWrapper = styled.div`
    width: 100%;
    height: max-content;

    font-size: ${(props) => props.theme.fontSize_default.p};
`

const MediaWrapperClass = ({_key, photo, children}) => (
    <MediaImageWrapper key={ _key } width={ photo.fields.file.details.image.width } height={ photo.fields.file.details.image.height }>{children}</MediaImageWrapper>
);


const BlogPost = ({ post, handleChildLoaded }) => {

    if (!post) return <Skeleton />

    useEffect(() => {
        handleChildLoaded()
    }, [])

    const { blogEntryTitle, blogPostContent, blogPostMedia } = post.fields;

    RichTextParser.blogPostRenderer(blogPostContent);

    return (
        <Section padding="none" area="1by3" height="100%">
            <BlogBackground />
            <SocialsWrapper>
                <Socials color="white" gap="1rem" media_query="blog" layoutId="socials" backing={true}/>
            </SocialsWrapper>
            <PostWrapper>
            <OpenSlider animate={{width: 0}}/>
                <Post>
                    <PostTitle>
                        {blogEntryTitle}
                    </PostTitle>
                    <PostContentWrapper>
                        {RichTextParser.blogPostRenderer(blogPostContent)}
                    </PostContentWrapper>
                    <Media>
                        {
                            blogPostMedia && blogPostMedia.map(photo => {
                                return( 
                                    <MediaWrapperClass _key={photo.sys.id} photo={ photo }>
                                        <BlogPostImage
                                            src={'https:' + photo.fields.file.url}
                                            height={photo.fields.file.details.image.height}
                                            width={photo.fields.file.details.image.width}
                                            objectFit="cover"
                                        />
                                    </MediaWrapperClass>
                                );
                            })
                        }
                    </Media>
                    <ExitButton/>
                </Post>
            </PostWrapper>
        </Section>
    );

}

export default BlogPost;