import React, { useState } from 'react';
import { Spin } from 'react-burgers';
import { FiSearch } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';

import logo from "../../assets/images/logo.png"

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <nav className='w-full h-16 flex items-center justify-between px-4'>
            <a href="./"><img src={logo} className='w-8 cursor-pointer' alt="Logo" /></a>
            <div className="w-28 flex justify-between items-center">
                <BsBag size='27px'stroke='2px'/>
                <FiSearch size='27px'/>
                <Spin
                    onClick={() => setIsActive(prev => !prev)}
                    active={isActive}
                    width={26}
                    lineHeight={2}
                    lineSpacing={8}
                    borderRadius={2}
                    padding='10px 0 0 0'
                />
            </div>
        </nav>
    );
}

export default Header;