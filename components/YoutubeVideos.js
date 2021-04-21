

export const getServerSideProps = async () => {
    const res = await fetch(`${YOUTUBE_VIDEO_ITEMS_API}?key=${process.env.YOUTUBE_API_KEY}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

const YoutubeVideos = ({data}) => {

    console.log(data);

    return (
        <div>tests</div>
    );
}
 
export default YoutubeVideos;