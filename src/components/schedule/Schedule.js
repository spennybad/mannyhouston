import styled from 'styled-components';
import Image from 'next/image';

import ScheduleListItem from './ScheduleListItem';
import H2 from '../comps/h2';
import Section from '../comps/section';


/*

    TODO:
        - Change section name to Schedule.
        - Support multiple content types:
            - Live performances.
            - EP/Ablum Drops.
            - Zoom schedule.
            - ETC...
        - Add scroll functionalitty for item overflow.

*/


const ScheduleContent = styled.div`

    display: grid;

    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;

    & > :nth-child(2) {
        position: relative;
    }  

`

const ScheduleList = styled.ul`
    
    & > :not(:last-child) {
        margin-bottom: 2rem;
    } 
`

const Schedule = ({ schedule }) => {

    return (
        <Section boxShadow="inset-top" backgroundColor="green-gradient">
            <ScheduleContent>
                <H2 styling={ "schedule" }>schedule</H2>
                <ScheduleList>
                    {
                        schedule.slice(0).reverse().map(schedule => (
                            <ScheduleListItem key={ schedule.sys.id } schedule={ schedule }/>
                        ))
                    }
                </ScheduleList>
            </ScheduleContent>
        </Section>
    );
}
 
export default Schedule;