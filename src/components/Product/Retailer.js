import React from 'react';
import { Link } from 'react-router-dom'

const Retailer = ({ item }) => {
    return (
        <Link
            to={item.Available ? '/bennetts/retailer' : ''}
            className='w-full flex justify-between px-5 py-4 border-y-[1px] -mb-[1px] border-gray-200 cursor-pointer'
        >
            <h2 className='font-bold'>{item && item.Retailer}</h2>
            <h2>{item && item.Price}</h2>
        </Link>

    );
}

export default Retailer;