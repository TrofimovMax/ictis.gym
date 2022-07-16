import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../constants';
import './Header.css';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";

import logo from './img/logo-sfedu.png';

function Header({ headerStyle }) {
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
        <>
            {/* Header Section Begin */}
            <header className={headerStyle}>
                <div className="container-fluid">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="top-social d-flex flex-row-reverse bd-highlight">
                    <div className="p-2 bd-highlight">
                            <div className="flex flex-fixed">
                                {authToken ? (
                                    <Link
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem(AUTH_TOKEN);
                                        navigate(`/`);
                                    }}
                                    className="ml1 no-underline black"
                                >
                                    Выйти
                                </Link>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="ml1 no-underline black"
                                    >
                                        Войти
                                    </Link>
                                )}
                            </div>
                        </div>
                        <a className="p-2 bd-highlight" href="https://vk.com/club101308251"><FontAwesomeIcon icon={faVk} /></a>
                        <a className="p-2 bd-highlight" href="https://www.instagram.com/ssc_sfedu/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <div className="container">
                        <div className="nav-menu">
                            <nav className="mainmenu mobile-menu">
                                <ul>
                                    <li><Link to="/"> Главная </Link></li>
                                    <li><Link className="active" to="/about"> О нас </Link></li>
                                    <li><Link to="/schedule"> Запись </Link></li>
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