import React, { useContext } from 'react';

//COMPONENTS
import Button from '../Buttons/Button'

const Headings = ({ isDesktop }) => {

    return (
        <>
            <div className='w-full lg:w-1/3 flex flex-col justify-center '>
                <div className='lg:p-10 flex flex-col justify-center h-full'>
                    {isDesktop && <h2 className='lg:text-[7rem]'>nike</h2>}
                    <h1 className='uppercase font-semibold text-2xl md:text-xl md:-mb-1 xl:text-xl 2xl:text-3xl'>Nike Air Force 1 '07</h1>
                    <h2 className='uppercase md:text-lg md:-mb-2 lg:mb-3 xl:text-lg 2xl:text-1xl'>men's shoe</h2>
                    <p className='mt-3 mb-8 text-sm md:text-xs md:mb-4 lg:text-sm 2xl:text-lg'>The Nike Air Force 1 '07 has lost none of its charisma. The basketball original gets a fresh look and impresses with proven details: hard-wearing stitched overlays, a clean finish and that certain something that gives you shine.</p>
                    <Button
                        styles='w-full text-white bg-black lg:mt-5'
                        name='Check it out'
                        path='/bennetts/product'
                    />
                </div>
            </div>
        </>
    );
}

export default Headings;