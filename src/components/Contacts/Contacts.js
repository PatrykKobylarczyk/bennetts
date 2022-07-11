import React from 'react';

import logo from "../../assets/images/logo.png"
import newsletterBg from "../../assets/images/newsletterBg.webp"
import { ImArrowUpRight2 } from 'react-icons/im';
import './Contacts.css'


const Contacts = () => {

    return (
        <div className='flex flex-col items-center my-24 md'>
            <div className='w-full md:w-2/3 lg:w-1/2 flex flex-col items-center'>
                <a href="./"><img src={logo} className='w-8 lg:w-12 xl:w-16 cursor-pointer mb-3 lg:mb-7 xl:mb-12' alt="Logo" /></a>
                <h2 className='uppercase text-xl lg:text-2xl xl:text-3xl font-semibold mb-10'>follow us</h2>
                <div className="px-5 socialButtons w-full flex justify-between">
                    <a href="https://www.instagram.com/bennetts_/" className='flex items-center '>
                        <button className='uppercase font-semibold text-lg lg:text-2xl xl:text-3xl mr-2'>
                            instagram
                        </button>
                        <ImArrowUpRight2 className='lg:text-xl xl:text-2xl'/>
                    </a>
                    <a href="https://twitter.com/bennetts_/" className='flex items-center'>
                        <button className='uppercase font-semibold text-lg lg:text-2xl xl:text-3xl mr-2'>
                            twitter
                        </button>
                        <ImArrowUpRight2 className='lg:text-xl xl:text-2xl'/>
                    </a>
                </div>
            </div>
            <div className="newsletter w-full mt-28 relative text-white">
                <div>
                    <div className='nlBackground w-full h-[20rem] md:h-[30rem] lg:h-[50rem] xl:h-[80rem]'>
                        <img src={newsletterBg} alt="newsletter" className='w-full h-full object-cover object-bottom  lg:object-bottom  ' />
                    </div>
                    <div className='absolute left-4 bottom-4 lg:left-6 lg:bottom-6 xl:left-8 xl:bottom-8'>
                        <p className='text-sm  md:text-lg lg:text-xl xl:text-3xl'>Newsletter Signup</p>
                        <h2 className='text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-semibold leading-5'>LET’S STAY IN TOUCH</h2>
                    </div>
                </div>
            </div>
            <form className='px-5 w-11/12 border-b-2 border-gray-200 flex justify-between py-3 mt-3 lg:mt-7 lg:mt-10'>
                <input type='text' placeholder='EMAIL' className='md:text-lg lg:text-xl 2xl:text-2xl'></input>
                <button type='submit' className='text-gray-400 md:text-lg lg:text-xl 2xl:text-2xl'>OK</button>
            </form>
        </div>
    );
}

export default Contacts;