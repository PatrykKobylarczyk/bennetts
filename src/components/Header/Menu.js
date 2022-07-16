import React from 'react';
import { Link } from 'react-router-dom'

//DATA
import { categories } from '../Data/Data';

//ICONS
import { BsInstagram, BsTwitter } from 'react-icons/bs';

//ANIMATIONS
import { motion } from "framer-motion"


const Menu = ({ menuActive, setMenuActive }) => {

    const menu = categories.map(category =>
        <li
            key={category.id}
            className='cursor-pointer leading-10 text-lg'
            onClick={()=>setMenuActive(prev=>!prev)}
        >
            <Link to={category.path} >{category.name}</Link>
        </li>)

    const variants = {
        open: { x: '-100%' },
        closed: { x: "0" },
    }

    return (
        <motion.div
            animate={menuActive ? "open" : "closed"}
            variants={variants}
            transition={{ ease: 'easeInOut' }}
            className='w-full h-[100vh] fixed flex flex-col justify-center items-center bg-white top-0 -right-full z-20'>
            <ul className='flex flex-col'>
                {menu}
            </ul>
            <div className='w-full absolute bottom-16 flex justify-end px-10 py-10'>
                <span className='w-8 h-8 rounded-full bg-[#0a0a0a] bg-opacity-[15%] hover:bg-opacity-100 transition duration-150 cursor-pointer text-white flex justify-center items-center mr-4'><a href='https://www.instagram.com/bennetts_/'><BsInstagram /></a></span>
                <span className='w-8 h-8 rounded-full bg-[#0a0a0a] bg-opacity-[15%] hover:bg-opacity-100 transition duration-150 cursor-pointer text-white flex justify-center items-center'><a href='https://twitter.com/bennetts_/'><BsTwitter /></a></span>
            </div>
        </motion.div>
    );
}

export default Menu;