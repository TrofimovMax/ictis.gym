import { Outlet, useLocation } from 'react-router-dom';


import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

function Layout() {
    const location = useLocation();
    let headerStyle = '';
    if(location.pathname === '/') {
        headerStyle = 'header-section';
    } else {
        headerStyle = 'header-section header-normal';
    }
    return (
        <>
            <>
                <Header 
                headerStyle = {headerStyle}
                />
            </>
            <Outlet />
            <Footer />
        </>

    )
}

export { Layout };