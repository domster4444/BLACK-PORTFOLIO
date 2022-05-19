import React, { ReactElement, FC } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from 'react-scroll-to-top';

const App: FC = (): ReactElement => {
  return (
    <>
      <ScrollToTop smooth />
      <main>
        <Toolbar />
        <Home />
        <Footer />
      </main>
    </>
  );
};

export default App;

