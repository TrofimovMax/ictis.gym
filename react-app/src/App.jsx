import { Routes, Route, Link } from 'react-router-dom';
//import styled, { css } from 'styled-components';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";


import logo from './img/logo-sfedu.png';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SchedulePage } from './pages/SchedulePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo-item">
                <div className="f-logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <p>Despite growth of the Internet over the past seven years, the use of toll-free phone numbers
                  in television advertising continues.</p>
                <div className="social-links">
                  <h6>Связаться с нами</h6>
                  <a href="https://vk.com/club101308251"><FontAwesomeIcon icon={faVk} /></a>
                  <a href="https://www.instagram.com/ssc_sfedu/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 offset-lg-1">
              <div class="footer-widget">
                <h5>Our Blog</h5>
                <div class="footer-blog">
                  <Link to="#" class="fb-item">
                    <h6>Most people who work</h6>
                    <span class="blog-time"><i class="fa fa-clock-o"></i> Jan 02, 2019</span>
                  </Link>
                  <Link to="#" class="fb-item">
                    <h6>Freelance Design Tricks How </h6>
                    <span class="blog-time"><i class="fa fa-clock-o"></i> Jan 02, 2019</span>
                  </Link>
                  <Link to="#" class="fb-item">
                    <h6>have a computer at home have had </h6>
                    <span class="blog-time"><i class="fa fa-clock-o"></i> Jan 02, 2019</span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="footer-widget">
                <h5>Program</h5>
                <ul class="workout-program">
                  <li><Link to="#">Bodybuilding</Link></li>
                  <li><Link to="#">Running</Link></li>
                  <li><Link to="#">Streching</Link></li>
                  <li><Link to="#">Weight Loss</Link></li>
                  <li><Link to="#">Gym Fitness</Link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-widget">
                <h5>Получить информацию</h5>
                <ul class="footer-info">
                  <li>
                    <i class="fa fa-phone"></i>
                    <span>Телефон:</span>
                    8(8634)37-18-82
                  </li>
                  <li>
                    <i class="fa fa-envelope-o"></i>
                    <span>Почта:</span>
                    fv@tgn.sfedu.ru
                  </li>
                  <li>
                    <i class="fa fa-map-marker"></i>
                    <span>Адресс</span>
                    г. Таганрог, пер. Некрасовский, 44, корпус "Д", аудитория Д-232-1А
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
