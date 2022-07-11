import React from 'react';

const ShoeCard = ({image, name, description}) => {
    return ( 
        <div className='w-auto mb-5 mx-2'>
            <img src={image} alt={name} />
            <h2 className='uppercase text-lg font-semibold'>{name}</h2>
            <p className='text-sm'>{description}</p>
        </div>
     );
}
 
export default ShoeCard;