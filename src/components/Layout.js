import NavBar from './navigation/NavBar';
import Credit from './credit/Credit';

import { AnimatePresence } from "framer-motion";

const Layout = ( {children} ) => {
    return (
        <>
            <NavBar />
            <AnimatePresence exitBeforeEnter>
                {children}
            </AnimatePresence>
        </>
    );
}

export default Layout;