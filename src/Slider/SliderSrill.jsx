import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from './data.js'

function SliderSkrill() {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className=''>
      <Slider {...settings}>
        {data.map((skrill, index) => (
          <div key={index}>
            <img width="48" height="48" src={skrill} alt="css3" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSkrill;
