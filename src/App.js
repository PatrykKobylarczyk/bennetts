import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' })

  return (
    <div className={`w-full ${menuActive && 'overflow-hidden'}`}>
      <Header
        isTablet={isTablet}
        isDesktop={isDesktop}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
      <Main
        isTablet={isTablet}
        isDesktop={isDesktop}
      />
      <Contacts isDesktop={isDesktop} />
      <Footer isDesktop={isDesktop} />
    </div>
  );
}

export default App;
