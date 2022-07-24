import React from 'react';
import { NavLink } from 'react-router-dom'

//DATA
import { categories } from '../Data/Data';

//ICONS
import { FiSearch } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';

const DesktopMenu = () => {

    const menu = categories.map(category =>
        <NavLink
            to={category.path}
            key={category.id}
            className='transition ease-in-out duration-100 hover:-translate-y-[1px]'
        >{category.name}
        </NavLink>)

    const handleSubmit = () => {
        console.log('szukaj')
    }

    return (
        <div className="w-2/3 flex justify-between items-center">
            <ul className='w-1/2 flex justify-around text-md xl:text-lg'>
                {menu}
            </ul>
            <div className='flex items-center'>
                <form submit={handleSubmit} className='flex items-center px-4 h-12 w-48 xl:w-60 bg-gray-50 border-none rounded-full'>
                    <button type='submit' className='text-gray-400'><FiSearch size='22px' /></button>
                    <input type="text" className='h-full bg-transparent px-3' />
                </form>
                <div className='flex'>
                    <BsSuitHeart size='20px' className='ml-5 xl:ml-9 ' />
                    <BsBag size='20px' className='ml-5' />
                </div>
            </div>
        </div>
    );
}

export default DesktopMenu;