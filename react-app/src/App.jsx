import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                  <Link to="/"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
