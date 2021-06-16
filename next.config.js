module.exports = {
    images: {
        domains: [
            'images.ctfassets.net',
            'res.cloudinary.com',
            'i.ytimg.com'
        ],
    },
    env: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
    }
}