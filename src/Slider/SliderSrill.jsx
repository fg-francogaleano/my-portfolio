import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from './data.js'

function SliderSkrill() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6, // Cambia este valor según la cantidad de elementos que desees mostrar a la vez
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10, // Velocidad de reproducción automática en milisegundos
    pauseOnHover: false, // Evita que el slider se pause cuando se coloca el mouse sobre él
    centerMode: true, // Permite que el slider se centre en el elemento actual
    centerPadding: '0', // Espacio adicional en los lados cuando centerMode está habilitado
    arrows: false
  };

  return (
    <div className='w-[70%] m-auto'>
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
