import React from 'react';

//IMAGES
import hero1 from '../../assets/images/hero-mobile1.jpg';
import hero2 from '../../assets/images/hero-tablet.jpg';

const HeroImage = ({ isTablet, isDesktop }) => {

    const heroImage = isDesktop
        ? <img className='w-full mb-5 h-full object-cover object-center' src={hero1} alt="nike shoes" />
        : isTablet
            ? <img className='w-full mb-5 h-full object-cover object-center' src={hero2} alt="nike shoes" />
            : <img className='w-full mb-5' src={hero1} alt="nike shoes" />


    return (
        <div className='w-full lg:w-2/3 md:h-[75vh] lg:h-[90vh]'>
            {heroImage}
        </div>
    );
}

export default HeroImage;