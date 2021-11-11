# Manny Houston Personal Website 🎹

**Table of Contents**
- [Intro](#Hello!)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Challenges](#challenges)
- [Possible Improvements](#possible-improvements)

## Hello!
This project was a freelance project I took on for rapper and actor Manny Houston. Manny, with his large Instagram and Voisey following, ended up in my feed. Captivated by his rapping, I reached out to inquire if he would like to work together. To my surprise, he said yes. The resulting site is a place for Manny to interact with his fans, receive business inquiries, publish his work, and more.

## Tech Stack
- [Next JS](https://nextjs.org/)
- [Sass](https://sass-lang.com/)
- [Contentful (CMS)](https://www.contentful.com/)
- [YouTube Data API](https://developers.google.com/youtube/v3)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started
Click [here](https://www.mannyhouston.com/) to visit the site!

To run it locally, clone the repository, run "npm install" within the cloned directory, and lastly call "npm run dev" to deploy the development server. By default it should be live on http://localhost:3000/.

## Challenges
The site includes some dynamic content which presented some interesting issues to solve. Wanting to keep Manny's monthly fees to zero, I leveraged YouTube's API to provide free video hosting. Manny simply adds whatever video he wishes to publish to the website to a YouTube playlist where I pull the required information from.

The site also includes a paginated blog which supports embedded media. This blog is in its first iteration currently and will see improvements in functionality down the line including templates, embedded video, and more.

## Possible Improvements
- Finer control of site data including 'static' paragraphs through the CMS.
- Improved functionality of the Blog.
    - Blog post searching, categorizing, etc.
- For a smoother user experience move video hosting to [Mux](https://mux.com/), create platform for video content managment.

