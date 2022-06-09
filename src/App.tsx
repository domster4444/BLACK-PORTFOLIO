import React, { ReactElement, FC, useEffect } from 'react';
import './App.css';

import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import CaseStudy from './pages/CaseStudy';
import ScrollToTop from 'react-scroll-to-top';
import Home from './pages/Home';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Routes, Route } from 'react-router-loading';

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
            <Route path="/casestudy/:id" element={<CaseStudy />} loading />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
};

export default App;

