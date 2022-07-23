import React, { useState } from 'react';

//ICONS
import { MdKeyboardArrowRight } from 'react-icons/md';

//DATA
import { sizeTable } from '../Data/Products';


const ProductSizes = () => {

    const [isSizePanelOpened, setIsSizePanelOpened] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);

    const selectSizeHandler = (id) => {
        setSelectedSize(id)
    }

    const sizes = sizeTable.map((size, i) => {
        return (
            <li
                id={i}
                key={i}
                className='h-8 text-xs flex justify-center items-center border-[1px] border-gray-200 rounded-lg hover:border-gray-400 hover:cursor-pointer'
                onClick={() => selectSizeHandler(size)}
            >{size}
            </li>
        )
    })



    return (
        <div className='w-full flex flex-col items-center border-y-[1px] border-gray-200  py-4 mt-8 mb-5'>
            <div
                className='w-[120px] flex justify-between items-center cursor-pointer'
                onClick={() => setIsSizePanelOpened(prev => !prev)}
            >
                <h2 className='text-sm text-gray-500 '>Select size</h2>
                <MdKeyboardArrowRight className={`text-gray-500 ${isSizePanelOpened ? '-rotate-90' : 'rotate-90'} `} />
            </div>
            {isSizePanelOpened &&
                <ul className='w-full grid grid-cols-4 gap-2 mt-5 p-5'>
                    {sizes}
                </ul>
            }
        </div>
    );
}

export default ProductSizes;