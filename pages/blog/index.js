// Dependencies
import { createClient } from 'contentful';

// Components
import BlogPostItem from '../../components/blog_post/BlogPostItem';

// Styles
import styles from './blog.module.scss';

export const getStaticProps = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    });

    const res_blog_posts = await client.getEntries({ content_type: 'blogPost' });

    return {
        props: {
            blogPosts: res_blog_posts.items
        },
        revalidate: 1
    }
}


const Blog = ({ blogPosts }) => {
    console.log(blogPosts);
    return (
        <section className={styles.blog}>
            <h1 className={styles.blog__heading}>Blog Posts</h1>
            <ul className={styles.blog__list}>
                {
                    blogPosts.map(post => (
                        <BlogPostItem key={post.sys.id} post={post} />
                    ))
                }
            </ul>
        </section>
    );
}
 
export default Blog;