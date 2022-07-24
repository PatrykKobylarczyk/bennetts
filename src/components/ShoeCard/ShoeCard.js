import React from 'react';
import { Link } from 'react-router-dom'

const ShoeCard = ({ image, name, description }) => {
    return (
        <div className='w-auto mb-5 mx-2'>
            <Link
                to='/bennetts/product'
            >
                <img src={image} alt={name} />
                <h2 className='uppercase text-lg font-semibold'>{name}</h2>
                <p className='text-sm'>{description}</p>
            </Link>
        </div>
    );
}

export default ShoeCard;