import React, { useState } from 'react';

import hero from '../../assets/images/nike1.jpg'
import Button from '../Buttons/Button'
import Category from '../Categories/Category';

import sportswearImg from '../../assets/images/nike2.jpg'
import footwearImg from '../../assets/images/nike3.jpg'
import outfitImg from '../../assets/images/nike4.jpg'

const categories = [
    {
        name: 'Sportswear',
        image: sportswearImg
    },
    {
        name: 'Footswear',
        image: footwearImg
    },
    {
        name: 'Outfit',
        image: outfitImg
    },
]

const Main = () => {

    // const [categories, setCategories] = useState(CATEGORIES)

    const displayCategorySection = categories.map(category => {
        return <Category key={category.name} image={category.image} name={category.name} />
    })

    return (
        <div className="px-5">
            <section className='main pb-5'>
                <img src={hero} alt="hero image nike shoes" className='w-full mb-5' />
                <h1 className='uppercase font-semibold text-2xl'>Nike Air Force 1 '07</h1>
                <h2 className='uppercase'>men's shoe</h2>
                <p className='mt-3 mb-5 text-sm'>The Nike Air Force 1 '07 has lost none of its charisma. The basketball original gets a fresh look and impresses with proven details: hard-wearing stitched overlays, a clean finish and that certain something that gives you shine.</p>
                <Button width={'w-2/5'} name='Add to bag' />
            </section>
            <section className='categories mt-8'>
                <h3 className='text-sm opacity-50 mb-5'>Categories</h3>
                {displayCategorySection}
            </section>
        </div>
    );
}

export default Main;