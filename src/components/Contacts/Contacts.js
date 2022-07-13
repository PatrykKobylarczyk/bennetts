import React from 'react';


import './Contacts.css'
import Video from '../Video/Video'
import SocialMedia from './SocialMedia';
import Links from './Links';

const Contacts = ({ isDesktop }) => {

    return (
        <div className='flex flex-col items-center mt-24 mb-16 md lg:h-auto'>
            {!isDesktop && <SocialMedia />}
            <div className="newsletter w-full text-black lg:flex">
                <div className={`${isDesktop ? 'mt-0' : 'mt-[7rem]'} w-full lg:w-1/2`}>
                    <Video isDesktop={isDesktop} />
                </div>
                <div className='lg:w-1/2 lg:px-16  flex flex-col justify-around items-center'>
                    {isDesktop && <SocialMedia />}
                    <div className={`${isDesktop ? 'mt-0' : 'mt-[3rem]'} w-full`}>
                        <div className='ml-5'>
                            <p className='md:text-base lg:text-lg'>Newsletter Signup</p>
                            <h2 className='text-lg lg:text-xl xl:text-2xl font-semibold leading-5'>LET’S STAY IN TOUCH</h2>
                        </div>
                        <form className='px-5 lg:px-0 w-11/12 border-b-2 border-gray-200 flex justify-between py-3 mt-6 lg:mt-7 xl:mt-8 mx-auto'>
                            <input type='email' placeholder='EMAIL' className='md:text-sm lg:text-base w-full bg-transparent'></input>
                            <button type='submit' className='text-gray-400 md:text-sm lg:text-base'>OK</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <Links />
            </div>
        </div>
    );
}

export default Contacts;