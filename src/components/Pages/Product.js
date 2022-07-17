import React, { useState } from 'react';

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//COMPONENTS
import GetFetchingData from '../Data/GetFetchingData';

//ICONS
import { MdKeyboardArrowRight } from 'react-icons/md';

//DATA
import { products, sizeTable } from '../Data/Products';

//ANIMATIONS
import { motion, AnimatePresence } from "framer-motion"

const Product = () => {

    const [selectedVariant, setSelectedVariant] = useState(0)
    const [selectedSize, setSelectedSize] = useState(null)
    const [isSizePanelOpened, setIsSizePanelOpened] = useState(false)

    const selectVariantHandler = (id) => {
        setSelectedVariant(id)
    }
    const selectSizeHandler = (id) => {
        setSelectedSize(id)
    }


    //Carousel settings
    const settings = {
        className: 'w-full h-auto',
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const productCarousel = products.variants[selectedVariant].variant.images.map((image, i) => {
        return (
            <div>
                <img src={image} key={i} alt='Nike React Vision'></img>
            </div>
        )
    })



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

    const showPanel = {
        hidden: {
            height: 0,
            transition: {
                duration: 0.2,
                ease: 'linear',
                delay: 0.2
            },
        },
        show: {
            height: "auto",
            transition: {
                duration: 0.2,
                ease: 'linear'
            },
        },
    };

    const showSizes = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: 'linear'
            },
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: 'linear',
                delay: 0.2
            },
        },
    };

    const sizes = sizeTable.map((size, i) => {
        return (
            <motion.li
                id={i}
                key={i}
                className='h-8 text-xs flex justify-center items-center border-[1px] border-gray-200 rounded-lg hover:border-gray-400 hover:cursor-pointer'
                onClick={() => selectSizeHandler(size)}
                variants={showSizes}
                initial='hidden'
                animate='show'
                exit='hidden'
            >{size}
            </motion.li>
        )
    })


    return (
        <div className='w-full flex flex-col items-center my-5'>
            <div className='w-full flex flex-col justify-start px-5 my-5'>
                <p className='text-[.6rem] opacity-60 uppercase'>'footwears | women | nike | nike react vision'</p>
                <h1 className='text-2xl font-bold capitalize mt-5 '>{products.name}</h1>
                <h2 className='text-[.6rem] opacity-70 uppercase '>
                    <span className='text-[.6rem] opacity-60 lowercase font-extralight mr-1'>color: </span>
                    {products.variants[selectedVariant].variant.color}
                </h2>
            </div>
            <Slider {...settings}>
                {productCarousel}
            </Slider>
            <div className='flex gap-3 h-auto mt-1'>
                {chooseVariant}
                <button
                    className='w-1/3 flex justify-center items-center focus:border-[1px] focus:border-gray-400 rounded-lg p-5'
                >
                    <p className='text-center text-xs text-gray-500'>Choose Another product</p>
                </button>
            </div>
            <div
                className='w-full flex flex-col items-center border-y-[1px] border-gray-200  py-4 my-4'
                onClick={() => setIsSizePanelOpened(prev => !prev)}
            >

                <div className='w-[120px] flex justify-between items-center'>
                    <h2 className='text-sm text-gray-500'>Select size</h2>
                    <MdKeyboardArrowRight className='text-gray-500' />
                </div>
                <AnimatePresence>
                    {isSizePanelOpened &&
                        <motion.ul
                            className='w-full grid grid-cols-4 gap-2 mt-5 p-5'
                            variants={showPanel}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                        >
                            {sizes}
                        </motion.ul>}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Product;