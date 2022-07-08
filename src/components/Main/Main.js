import React from 'react';

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//COMPONENTS
import Button from '../Buttons/Button'
import Category from '../Categories/Category';
import ShoeCard from '../ShoeCard/ShoeCard';

//IMAGES
import hero from '../../assets/images/nike1.jpg'
import shopnow from '../../assets/images/nike5.jpg'

//DATA
import { categories, cards } from '../Data/Data';


const Main = () => {

    const displayCategorySection = categories.map(category => {
        return <Category key={category.name} image={category.image} name={category.name} />
    })

    const displayCarouselSection = cards.map(card => <ShoeCard key={card.id} image={card.image} name={card.name} description={card.description} />)

    //Carousel settings
    const settings = {
        className: 'w-full',
        infinite: true,
        centerMode: true,
        centerPadding: "25px",
        speed: 300,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="w-full">
            <section className='main pb-5 px-5'>
                <img src={hero} alt="hero nike shoes" className='w-full mb-5' />
                <h1 className='uppercase font-semibold text-2xl'>Nike Air Force 1 '07</h1>
                <h2 className='uppercase'>men's shoe</h2>
                <p className='mt-3 mb-5 text-sm'>The Nike Air Force 1 '07 has lost none of its charisma. The basketball original gets a fresh look and impresses with proven details: hard-wearing stitched overlays, a clean finish and that certain something that gives you shine.</p>
                <Button width={'w-2/5'} name='Add to bag' />
            </section>
            <section className='categories my-8 px-5'>
                <h3 className='text-sm opacity-50 mb-5'>Categories</h3>
                {displayCategorySection}
            </section>
            <section className="carouselSection max-w-full px-5">
                <h3 className='mb-5 text-lg font-semibold'>Most popular</h3>
                <Slider {...settings}>
                    {displayCarouselSection}
                </Slider>
            </section>
            <section className='my-12'>
                <div className="px-5">
                    <h2 className='uppercase font-semibold text-xl mb-3'>live comfortably</h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit purus sit blandit consequat eu.</p>
                </div>
                <div className="w-full relative text-right">
                    <img className='mt-5' src={shopnow} alt="shop now" />
                    <div className='w-full absolute bottom-10 right-10'>
                        <Button width={'w-2/5'} name='Shop now' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;