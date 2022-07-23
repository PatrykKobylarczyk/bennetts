import React from 'react';

const ProductVariant = ({ products, selectVariantHandler}) => {

    const chooseVariant = products.variants.map((variant, i) => {
        return (
            <button
                id={i}
                key={i}
                className='w-1/3 h-auto focus:border-[1px] focus:border-gray-400 focus:rounded-lg'
                onClick={() => selectVariantHandler(variant.id)}
            >
                <img
                    src={variant.variant.images[0]}
                    className='object-cover rounded-lg'
                    alt='Nike React Vision'
                />
            </button>
        )
    })

    return (
        <div className='flex gap-3 h-auto my-1 mx-3 lg:mx-0'>
            {chooseVariant}
            <button
                className='w-1/3 flex justify-center items-center focus:border-[1px] focus:border-gray-400 rounded-lg p-5'
            >
                <p className='text-center text-xs text-gray-500'>Choose Another product</p>
            </button>
        </div>
    );
}

export default ProductVariant;