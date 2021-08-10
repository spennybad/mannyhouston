import styled from 'styled-components';

const StyledImage = styled.img`
    position: fixed;

    object-fit: cover;
    object-position: center;

    z-index: 0;

    width: 100%;
    height: 100%;
    overflow: hidden;
`

const BlogBackground = () => {
    return (
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
    );
}
 
export default BlogBackground;