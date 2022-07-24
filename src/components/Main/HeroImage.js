import React from 'react';

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//IMAGES
import hero1mb from '../../assets/images/hero1.webp';
import hero1dt from '../../assets/images/hero1dt.webp';
import hero2mb from '../../assets/images/hero2.webp';
import hero2dt from '../../assets/images/hero2dt.webp';
import hero3mb from '../../assets/images/hero3.webp';
import hero3dt from '../../assets/images/hero3dt.webp';
import hero4mb from '../../assets/images/hero4.webp';
import hero4dt from '../../assets/images/hero4dt.webp';


const HeroImage = ({ isDesktop }) => {

    const heroImagesMobile = [hero1mb, hero2mb, hero3mb, hero4mb]
    const heroImagesDesktop = [hero1dt, hero2dt, hero3dt, hero4dt]
    const heroImageMobile = heroImagesMobile.map(image => <img className='w-full mb-5 h-full object-cover object-center' src={image} alt="nike shoes"></img>)
    const heroImageDesktop = heroImagesDesktop.map(image => <img className='w-full mb-5 h-full object-cover object-center' src={image} alt="nike shoes"></img>)

    const settings = {
        className: 'flex',
        infinite: true,
        dots: isDesktop ? true : false,
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <div className='w-full lg:w-2/3 lg:h-[90vh]'>
            <Slider {...settings}>
                {isDesktop ? heroImageDesktop : heroImageMobile}
            </Slider>
        </div>
    );
}

export default HeroImage;