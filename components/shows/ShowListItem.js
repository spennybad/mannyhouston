import styles from './show_list.module.scss';
import Link from 'next/link';


const ShowListItem = ({ show }) => {

    const { showVenuName, showDate, showStartTime } = show.fields;

    return (
        <div className={styles.show_list_item}>
            <h4 className={styles.show_list_item__heading}>{showVenuName}</h4>
            <p className={styles.show_list_item__start_date}>{showDate}</p>
            <p className={styles.show_list_item__show_start_time}>{showStartTime}</p>
        </div>
    );
}

export default ShowListItem;