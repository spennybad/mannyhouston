import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { motion } from 'framer-motion';

import styled from 'styled-components';

import {useState} from 'react';

const BlogItem = styled(motion.li)`
    width: 100%;
    height: 100%;

    list-style: none;

    background-color: ${(props) => props.theme.colors.off_white}; 

    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    transition: all .2s;

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
`

const BlogItemAnimation = {
    initial: {

    },
    animate: {
        height: "100vh",
        position: "absolute",
        width: "100%",
        top: 0,
        transition: {
            duration: 10
        }
    },
    exit: {
        opacity: 0
    }
}

const BlogPostItem = ({ post, setIsClicked }) => {

    const { blogEntryTitle, blogPostContent, slug } = post.fields;
    
    return (
        <BlogItem variants={BlogItemAnimation} onClick={() => setIsClicked(true)}>
            <article>
                <Link href={`/blog/posts/${slug}`}>
                    <a>
                        <BlogItemTitle>
                            {blogEntryTitle}
                        </BlogItemTitle>
                    </a>    
                </Link>
            </article>
        </BlogItem>
    );
}
 
export default BlogPostItem;