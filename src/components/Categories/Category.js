import React from 'react';

import Button from '../Buttons/Button'

const Category = ({ image, name }) => {
    return (
        <>
            <div className='gradient w-full h-80 lg:h-[70vh] relative mt-5'>
                <img src={image} alt={name} className='absolute top-0 left-0 w-full h-full object-cover -z-10' />
                <h2 className='absolute left-5 bottom-20 text-lg font-semibold text-white'>{name}</h2>
                <Button
                    name='Shop now'
                    styles={'w-2/5 mb-12 text-black bg-white absolute left-5 -bottom-4'}
                />
            </div>
        </>
    );
}

export default Category;