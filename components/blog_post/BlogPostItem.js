import styles from './blog_item.module.scss';
import Link from 'next/link';

const BlogPostItem = ({post}) => {

    const { blogEntryTitle, slug } = post.fields;
    
    return (
        <div className={styles.blog_list_item}>
            <h3 className={styles.blog_list_item__title}>{blogEntryTitle}</h3>
            <div className={styles.blog_list_item__button}><Link href={`/blog/posts/${slug}`}><a>View Blog</a></Link></div>
        </div>
    );
}
 
export default BlogPostItem;