import React from 'react';

import Button from '../Buttons/Button'

const Headings = ({isTablet}) => {
    return (
        <>
            <div className='md:absolute md:w-1/3 md:bottom-16 md:right-20'>
                <h1 className='uppercase font-semibold text-2xl md:text-xl md:-mb-1 xl:text-xl 2xl:text-3xl'>Nike Air Force 1 '07</h1>
                <h2 className='uppercase md:text-lg md:-mb-2 xl:text-lg 2xl:text-1xl'>men's shoe</h2>
                <p className='mt-3 mb-8 text-sm md:text-xs md:mb-4 xl:text-sm 2xl:text-lg'>The Nike Air Force 1 '07 has lost none of its charisma. The basketball original gets a fresh look and impresses with proven details: hard-wearing stitched overlays, a clean finish and that certain something that gives you shine.</p>
                <Button style='w-full text-white bg-black ' name='Check it out' />
            </div>
            {isTablet
                    && <h2 className='text-black text-[10rem] leading-none absolute bottom-9 left-10 xl:text-[15rem] 2xl:text-[20rem]'>nike</h2>}
        </>
    );
}

export default Headings;