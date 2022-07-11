import React from 'react';

//IMAGES
import heroMobile from '../../assets/images/hero-mobile1.jpg';
import heroTablet from '../../assets/images/hero-tablet.jpg';
import heroDesktop from '../../assets/images/hero-desktop.jpg';

const HeroImage = ({ isTablet, isDesktop }) => {

    const heroImage = isDesktop
        ? <img className='w-full mb-5 absolute h-full object-cover object-top' src={heroDesktop} alt="nike shoes" />
        : isTablet
            ? <img className='w-full mb-5 absolute h-full object-cover object-center' src={heroTablet} alt="nike shoes" />
            : <img className='w-full mb-5' src={heroMobile} alt="nike shoes" />


    return (
        <div className='md:h-[75vh] lg:h-[130vh] md:relative'>
            {heroImage}
        </div>
    );
}

export default HeroImage;