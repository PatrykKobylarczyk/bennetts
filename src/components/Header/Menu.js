import React from 'react';

import './MenuAnimation.css'
import { categories } from '../Data/Data';
import { motion } from "framer-motion"


const Menu = ({ isActive, setIsActive }) => {

    const menu = categories.map(category => <li key={category.id} className='cursor-pointer leading-10 text-lg'>{category.name}</li>)

    const variants = {
        open: { x: 0 },
        closed: { x: "100%" },
    }

    return (
        <motion.div
            animate={isActive ? "open" : "closed"}
            variants={variants}
            transition={{ ease: 'easeInOut' }}
            className=' w-full h-[100vh]  fixed flex flex-col justify-center items-center bg-white z-20'>
            <ul className='flex flex-col'>
                {menu}
            </ul>
        </motion.div>
    );
}

export default Menu;