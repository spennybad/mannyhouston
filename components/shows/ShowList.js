import styles from './show_list.module.scss';

import ShowListItem from './ShowListItem';

const ShowList = ({ shows }) => {

    return (
        <div className={ styles.show_list }>
            <ul className={styles.show_list__list}>
                {
                    shows.slice(0).reverse().map(show => (
                        <ShowListItem key={ show.sys.id } show={ show }/>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default ShowList;