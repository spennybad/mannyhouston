import styled from 'styled-components';
import Image from 'next/image';

import ShowListItem from './ShowListItem';
import H2 from '../comps/h2';


/*

    TODO:
        - Change section name to Schedule.
        - Support multiple content types:
            - Live performances.
            - EP/Ablum Drops.
            - Zoom Shows.
            - ETC...
        - Add scroll functionalitty for item overflow.

*/


const ShowsContent = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${(props) => props.theme.colors.black};

    & > :nth-child(2) {
        position: relative;
        grid-area: 2 / 1 / 3 / 2;
    }  

`

const ShowsList = styled.ul`
    grid-area: 2 / 2 / 3 / 4;
    
    & > :not(:last-child) {
        margin-bottom: 2rem;
    } 
`

const ShowsImageWrapper = styled.div`
    width: 50rem;
    position: absolute;

    bottom: 0;
    left: -9rem;

`

const Section = styled.section`
    position: relative;
    background-color: ${(props) => props.theme.colors.black};
`

const ShowList = ({ shows }) => {

    return (
        <Section>
            <ShowsImageWrapper>
                        <Image
                            src="/imgs/photoshop/manny-cut-out/manny-cut-out.png"
                            width={1572}
                            height={2979}
                            alt="Colorful Manny Houston cut out."
                        />
            </ShowsImageWrapper>
            <ShowsContent>
                <H2 styling={ "shows" }>Shows</H2>
                <ShowsList>
                    {
                        shows.slice(0).reverse().map(show => (
                            <ShowListItem key={ show.sys.id } show={ show }/>
                        ))
                    }
                </ShowsList>
            </ShowsContent>
        </Section>
    );
}
 
export default ShowList;