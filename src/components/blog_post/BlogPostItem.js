import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Image from 'next/image'

import media from '../MediaQueries';
import RichTextParser from '../../utils/RichTextParser';

const BlogItem = styled(motion.li)`
    position: relative;

    width: 100%;
    height: max-content;

    margin-bottom: 3rem;

    list-style: none;

    background-color: ${(props) => props.theme.colors.white}; 

    overflow: hidden;

    & > article { 
        
        border-top: .3rem solid ${(props) => props.theme.colors.transBlack_75};
        padding-top: 3rem;

        & > a {
            display: grid;

            grid-template-rows: 1fr 100%;
            grid-template-columns: 100%;

            height: 100%;
            width: 100%;

            padding: 3rem;

            & > div {
                font-size: ${(props) => props.theme.fontSize_default.p};
            }
        }
    }

`

const BlogItemTitle = styled(motion.h3)`
    font-size: ${(props) => props.theme.fontSize_default.h2};
    color: ${(props) => props.theme.colors.black};
    width: 100%;
`

const BlogItemDesc= styled(motion.div)`
    font-size: ${(props) => props.theme.fontSize_default.p};
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

const MediaWrapperClass = ({_key, photo, children}) => (
    <MediaImageWrapper key={ _key } width={ photo.fields.file.details.image.width } height={ photo.fields.file.details.image.height }>{children}</MediaImageWrapper>
);

const BlogPostItem = ({ post, setIsClicked, _key} ) => {

    const { blogEntryTitle, blogPostContent, blogPostMedia } = post.fields;

    let media_counter = 0;

    return (
        <BlogItem key={_key}>
            <article>
                <BlogItemTitle>
                    {blogEntryTitle}
                </BlogItemTitle>
                <BlogItemDesc>
                    {RichTextParser.blogPostRenderer(blogPostContent)}
                </BlogItemDesc>
                <Media>
                    {   
                        blogPostMedia && blogPostMedia.map(photo => {
                            media_counter += 1;
                            return( 
                                <MediaWrapperClass key={photo.sys.id + "_wrapper_" + media_counter} _key={photo.sys.id + "_photo_" + media_counter} photo={ photo }>
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
            </article>
        </BlogItem>
    );
}
 
export default BlogPostItem;