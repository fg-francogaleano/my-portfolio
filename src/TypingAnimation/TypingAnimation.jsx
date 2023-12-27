import React from 'react'
import Typed from 'react-typed';

function TypingAnimation({ language }) {
    const phrasesEs = ["¡Bienvenido a mi sitio web!", "¡Comencemos!",""];
    const phrasesEn = ["¡Welcome!", `Let's start`,""]
    
  return (
    <>
      <div className='flex flex-col m-auto'>
        {/* <h1 className='text-6xl font-black tracking-widest font-condensed py-2 text-white'>
          {language === 'En'? en : es }
        </h1> */}
        <h1 className='text-6xl font-black tracking-widest font-condensed py-2 text-white'>
            <Typed
            strings={language === 'Es' ? phrasesEs : phrasesEn}
            typeSpeed={70}
            backSpeed={50}
            loop={true}
            // cursorChar=""
            />
        </h1>
      </div>
    </>
  )
}

export default TypingAnimation;
