import React from 'react'
import Typed from 'react-typed';

function TypingAnimation({ language }) {
    const phrases = ["Franco Galeano", "Developer Full Stack"];
    const en = 'I am';
    const es = 'Soy'

  return (
    <>
        <h1 className='text-6xl font-black tracking-widest font-condensed'>
          {language === 'En'? en : es }
        </h1>
        <h1 className='text-6xl font-black tracking-widest font-condensed'>
            <Typed
            strings={phrases}
            typeSpeed={70}
            backSpeed={50}
            loop
            />
        </h1>
    </>
  )
}

export default TypingAnimation;
