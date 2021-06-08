import styled from 'styled-components';
import { useState } from 'react';

import H2 from '../comps/h2';
import Slider from '../comps/slider';
import BlogPostItem from './BlogPostItem';
import BlogNextPrevButton from './BlogNextPrevButton';
import { AnimatePresence, motion } from 'framer-motion';

const BlogContentWrapper = styled.div`
    position: relative;

    display: grid;

    grid-template-rows: max-content auto;

    justify-items: center;
    
    width: 100%;
    height: 100%;

    background-image: linear-gradient(to bottom right, ${(props) => props.theme.colors.light_grey}, ${(props) => props.theme.colors.transBlack_75});
`

const BlogContent = styled.div`
    position: relative;
    
    width: 100%;
    height: 100%;

    justify-self: center;

    display: grid;

    justify-items: center;

`

const BlogList = styled(motion.ul)`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 90%;
`

const BlogItemContent = ({ posts, pageNum, totalPages }) => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <BlogContentWrapper>
            <H2 styling="blog">Thoughts</H2>
            <BlogContent>
                <BlogList>
                    {
                        posts.posts.map(post => (
                            <BlogPostItem key={post.sys.id} _key={post.sys.id} post={post} setIsClicked={setIsClicked} />
                        ))
                    }
                    <BlogNextPrevButton _next pageNum={pageNum} totalPages={totalPages} />
                    <BlogNextPrevButton _prev pageNum={pageNum} totalPages={totalPages} />
                </BlogList>
            </BlogContent>
            <Slider isClicked={isClicked} position="right" />
        </BlogContentWrapper>
    );
}

export default BlogItemContent;