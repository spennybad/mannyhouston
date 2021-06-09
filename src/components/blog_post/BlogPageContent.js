import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Router, useRouter } from 'next/router';

import H1 from '../comps/h1';
import Slider from '../comps/slider';
import BlogPostItem from './BlogPostItem';
import BlogNextPrevButton from './BlogNextPrevButton';
import { AnimatePresence, motion } from 'framer-motion';
import { route } from 'next/dist/next-server/server/router';

const BlogContentWrapper = styled(motion.div)`
    position: relative;

    display: grid;

    grid-template-rows: max-content auto;

    justify-items: center;
    
    width: 100%;
    height: 100%;
    min-height: 100vh;

    overflow: hidden;

    background-image: linear-gradient(to bottom right, ${(props) => props.theme.colors.light_grey}, ${(props) => props.theme.colors.black});
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

const blogListAnimation = {
    initial: {
        y: "200%"
    },
    animate: {
        y: 0,
        transition: {
            duration: .25
        }
    },
    exit: {
        y: "200%",
        transition: {
            duration: .5
        }
    }
}

const BlogPageContent = ({ posts, pageNum, totalPages }) => {

    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();

    console.log(router);

    const getUniqueKey = () => {
        if (router.asPath == "/blog") {
            return 0;
        } else {
            return parseInt(router.query.page);
        }
    }

    return (
        <BlogContentWrapper>
            <H1>Thoughts</H1>
                <BlogContent>
                    <AnimatePresence exitBeforeEnter>
                        <BlogList 
                            key={getUniqueKey()}
                            variants={ blogListAnimation } 
                            initial="initial" 
                            animate="animate"
                            exit="exit"
                        >
                            {
                                posts.posts.map(post => (
                                    <BlogPostItem key={post.sys.id} _key={post.sys.id} post={post} setIsClicked={setIsClicked}/>
                                ))
                            }
                        </BlogList>
                    </AnimatePresence>
                    <BlogNextPrevButton _next pageNum={pageNum} totalPages={totalPages} />
                    <BlogNextPrevButton _prev pageNum={pageNum} totalPages={totalPages} />
                </BlogContent>
            <Slider isClicked={isClicked} position="right" />
        </BlogContentWrapper>
    );
}

export default BlogPageContent;