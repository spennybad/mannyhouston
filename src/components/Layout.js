import NavBar from './navigation/NavBar'

const Layout = ( {children} ) => {
    return (
        <div className="content">
            <NavBar />
            { children }
        </div>
    );
}
 
export default Layout;