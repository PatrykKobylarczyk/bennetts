import React from 'react';
import { Link } from 'react-router-dom'

const Retailer = ({ item, selectedSize }) => {

    const retailersSizesArray = (item && item.Sizes) && item.Sizes.trim().split(' ').filter(el => el !== '').map(el => Number(el))
  
    return (
        <Link
            to={item.Available ? '/bennetts/retailer' : ''}
            className='w-full flex justify-between px-5 py-4 border-y-[1px] -mb-[1px] border-gray-200 cursor-pointer'
        >
            <h2 className='font-bold'>{item && item.Retailer}</h2>
            <h2>{(item && selectedSize) ? (retailersSizesArray && retailersSizesArray.includes(selectedSize) ? item.Price : 'out of store') : item.Price}</h2>
        </Link>

    );
}

export default Retailer;