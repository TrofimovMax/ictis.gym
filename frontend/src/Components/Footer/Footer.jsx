import { Link } from 'react-router-dom';
import './Footer.css';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";

import logo from '../Header/img/logo-sfedu.png';

function Footer() {
    return (
        <>
            {/* Footer Section Begin */}
            <footer className="footer-section">
                <div className="container">
                    <div className="d-flex justify-content-around">
                        <div className="col-lg-3">
                            <div className="footer-logo-item">
                                <div className="f-logo">
                                    <Link to="/">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                                <p>
                                    Наш успех - здоровье студентов!
                                </p>
                                <div className="social-links">
                                    <h6>Связаться с нами</h6>
                                    <a href="https://vk.com/club101308251"><FontAwesomeIcon icon={faVk} /></a>
                                    <a href="https://www.instagram.com/ssc_sfedu/"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <h5>Меню</h5>
                                <ul className="workout-program">
                                    <li><Link to="/"> Главная </Link></li>
                                    <li><Link className="active" to="/about"> О нас </Link></li>
                                    <li><Link to="/schedule"> Запись </Link></li>
                                    <li><Link to="/news"> Новости </Link></li>
                                    <li><Link to="/contacts"> Контакты </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-widget">
                                <h5>Связаться с нами</h5>
                                <ul className="footer-info">
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>Телефон:</span>
                                        8(8634)37-18-82
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o"></i>
                                        <span>Почта:</span>
                                        fv@tgn.sfedu.ru
                                    </li>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <span>Адресс</span>
                                        г. Таганрог, пер. Некрасовский, 44, корпус "Д", аудитория Д-232-1А
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer End */}
        </>
    )
}

export { Footer };