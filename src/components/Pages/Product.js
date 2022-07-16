import React, { useState } from 'react';

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//COMPONENTS
import GetFetchingData from '../Data/GetFetchingData';

//DATA
import { products, sizeTable } from '../Data/Products';

const Product = () => {

    const [selectedVariant, setSelectedVariant] = useState(0)

    const selectVariantHandler = (id) => {
        setSelectedVariant(id)
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

    const sizes = sizeTable.map((size, i) => {
        <option
            key={i}
            value={size}
            className='w-1/3 h-20 border-[1px] border-gray-400 rounded-lg'
        >{size}
        </option>
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
                <button className='w-1/3 flex justify-center items-center focus:border-[1px] focus:border-gray-400 rounded-lg'><p className='text-center '>Choose Another product</p></button>
            </div>
            <div>
                <select>
                    <option value="">Select size</option>
                    {sizes}
                </select>
            </div>
        </div>
    );
}

export default Product;