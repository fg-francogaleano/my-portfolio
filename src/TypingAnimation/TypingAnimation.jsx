import React from 'react'
import Typed from 'react-typed';

function TypingAnimation({ language }) {
    const phrases = ["Franco Galeano", "Full Stack"];
    const en = 'I am';
    const es = 'Soy'

  return (
    <>
      <div className='flex flex-col w-[90%] m-auto'>
        <h1 className='text-6xl font-black tracking-widest font-condensed py-2 text-white'>
          {language === 'En'? en : es }
        </h1>
        <h1 className='text-6xl font-black tracking-widest font-condensed py-2 text-white'>
            <Typed
            strings={phrases}
            typeSpeed={70}
            backSpeed={50}
            loop
            />
        </h1>
      </div>
    </>
  )
}

export default TypingAnimation;
