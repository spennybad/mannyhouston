import { createClient } from 'contentful';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY
});

export default class ContentfulApi {

    static async getAllBlogPosts() {

        const res = await client.getEntries({
            content_type: 'blogPost' // Content id to pull from Contentful.
        });

        return {
            posts: {
                all: res.items
            } 
        };

    }
    
    static async getPagePosts(page) {
        const res = await client.getEntries({
            content_type: 'blogPost', // Content id to pull from Contentful.
            limit: 4,
            skip: page*4
        });

        return {
            posts: {
                posts: res.items
            } 
        };
    }

    static async getTotalPostsNumber() {
        const res = await client.getEntries({
            content_type: 'blogPost', // Content id to pull from Contentful.
        });

        const totalPosts = res
          ? res.total
          : 0;

        return totalPosts;
      }

}