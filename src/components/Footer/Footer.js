import React, { useState } from 'react';

import { motion } from "framer-motion"

import { footerMenu } from '../Data/Data';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsInstagram, BsTwitter} from 'react-icons/bs';
import FooterDesktop from './FooterDesktop';

//DATA

const Footer = () => {

    // const [open, setOpen] = useState(false)

    // const variants = {
    //     open: { heigth: '100%' },
    //     closed: { heigth: '0%' },
    // }

    const footerMenuPanels = footerMenu.map((panel, i) => {
        return <div id={i} key={i} className='w-full border-2 border-red-500 flex justify-between p-3' onClick={id=> console.log(id)}><ul >{panel.name}</ul><AiOutlinePlus/></div>
    })

    return (
        <>
            <section className='bg-[#0a0a0a] w-full p-5 flex'>
                <div className='w-3/5 '>
                    <div className='w-full flex flex-col text-white lg:text-sm xl:text-lg '>
                        {footerMenuPanels}
                    </div>

                </div>
                <div className='w-2/5 flex justify-center'>
                    <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center mr-4'><BsInstagram /></span>
                    <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center'><BsTwitter/></span>
                </div>
            </section>
            {/* <FooterDesktop/> */}
        </>
    )
}

export default Footer;