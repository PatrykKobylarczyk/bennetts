import React from 'react';

import { categories } from '../Data/Data';

import { FiSearch } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';

const DesktopMenu = () => {

    const menu = categories.map(category => <li key={category.id} className='cursor-pointer'>{category.name}</li>)

    const handleSubmit = () => {
        console.log('szukaj')
    }

    return (
        <div className="w-2/3 flex justify-between items-center">
            <ul className='w-1/2 flex justify-around text-md xl:text-lg'>
                <li><strong>Home</strong></li>
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