import React from 'react';

import { categories } from '../Data/Data';
import { AiOutlinePlus } from 'react-icons/ai';


const Footer = () => {

    const categoryLinks = categories.map(category => <li key={category.id} className='text-xl mb-5 lg:mb-7 xl:mb-9 lg:text-2xl 2xl:text-3xl'><a href=''>{category.name}</a></li>)

    return (
        <>
            <section className='mt-[12rem] lg:mt-[20rem] xl:mt-[25rem] mb-12 px-5 '>
                <ul >
                    {categoryLinks}
                </ul>
            </section>
            <section className='bg-[#1f1f1f] w-full h-64 p-5'>
                <ul className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full uppercase text-white font-semibold lg:text-lg xl:text-xl flex flex-col justify-around'>
                    <li className='flex justify-between'><h2>help</h2><AiOutlinePlus/></li>
                    <li className='flex justify-between'><h2>shipping</h2><AiOutlinePlus/></li>
                    <li className='flex justify-between'><h2>customer service</h2><AiOutlinePlus/></li>
                    <li className='flex justify-between'><h2>contacts</h2><AiOutlinePlus/></li>
                </ul>
            </section>
        </>
    );
}

export default Footer;