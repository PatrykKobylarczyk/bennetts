import React from 'react';

import { categories } from '../Data/Data';

const Links = () => {

    const categoryLinks = categories.map(category => <li key={category.id} className='text-lg mt-5 lg:mt-7 xl:mt-9 lg:text-xl 2xl:text-2xl '><a href=''>{category.name}</a></li>)

    return (
        <section className='mt-[12rem] lg:mt-[18rem] xl:mt-[22rem] px-5 lg:px-16'>
            <ul >
                {categoryLinks}
            </ul>
        </section>
    );
}

export default Links;