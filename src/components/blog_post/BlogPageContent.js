import styled from 'styled-components';
import { useState } from 'react';

import H2 from '../comps/h2';
import Slider from '../comps/slider';
import BlogPostItem from './BlogPostItem';
import BlogNextPrevButton from './BlogNextPrevButton';

const BlogContent = styled.div`
    position: relative;
    
    width: 100%;
    height: 100%;

    justify-self: center;

    display: grid;
    grid-template-rows: 15% 85%;

    justify-items: center;

    z-index: 1;

    padding-top: 4rem;

`

const BlogList = styled.ul`
    position: relative;

    display: grid;
    grid-template-rows: repeat(4, 21.25%);
    grid-gap: 2rem;

    width: 90%;
    height: 100%;
`

const BlogContentWrapper = styled.div`
    position: relative;
    
    width: 100%;
    height: 100%;

    background-image: linear-gradient(to bottom right, ${(props) => props.theme.colors.light_grey}, ${(props) => props.theme.colors.transBlack_75});
    z-index: 100;
`

const BlogItemContent = ({posts, pageNum, totalPages}) => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <BlogContentWrapper>
            <BlogContent>
                <H2 styling="blog">Thoughts</H2>
                <BlogList>
                    {   
                        posts.posts.map(post => (
                            <BlogPostItem key={post.sys.id} post={post} setIsClicked={setIsClicked} />
                        ))
                    }
                    <BlogNextPrevButton _next pageNum={ pageNum } totalPages={ totalPages }/>
                    <BlogNextPrevButton _prev pageNum={ pageNum } totalPages={ totalPages }/>
                </BlogList>
                <Slider isClicked={isClicked} position="right" />
            </BlogContent>
        </BlogContentWrapper>
    );
}
 
export default BlogItemContent;