import React from 'react';

//COMPONENTS
import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

const Footer = ({isDesktop}) => {

    return (
        <>
            {isDesktop ?  <FooterDesktop/> :  <FooterMobile/>}
        </>
    )
}

export default Footer;