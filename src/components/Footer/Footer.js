import React from 'react';

import { categories } from '../Data/Data';
import { AiOutlinePlus } from 'react-icons/ai';


const Footer = () => {

    const categoryLinks = categories.map(category => <li className='text-xl mb-5'><a href=''>{category.name}</a></li>)

    return (
        <>
            <section className='mt-48 mb-12 px-5'>
                <ul >
                    {categoryLinks}
                </ul>
            </section>
            <section className='bg-[#1f1f1f] w-full h-64 p-5'>
                <ul className='w-full h-full uppercase text-white font-semibold flex flex-col justify-around'>
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