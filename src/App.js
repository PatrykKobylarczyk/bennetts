import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import './App.css';

//COMPONENTS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import InProgress from './components/Pages/InProgress';
import ErrorPage from './components/Pages/ErrorPage';

//CLIENT FOR REACT-QUERY
const queryClient = new QueryClient()

const App = () => {
  const [menuActive, setMenuActive] = useState(false)

  //WORKS with minWidth, doesn't works with minDeviceWidth as in docs is.
  const isTablet = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div
          className={`w-full ${menuActive && 'overflow-hidden'}`}
          name='top'
        >
          <Header
            isTablet={isTablet}
            isDesktop={isDesktop}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
          <Routes>
            <Route
              exact
              path={'/bennetts/'}
              element={<Home isTablet={isTablet} isDesktop={isDesktop} />}
            />
            <Route
              path={'/bennetts/product'}
              element={<Product />}
            />
            <Route
              path={'/bennetts/inprogress'}
              element={<InProgress />}
            />
            <Route
              path={'/bennetts/*'}
              element={<ErrorPage />}
            />
          </Routes>
          <Footer isDesktop={isDesktop} />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
