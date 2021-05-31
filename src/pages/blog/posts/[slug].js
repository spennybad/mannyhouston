import { createClient } from 'contentful';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Skeleton from '../../../components/Skeleton';
import Section from '../../../components/comps/section';
import ExitButton from '../../../components/comps/exitButton';
import Slider from '../../../components/comps/slider';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Socials from '../../../components/comps/socials';

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

const Post = styled(motion.div)`
    justify-self: center;
    
    display: grid;

    padding: 5rem 3rem;

    position: relative;

    grid-template-rows: max-content 1fr max-content;
    
    height: 100vh;
    width: 70%;
    
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

const Media = styled.div`

`

const PostTitle = styled(motion.h3)`
    font-size: ${(props) => props.theme.fontSize_default.h3};
`

const PostContent = styled.p`
    font-size: ${(props) => props.theme.fontSize_default.p};
`

const BlogPost = ({ post }) => {

    if (!post) return <Skeleton />

    const { blogEntryTitle, blogPostContent, blogPostMedia } = post.fields;

    const [isClicked, setIsClicked] = useState(false);

    return (
        <Section padding="none">
            <Socials position="fixed" color="white" gap="1rem" layoutId="socials"/>
                <Post>
                    <OpenSlider animate={{width: 0}}/>
                    <PostTitle>
                        {blogEntryTitle}
                    </PostTitle>
                    <PostContent>{documentToReactComponents(blogPostContent)}</PostContent>
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
                    <ExitButton setIsClicked={setIsClicked}/>
                </Post>
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

export default BlogPost;