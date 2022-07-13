import React from 'react';

//COMPONENTS
import Button from '../Buttons/Button'
import Category from '../Categories/Category';
import HeroImage from './HeroImage'
import Carousel from './Carousel'

//IMAGES
import shopnow from '../../assets/images/nike5.jpg';

//DATA
import { categories } from '../Data/Data';
import Headings from './Headings';


const Main = ({ isTablet, isDesktop }) => {

    const displayCategorySection = categories.slice(1).map(category => {
        return <Category key={category.name} image={category.image} name={category.name} />
    })

    return (

        <div className="w-full lg:px-16">
            {/* HERO SECTION */}
            <section className='w-full h-auto lg:flex main pb-5 px-5 lg:px-0 md:relative '>
                <HeroImage isTablet={isTablet} isDesktop={isDesktop} />
                <Headings isDesktop={isDesktop} />
            </section>

            {/* CATEGORIES SECTION */}
            <section className='my-10 px-5 lg:mt-28 lg:px-0'>
                <h3 className='text-sm opacity-70 mb-5 lg:text-xl'>Categories</h3>
                <div className='lg:flex lg:basis-1/3 lg:gap-4'>
                    {displayCategorySection}
                </div>
            </section>

            {/* CAROUSEL SECTION */}
            <section className="carouselSection w-auto flex flex-col mx-3 lg:mx-0">
                <h3 className='mb-5 text-lg opacity-70 mx-2 lg:mx-0'>Most popular</h3>
                <Carousel />
            </section>

            {/* SHOP NOW SECTION */}
            <section className='my-12'>
                <div className="px-5">
                    <h2 className='uppercase font-semibold text-xl mb-3'>live comfortably</h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit purus sit blandit consequat eu.</p>
                </div>
                <div className="w-full relative text-right gradient mt-5">
                    <div className='w-full h-96 lg:h-[40rem] relative '>
                        <img className='w-full h-full absolute top-0 left-0 object-cover -z-10' src={shopnow} alt="shop now" />
                    </div>
                    <div className='w-full absolute bottom-10 right-10 md:right-20'>
                        <Button styles='w-2/5 text-black bg-white lg:w-1/4' name='Shop now' />
                    </div>
                </div>
                {isDesktop &&
                    <div className='w-full h-40 flex flex-col justify-center items-center mt-20'>
                        <h2 className='text-2xl font-bold uppercase'>never give up</h2>
                        <p className='text-lg'>Big goals. Unbridled ambition. Impressive skills.</p>
                    </div>
                }
            </section>
        </div>
    );
}

export default Main;