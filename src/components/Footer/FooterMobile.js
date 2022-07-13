import React, { useState } from 'react';

import { footerMenu } from '../Data/Data';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';


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
        }
    }

    const footerMenuPanels = footerMenu.map(panel => {

        const subMenuPanel = panel.subMenu && panel.subMenu.map(item => <li key={item.name} className='capitalize text-xs font-extralight text-white text-opacity-30 hover:text-opacity-100 transition duration-150 mt-3'><a href='#'>{item.name}</a></li>)

        return (
            <div
                id={panel.id}
                key={panel.id}
                className='w-full flex flex-col p-3'
                onClick={() => openPanelHandler(panel.id)}>
                <div className='w-full flex justify-between items-center'>
                    <ul >{panel.name}</ul>
                    {panel.name === open  ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                {panel.name === open &&
                    <ul className='mt-3'>
                        {subMenuPanel}
                    </ul>
                }
            </div>
        )
    })

    return (
        <section className='bg-[#0a0a0a] text-white w-full p-5 flex flex-col'>
            <div className='w-full flex flex-col lg:text-sm xl:text-lg '>
                {footerMenuPanels}
            </div>
            <div className='w-full flex justify-start px-2 py-10'>
                <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center mr-4'><BsInstagram /></span>
                <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center'><BsTwitter /></span>
            </div>
            <h3 className='text-xs text-center opacity-30'>© 2022 Bennetts. All rights reserved</h3>
        </section>
    );
}

export default FooterMobile;