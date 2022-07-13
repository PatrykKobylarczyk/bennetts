import React, { useState } from 'react';

import { motion } from "framer-motion"

import { footerMenu } from '../Data/Data';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

//DATA

const Footer = ({isDesktop}) => {

    // const variants = {
    //     open: { heigth: '100%' },
    //     closed: { heigth: '0%' },
    // }

    

    return (
        <>
            {isDesktop ?  <FooterDesktop/> :  <FooterMobile/>}
           
        </>
    )
}

export default Footer;