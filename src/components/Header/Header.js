import React from 'react';

//IMAGES
import logo from "../../assets/images/logo.png"

//COMPONENTS
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Menu from './Menu';

const Header = ({ isDesktop, menuActive, setMenuActive }) => {

    return (
        <>
            <Menu menuActive={menuActive} />
            <nav className='w-full h-16 lg:h-24 flex items-center justify-between px-5 lg:px-16'>
                <a href="./"><img src={logo} className='w-8 lg:w-12 cursor-pointer' alt="Logo" /></a>
                {isDesktop
                    ? <DesktopMenu />
                    : <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
                }
            </nav>
        </>
    );
}

export default Header;