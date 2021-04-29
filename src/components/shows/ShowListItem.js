import Link from 'next/link';
import styled from 'styled-components';

import media from '../MediaQueries';

const ShowItem = styled.div`
    display: grid;
    
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;

    padding: 1rem;

    background-color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    white-space: nowrap;

    & > h4 {
        font-size: ${(props) => props.theme.fontSize_default.h4};
    }

    & > p {
        font-size: ${(props) => props.theme.fontSize_default.p};    
    }

`

const ShowListItem = ({ show }) => {

    const { showVenuName, showDate, showStartTime } = show.fields;

    return (
        <ShowItem>
            <h4>{showVenuName}</h4>
            <p>{showDate}</p>
            <p>{showStartTime}</p>
        </ShowItem>
    );
}

export default ShowListItem;