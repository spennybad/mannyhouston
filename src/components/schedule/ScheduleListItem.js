import Link from 'next/link';
import styled from 'styled-components';

const ScheduleItem = styled.div`
    display: grid;
    
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;

    padding: 1rem;

    color: ${(props) => props.theme.colors.white};

    background-color: ${(props) => props.theme.colors.transBlack_75};
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    white-space: nowrap;

    & > h4 {
        font-size: ${(props) => props.theme.fontSize_default.h4};
    }

    & > p {
        font-size: ${(props) => props.theme.fontSize_default.p};    
    }

`

const ScheduleListItem = ({ schedule }) => {

    const { title, startDate, startTime } = schedule.fields;

    return (
        <ScheduleItem>
            <h4>{title}</h4>
            <p>{startDate}</p>
            <p>{startTime}</p>
        </ScheduleItem>
    );
}

export default ScheduleListItem;