import React from 'react';

import { categories } from '../Data/Data';
import { motion } from "framer-motion"


const Menu = ({ menuActive }) => {

    const menu = categories.map(category => <li key={category.id} className='cursor-pointer leading-10 text-lg'>{category.name}</li>)

    const variants = {
        open: { x: '-100%' },
        closed: { x: "0" },
    }

    return (
        <motion.div
            animate={menuActive ? "open" : "closed"}
            variants={variants}
            transition={{ ease: 'easeInOut' }}
            className=' w-full h-[100vh] fixed flex flex-col justify-center items-center bg-white -right-full z-20'>
            <ul className='flex flex-col'>
                {menu}
            </ul>
        </motion.div>
    );
}

export default Menu;