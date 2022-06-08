import React, { ReactElement, FC } from 'react';
import './App.css';

import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import CaseStudy from './pages/CaseStudy';
import ScrollToTop from 'react-scroll-to-top';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App: FC = (): ReactElement => {
  return (
    <>
      <ScrollToTop smooth />
      <main>
        <Toolbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/footer" element={<CaseStudy />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
};

export default App;

