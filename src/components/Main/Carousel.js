import React from 'react';

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//COMPONENTS
import ShoeCard from '../ShoeCard/ShoeCard';

//DATA
import { cards } from '../Data/Data';

const Carousel = () => {

  const displayCarouselSection = cards.map(card =>
    <ShoeCard
      
      key={card.id}
      image={card.image}
      name={card.name}
      description={card.description}
    />
  )

  //Carousel settings
  const settings = {
    className: 'w-full',
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3.3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {displayCarouselSection}
    </Slider>
  );
}

export default Carousel;