import React from 'react';

import logo from "../../assets/images/logo.png"
import newsletterBg from "../../assets/images/newsletterBg.webp"
import { ImArrowUpRight2 } from 'react-icons/im';
import './Contacts.css'


const Contacts = () => {

    return (
        <div className='flex flex-col items-center my-24'>
            <a href="./"><img src={logo} className='w-8 cursor-pointer mb-3' alt="Logo" /></a>
            <h2 className='uppercase text-xl font-semibold mb-10'>follow us</h2>
            <div className="px-5 socialButtons w-full flex justify-between">
                <a href="https://www.instagram.com/bennetts_/" className='flex items-center '>
                    <button className='uppercase font-semibold text-lg mr-2'>
                        instagram
                    </button>
                    <ImArrowUpRight2 />
                </a>
                <a href="https://twitter.com/bennetts_/" className='flex items-center'>
                    <button className='uppercase font-semibold text-lg mr-2'>
                        twitter
                    </button>
                    <ImArrowUpRight2 />
                </a>
            </div>
            <div className="newsletter w-full mt-28 relative text-white">
                <div>
                    <div className={`nlBackground w-full h-80`}>
                        <img src={newsletterBg} alt="newsletter" className='w-full h-full object-cover object-bottom    ' />
                    </div>
                    <div className='absolute left-4 bottom-4'>
                        <p className='text-sm'>Newsletter Signup</p>
                        <h2 className='text-lg font-semibold leading-5'>LET’S STAY IN TOUCH</h2>
                    </div>
                </div>
            </div>
            <form className='px-5 w-11/12 border-b-2 border-gray-200 flex justify-between py-3 mt-3'>
                <input type='text' placeholder='EMAIL' ></input>
                <button type='submit' className='text-gray-400'>OK</button>
            </form>
        </div>
    );
}

export default Contacts;