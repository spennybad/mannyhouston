import NavBar from './navigation/NavBar';
import Credit from './credit/Credit';

import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";

const Layout = ( {children, setIsChildLoaded, isChildLoaded} ) => {
    
    // Once the new child is loaded, Children gets updated meaning it is safe to
    // set the isChildLoadedState back to false, preparing it for the next route
    // change.
    useEffect(() => {
        setIsChildLoaded(false);
    }, [children])

    return (
        <>
            <NavBar isChildLoaded={isChildLoaded}/>
            <AnimatePresence exitBeforeEnter>
                {children}
            </AnimatePresence>
        </>
    );
}

export default Layout;