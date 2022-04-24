import { Outlet, useLocation } from 'react-router-dom';


import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

function Layout() {
    const location = useLocation();
    let headerStyle = '';
    console.log(location.pathname, headerStyle);
    if(location.pathname === '/') {
        headerStyle = 'header-section';
    } else {
        headerStyle = 'header-section header-normal';
    }
    console.log(headerStyle);
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