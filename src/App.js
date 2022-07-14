import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

//COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import InProgress from './components/Pages/InProgress';
import ErrorPage from './components/Pages/ErrorPage';

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' })

  return (
    <Router>
      <div className={`w-full ${menuActive && 'overflow-hidden'}`}>
        <Header
          isTablet={isTablet}
          isDesktop={isDesktop}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
        <Routes>
          <Route exact path={'bennetts/'} element={<Home isTablet={isTablet} isDesktop={isDesktop} />} />
          <Route path={'bennetts/product'} element={<Product />} />
          <Route path={'bennetts/inprogress'} element={<InProgress />} />
          <Route path={'bennetts/*'} element={<ErrorPage />} />
        </Routes>
        <Footer isDesktop={isDesktop} />
      </div>
    </Router>
  );
}

export default App;
