import React, {useState} from 'react';
import { Spin } from 'react-burgers';
import { FiSearch } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';

const MobileMenu = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className="w-28 flex justify-between items-center">
            <FiSearch size='27px' />
            <BsBag size='27px' stroke='2px' />
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
    );
}

export default MobileMenu;