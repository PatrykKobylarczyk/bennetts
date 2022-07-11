import React from 'react';
import { useMediaQuery } from 'react-responsive'

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {

  const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' })

  return (
    <div className="app w-full">
      <Header
        isTablet={isTablet}
        isDesktop={isDesktop}
      />
      <Main
        isTablet={isTablet}
        isDesktop={isDesktop}
      />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
