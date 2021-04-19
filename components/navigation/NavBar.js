import Link from 'next/Link';
import styles from './navigation.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__links}>
                <li className={styles.navigation__link}><Link href="/"><a>Home</a></Link></li>
                <li className={styles.navigation__link}><Link href="/blog"><a>Blog Posts</a></Link></li>
            </ul>
        </nav>    
    );
}
 
export default Navbar;