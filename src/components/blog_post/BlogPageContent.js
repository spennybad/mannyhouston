import styled from 'styled-components';
import { useState } from 'react';

import H1 from '../comps/h1';
import BlogPostItem from './BlogPostItem';
import BlogNextPrevButton from './BlogNextPrevButton';
import { motion } from 'framer-motion';

const BlogContentWrapper = styled(motion.div)`
    position: relative;

    display: grid;

    grid-template-rows: max-content auto auto;

    justify-items: center;
    
    width: 100%;
    height: 100%;
    min-height: 100vh;

    overflow: hidden;

    background-color: ${(props => props.theme.colors.white)};
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

const ButtonWrapper = styled.div`
    position: relative;
    width: 90%;
    min-height: 8rem;
    border-top: .3rem solid ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
    margin-top: 3rem;
`

const NoBlogContent = styled.p`
    text-align: center;
    font-size: ${(props) => props.theme.fontSize_default.h4};
    place-self: center;
`

const BlogPageContent = ({ posts, pageNum, totalPages, isChildLoaded }) => {

    const [isClicked, setIsClicked] = useState(false);
    
    return (
        <BlogContentWrapper>
            <H1 color="blue" padding="1rem">Thoughts</H1>
            { 
                totalPages != 0 && (
                    <>
                        <BlogContent>
                            <BlogList>
                                {
                                    posts.posts.map(post => (
                                        <BlogPostItem key={post.sys.id} _key={post.sys.id} post={post}/>
                                    ))
                                }
                            </BlogList>
                        </BlogContent>
                        <ButtonWrapper> 
                            <BlogNextPrevButton _next pageNum={pageNum} totalPages={totalPages} setIsClicked={setIsClicked}/>
                            <BlogNextPrevButton _prev pageNum={pageNum} totalPages={totalPages} setIsClicked={setIsClicked}/>
                        </ButtonWrapper>
                    </>
                ) 
                || totalPages == 0 && (
                    <NoBlogContent>
                        No posts yet!<br/>But check back soon...<br/> 🔥
                    </NoBlogContent>
                )
            }
        </BlogContentWrapper>
    );
}

export default BlogPageContent;