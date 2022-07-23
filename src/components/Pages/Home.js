import React from 'react';

//COMPONENTS
import Contacts from '../Contacts/Contacts';
import Main from '../Main/Main';

const Home = ({ isTablet, isDesktop }) => {
    return (
        <>
            <Main
                isTablet={isTablet}
                isDesktop={isDesktop}
            />
            <Contacts isDesktop={isDesktop} />
        </>
    );
}

export default Home;