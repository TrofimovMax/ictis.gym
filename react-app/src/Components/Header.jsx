import { Link } from 'react-router-dom';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";

import logo from '../img/logo-sfedu.png';

function Header() {
    return (
        <>
            {/* Header Section Begin */}
            <header className="header-section header-normal">
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
                                    <li><Link to="/"> Главная </Link></li>
                                    <li><Link className="active" to="/about"> О нас </Link></li>
                                    <li><Link to="/schedule"> Расписание </Link></li>
                                    <li><Link to="/news"> Новости </Link></li>
                                    <li><Link to="/contacts"> Контакты </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </header>
            {/* Header End */}
        </>
    )
}

export { Header };