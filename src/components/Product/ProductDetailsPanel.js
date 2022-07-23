import React, { useState } from 'react';

//COMPONENTS
import ProductDetails from './ProductDetails';

//ICONS
import { MdKeyboardArrowRight } from 'react-icons/md';

const ProductSizes = ({ selectedVariant, products }) => {

    const [isDetailsPanelOpen, setDetailPanelOpen] = useState(false)

    const detail = products.variants[selectedVariant].details

    return (
        <div className='w-full flex flex-col items-center border-y-[1px] border-gray-200  py-4 mt-20'>
            <div
                className='w-[160px] flex justify-between items-center cursor-pointer'
                onClick={() => setDetailPanelOpen(prev => !prev)}
            >
                <h2 className='text-sm text-gray-500 '>Product details</h2>
                <MdKeyboardArrowRight className={`text-gray-500 ${isDetailsPanelOpen ? '-rotate-90' : 'rotate-90'} `} />
            </div>
            {isDetailsPanelOpen &&
                <ProductDetails detail={detail} />
            }
        </div>
    );
}

export default ProductSizes;