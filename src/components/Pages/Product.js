import React, { useState, useEffect } from 'react';

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//DATA
import { products } from '../Data/Products';

//COMPONENTS
import ProductCarousel from '../Product/ProductCarousel';
import ProductHeadings from '../Product/ProductHeadings';
import ProductVariant from '../Product/ProductVariant';
import ProductSizes from '../Product/ProductSizes';
import ProductRetailers from '../Product/ProductRetailers';
import ProductDetailsPanel from '../Product/ProductDetailsPanel';

//FUNCTIONS
import { checkApi } from '../Data/Functions';

//APIS
import api1 from '../Data/api1.json'
import api2 from '../Data/api2.json'
import api3 from '../Data/api3.json'

//PRODUCT DETAILS
const colour = 'Grey'
const productName = 'React Vision'


const Product = () => {

    const [firstRetailer, setFirstRetailer] = useState()
    const [secondRetailer, setSecondRetailer] = useState()
    const [thirdRetailer, setThirdRetailer] = useState()

    const [selectedVariant, setSelectedVariant] = useState(0)

    const selectVariantHandler = (id) => {
        setSelectedVariant(id)
    }

    useEffect(() => {
        setFirstRetailer(checkApi(api1, productName, colour))
        setSecondRetailer(checkApi(api2, productName, colour))
        setThirdRetailer(checkApi(api3, productName, colour))
    }, [])


    return (
        <div className='w-full flex flex-col my-5 lg:w-[860px] 2xl:w-[1200px]'>
            <ProductHeadings selectedVariant={selectedVariant} products={products} />
            <div className='lg:flex gap-10'>
                <div className='lg:w-1/2'>
                    <ProductCarousel selectedVariant={selectedVariant} products={products} />
                    <ProductVariant selectVariantHandler={selectVariantHandler} products={products} />
                </div>
                <div className='h-full lg:w-1/2'>
                    <ProductSizes />
                    <h2 className='px-5 mt-12 mb-3 text-sm'>order at</h2>
                    <ProductRetailers
                        firstRetailer={firstRetailer}
                        secondRetailer={secondRetailer}
                        thirdRetailer={thirdRetailer}
                    />
                    <ProductDetailsPanel selectedVariant={selectedVariant} products={products}/>

                </div>
            </div>
        </div>
    );
}

export default Product;