import { createClient } from 'contentful'

import Image from 'next/image';
import Skeleton from '../../../components/Skeleton';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from '../blog.module.scss';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

// Gets executed at build time.
export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blogPost' // Content id to pull from Contentful.
    })

    const paths = res.items.map(item => {
        console.log(`Build Page ${ item.fields.slug }`);
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

// Gets executed at build time for however many Paths are returned by getStaticPaths.
// Recieves 'context' as a parameter which contains the context of each page 
// returned by getStaticPaths.
export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
    })

    if (!items.length) { // If there is no items for current slug.
        return {
            redirect: {
                destination: '/',
                permanent: false // Set to false as we may have a page someday equal to the currently non-existent slug.
            }
        }
    }

    return {
        props: { post: items[0] },
        revalidate: 1
    }
}

const BlogPost = ({ post }) => {

    if (!post) return <Skeleton />

    const { blogEntryTitle, blogPostContent, blogPostMedia } = post.fields;

    return (
        <section className={styles.blog_post}>

            <h2 className={styles.blog_post__heading}>{blogEntryTitle}</h2>
            <div className={styles.blog_post__body}>{documentToReactComponents(blogPostContent)}</div>
            <div className={styles.blog_post__photo_gallery}>
                {
                    blogPostMedia.map(photo => (
                        <div key={photo.sys.id} className={photo}>
                            <Image
                                src={'https:' + photo.fields.file.url}
                                width={300}
                                height={400}
                            />
                        </div>
                    ))
                }
            </div>

        </section>
    );

}

export default BlogPost;