import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";

//import styled, { css } from 'styled-components';
import logo from './logo.png';
import { Routes, Route, Link } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SchedulePage } from './pages/SchedulePage';

function App() {
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
                  <h6>Follow us</h6>
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
                <h5>Get Info</h5>
                <ul class="footer-info">
                  <li>
                    <i class="fa fa-phone"></i>
                    <span>Phone:</span>
                    (12) 345 6789
                  </li>
                  <li>
                    <i class="fa fa-envelope-o"></i>
                    <span>Email:</span>
                    Colorlib.info@gmail.com
                  </li>
                  <li>
                    <i class="fa fa-map-marker"></i>
                    <span>Address</span>
                    Iris Watson, Box 283 8562, NY
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
