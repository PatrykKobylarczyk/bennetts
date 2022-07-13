import React, { useState } from 'react';

import logo from "../../assets/images/logo.png"

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Menu from './Menu';

const Header = ({ isDesktop }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <>
            {/* MENU  */}
            <Menu isActive={isActive} setIsActive={setIsActive} />
            <nav className='w-full h-16 lg:h-24 flex items-center justify-between px-5 lg:px-16'>
                <a href="./"><img src={logo} className='w-8 lg:w-12 cursor-pointer' alt="Logo" /></a>
                {isDesktop
                    ? <DesktopMenu />
                    : <MobileMenu isActive={isActive} setIsActive={setIsActive} />
                }
            </nav>
        </>
    );
}

export default Header;