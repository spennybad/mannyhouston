import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { motion, AnimatePresence } from 'framer-motion';

import styled from 'styled-components';

import {useState} from 'react';
import RichTextParser from '../../utils/RichTextParser';

const BlogItem = styled(motion.li)`
    position: relative;

    width: 100%;
    height: max-content;

    max-height: 30rem;

    margin-bottom: 1rem;

    list-style: none;

    background-color: ${(props) => props.theme.colors.off_white}; 

    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    transition: all .2s;

    overflow: hidden;

    & > article a {
        display: grid;

        grid-template-rows: 1fr 100%;
        grid-template-columns: 100%;

        height: 100%;
        width: 100%;

        padding: 3rem;

        & > div {
            font-size: calc(${(props) => props.theme.fontSize_default.p} - .5rem);
        }
    }

    &:hover {
        transform: scale(1.01);
        background-color: ${(props) => props.theme.colors.white}; 
    }

`

const BlogItemTitle = styled(motion.h3)`
    font-size: ${(props) => props.theme.fontSize_default.h3};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.light_grey};
    padding: 1rem;
    width: max-content;
`

const BlogItemDesc= styled(motion.div)`
    font-size: ${(props) => props.theme.fontSize_default.p};

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        background-image: linear-gradient(to bottom, transparent 50%, ${(props) => props.theme.colors.white});
    }
`

const BlogItemAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

const BlogPostItem = ({ post, setIsClicked, _key }) => {

    const { blogEntryTitle, blogPostContent, slug } = post.fields;

    return (
        <AnimatePresence exitBeforeLeaving>
            <BlogItem key={_key} variants={BlogItemAnimation} onClick={() => setIsClicked(true)} initial="initial" animate="animate" exit="exit">
                <article>
                    <Link href={`/blog/posts/${slug}`}>
                        <a>
                            <BlogItemTitle>
                                {blogEntryTitle}
                            </BlogItemTitle>
                            <BlogItemDesc>
                                {RichTextParser.blogListRenderer(blogPostContent)}
                            </BlogItemDesc>
                        </a>    
                    </Link>
                </article>
            </BlogItem>
        </AnimatePresence>
    );
}
 
export default BlogPostItem;