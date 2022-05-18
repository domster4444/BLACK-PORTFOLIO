import React, { ReactElement, FC } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: FC = (): ReactElement => {
  return (
    <div>
      <main>
        <Toolbar />
        <Home />
        <Footer />
      </main>
    </div>
  );
};

export default App;

