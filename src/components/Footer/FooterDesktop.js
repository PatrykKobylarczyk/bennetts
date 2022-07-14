import React from 'react';
import { Link } from 'react-router-dom'

//DATA
import { footerMenu } from '../Data/Data';

//ICONS
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterDesktop = () => {


    const footerMenuPanels = footerMenu.map((panel, i) => {

        const subMenuPanel = panel.subMenu && panel.subMenu.map(item =>
            <li
                className='capitalize text-xs font-extralight text-white text-opacity-40 hover:text-opacity-100 transition duration-150 mt-3'
            >
                <Link to={item.path} key={item.name}>{item.name}</Link>
            </li>)

        return (
            <ul
                key={i}
                className='flex flex-col uppercase'
            >
                <h2 className='mb-3 font-semibold'>{panel.name}</h2>
                {subMenuPanel}
            </ul>)

    })

    return (
        <section className='bg-[#0a0a0a] w-full p-16 flex'>
            <div className='w-3/5 '>
                <div className='w-full flex justify-between text-white lg:text-sm xl:text-lg '>
                    {footerMenuPanels}
                </div>

            </div>
            <div className='w-2/5 h-12 flex justify-center items-center'>
                <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center mr-4'><BsInstagram /></span>
                <span className='w-8 h-8 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100 transition duration-150 cursor-pointer text-[#0a0a0a] flex justify-center items-center'><BsTwitter /></span>
            </div>
        </section>
    );
}

export default FooterDesktop;