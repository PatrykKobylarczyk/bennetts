import React from 'react';
import Slider from "react-slick";

const ProductCarousel = ({ selectedVariant, products }) => {

    //Carousel settings
    const settings = {
        className: 'w-full h-auto ',
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const productCarousel = products.variants[selectedVariant].variant.images.map((image, i) => {
        return (
            <div key={i} className='w-full h-full'>
                <img
                    src={image}
                    alt='Nike React Vision'
                    className=' object-bottom'
                ></img>
            </div>
        )
    })

    return (
        <Slider {...settings}>
            {productCarousel}
        </Slider>
    );
}

export default ProductCarousel;