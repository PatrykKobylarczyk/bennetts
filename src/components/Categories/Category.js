import React from 'react';

import Button from '../Buttons/Button'

const Category = ({image, name}) => {
    return (
        <>
            <img src={image} alt={name} className='w-full'/>
            <h2 className='my-5'>{name}</h2>
            <Button name= 'Shop now' width='w-2/5' margin='mb-12'/>
        </>
    );
}

export default Category;