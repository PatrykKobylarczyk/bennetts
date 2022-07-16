import React from 'react';

import logo from "../../assets/images/logo.png"

import DesktopMenu from './DesktopMenu';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Header = ({ isDesktop, menuActive, setMenuActive }) => {

    return (
        <nav className='w-full h-16 lg:h-24 flex items-center justify-between px-5 lg:px-16'>
            <a href="./"><img src={logo} className='w-8 lg:w-12 cursor-pointer' alt="Logo" /></a>
            {isDesktop
                ? <DesktopMenu />
                : <MobileMenu
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
            }
            <Menu menuActive={menuActive}/>
        </nav>
    );
}

export default Header;