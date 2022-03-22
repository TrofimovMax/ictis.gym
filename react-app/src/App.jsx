import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SchedulePage } from './pages/SchedulePage';

function App() {
  return (
    <>
      <header className="App-header">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/shedule"> Schedule </Link>
        <Link to="/news"> News </Link>
        <Link to="/contacts"> Contacts </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
