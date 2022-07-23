import React from 'react';

const ProductDetails = ({detail}) => {
    return ( 
        <div className='w-full p-5'>
                    <h2 className=' text-lg font-bold my-3'>{detail.title}</h2>
                    <p>{detail.description}</p>
                    <ul className='my-5'>
                        <li className='flex justify-between'><p>Brand: </p><strong className='ml-2'>{detail.brand}</strong></li>
                        <li className='flex justify-between'><p>Collection: </p><strong className='ml-2'>{detail.collection}</strong></li>
                        <li className='flex justify-between'><p>Gender: </p> <strong className='ml-2'>{detail.gender}</strong></li>
                        <li className='flex justify-between'><p>Technology: </p> <strong className='ml-2'>{detail.technology}</strong></li>
                    </ul>

                </div>
     );
}
 
export default ProductDetails;