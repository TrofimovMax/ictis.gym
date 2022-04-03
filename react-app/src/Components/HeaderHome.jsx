import {Link} from 'react-router-dom';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";

import logo from '../img/logo-sfedu.png';

function HeaderHome() {
    return (
        <>
            <header className="header-section">
                <div className="container-fluid">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="top-social">
                        <a href="https://vk.com/club101308251"><FontAwesomeIcon icon={faVk} /></a>
                        <a href="https://www.instagram.com/ssc_sfedu/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <div className="container">
                        <div className="nav-menu">
                            <nav className="mainmenu mobile-menu">
                                <ul>
                                    <li><Link className="active" to="/"> Home </Link></li>
                                    <li><Link to="/about"> About </Link></li>
                                    <li><Link to="/schedule"> Schedule </Link></li>
                                    <li><Link to="/news"> News </Link></li>
                                    <li><Link to="/contacts"> Contacts </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mobile-menu-wrap">

                    </div>
                </div>
            </header>
        </>
    );
}

export { HeaderHome };