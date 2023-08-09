import React from 'react'
import Typed from 'react-typed';

function TypingAnimation() {
    const phrases = ["Franco Galeano", "Desarrollador Web",];
  return (
    <>
        <h1 className='text-6xl font-black tracking-widest font-condensed'>Soy</h1>
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
