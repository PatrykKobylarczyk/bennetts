import React, { useEffect, useState } from 'react';

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//COMPONENTS
import GetFetchingData from '../Data/GetFetchingData';

//DATA
import { products } from '../Data/Products';

//COMPONENTS
import ProductCarousel from '../Product/ProductCarousel';
import ProductHeadings from '../Product/ProductHeadings';
import ProductVariant from '../Product/ProductVariant';
import ProductSizes from '../Product/ProductSizes';
import ProductOrderAt from '../Product/ProductOrderAt';


const Product = () => {

    const [selectedVariant, setSelectedVariant] = useState(0)

    const selectVariantHandler = (id) => {
        setSelectedVariant(id)
    }

    return (
        <div className='w-full flex flex-col my-5'>
            <ProductHeadings selectedVariant={selectedVariant} products={products} />
            <ProductCarousel selectedVariant={selectedVariant} products={products} />
            <ProductVariant selectVariantHandler={selectVariantHandler} products={products} />
            <ProductSizes />
            <ProductOrderAt/>
        </div>
    );
}

export default Product;