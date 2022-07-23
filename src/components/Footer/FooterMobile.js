import React, { useState } from 'react';
import { Link } from 'react-router-dom'

//DATA
import { footerMenu } from '../Data/Data';

//ICONS
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

//ANIMATIONS
import { motion, AnimatePresence } from "framer-motion"


const FooterMobile = () => {

    const [open, setOpen] = useState(false)

    const openPanelHandler = id => {

        switch (id) {
            case 1:
                open === 'services' ? setOpen('') : setOpen('services');
                break;
            case 2:
                open === 'help' ? setOpen('') : setOpen('help')
                break;
            case 3:
                open === 'about' ? setOpen('') : setOpen('about')
                break;
            default:
                console.log('Opss, I did it again...');
                break;

        }
    }

    const showPanel = {
        hidden: {
            height: 0,
            transition: {
                duration: 0.2,
                ease: 'linear',
                
            },
        },
        show: {
            height: "auto",
            transition: {
                duration: 0.2,
                ease: 'linear'
            },
        },
    };

    const showLinks = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0,
                ease: 'linear'
            },
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.1,
                ease: 'linear'
            },
        },
    };

    const footerMenuPanels = footerMenu.map(panel => {

        const subMenuPanel = panel.subMenu && panel.subMenu.map(item =>

            <motion.li
                key={item.name}
                className='capitalize text-xs font-extralight text-white text-opacity-40 hover:text-opacity-100 transition duration-150 mt-3'
                variants={showLinks}
                initial='hidden'
                animate='show'
                exit='hidden'
            >
                <Link to={item.path} key={item.name}>{item.name}</Link>
            </motion.li>
        )

        return (
            <div
                id={panel.id}
                key={panel.id}
                className='w-full flex flex-col p-3'
                onClick={() => openPanelHandler(panel.id)}>
                <div className='w-full flex justify-between items-center'>
                    <ul >{panel.name}</ul>
                    {panel.name === open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                <AnimatePresence>
                    {panel.name === open &&
                        <motion.ul
                            className='m-3'
                            variants={showPanel}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                        >
                            {subMenuPanel}
                        </motion.ul>
                    }
                </AnimatePresence>
            </div>
        )
    })

    return (
        <section className='bg-[#0a0a0a] text-white w-full p-5 flex flex-col'>
            <div className='w-full flex flex-col lg:text-sm xl:text-lg '>
                {footerMenuPanels}
            </div>
            <div className='w-full flex justify-start px-2 py-10'>
                <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center mr-4'><a href='https://www.instagram.com/bennetts_/'><BsInstagram /></a></span>
                <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center'><a href='https://twitter.com/bennetts_/'><BsTwitter /></a></span>
            </div>
            <h3 className='text-xs text-center opacity-30'>© 2022 Bennetts. All rights reserved</h3>
        </section >
    );
}

export default FooterMobile;