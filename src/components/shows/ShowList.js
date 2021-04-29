import styled from 'styled-components';
import Image from 'next/image';

import ShowListItem from './ShowListItem';
import H2 from '../comps/h2';
import Section from '../comps/section';


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

    display: grid;

    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;

    background-color: ${(props) => props.theme.colors.black};

    & > :nth-child(2) {
        position: relative;
    }  

`

const ShowsList = styled.ul`
    
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