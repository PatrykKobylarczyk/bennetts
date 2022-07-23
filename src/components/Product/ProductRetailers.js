import React from 'react';

import Retailer from './Retailer';

const ProductRetilers = ({ firstRetailer, secondRetailer, thirdRetailer }) => {

    const arrayOfRetailers = [firstRetailer, secondRetailer, thirdRetailer]

    return (
        <>
            <ul>
                {arrayOfRetailers.every(item => typeof item === 'object') &&
                    arrayOfRetailers.map((item, i) => {
                        return (
                           <Retailer key={i} item={item} />
                        )
                    })}
            </ul>
        </>
    );
}

export default ProductRetilers;