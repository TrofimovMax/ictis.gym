import { Routes, Route } from 'react-router-dom';
//import styled, { css } from 'styled-components';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from './Components/Layout';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SchedulePage } from './pages/SchedulePage';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
