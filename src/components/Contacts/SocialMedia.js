import React from 'react';

import logo from "../../assets/images/logo.png"
import { ImArrowUpRight2 } from 'react-icons/im';

const SocialMedia = () => {
    return ( 
        <div className='w-full xl:w-2/3 flex flex-col items-center'>
                <a href="./"><img src={logo} className='w-8 lg:w-10 xl:w-12 cursor-pointer mb-3 lg:mb-7 xl:mb-12' alt="Logo" /></a>
                <h2 className='uppercase text-lg lg:text-xl xl:text-2xl font-semibold mb-10'>follow us</h2>
                <div className="px-5 socialButtons w-full flex justify-between">
                    <a href="https://www.instagram.com/bennetts_/" className='flex items-center '>
                        <button className='uppercase font-semibold lg:text-lg mr-2'>
                            instagram
                        </button>
                        <ImArrowUpRight2 className='lg:text-xl' />
                    </a>
                    <a href="https://twitter.com/bennetts_/" className='flex items-center'>
                        <button className='uppercase font-semibold lg:text-lg mr-2'>
                            twitter
                        </button>
                        <ImArrowUpRight2 className='lg:text-xl' />
                    </a>
                </div>
            </div>
     );
}
 
export default SocialMedia;