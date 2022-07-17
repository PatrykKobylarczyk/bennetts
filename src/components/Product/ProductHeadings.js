import React from 'react';

const ProductHeadings = ({ selectedVariant, products }) => {
    return (
        <div className='w-full flex flex-col justify-start px-5 my-5'>
            <p className='text-[.6rem] opacity-60 uppercase'>'footwears | women | nike | nike react vision'</p>
            <h1 className='text-2xl font-bold capitalize mt-5 '>{products.name}</h1>
            <h2 className='text-[.6rem] opacity-70 uppercase '>
                <span className='text-[.6rem] opacity-60 lowercase font-extralight mr-1'>color: </span>
                {products.variants[selectedVariant].variant.color}
            </h2>
        </div>
    );
}

export default ProductHeadings;