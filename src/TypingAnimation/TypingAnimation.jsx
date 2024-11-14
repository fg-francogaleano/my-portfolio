import React, { useEffect, useState } from "react";
import Typed from "react-typed";

function TypingAnimation({ language }) {
  const phrases = language === "Es" ? ["¡Bienvenido!"] : ["Welcome!"];
  const phrases1 = language === "Es" ? ["¡Comencemos!"] : ["Let's start!"];
  const phrases2 =
    language === "Es" ? ["¡Continua explorando!"] : ["Continue exploring!"];

  const lengthPhrases = phrases[0].length;
  const lengthPhrases1 = phrases1[0].length;
  const typeSpeed = 140;
  const time = lengthPhrases * typeSpeed;
  const time1 = lengthPhrases1 * typeSpeed + time;
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible1, setIsVisible1] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, time);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible1(false);
    }, time1);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        {/* <h1 className='text-6xl font-black tracking-widest font-condensed py-2 text-white'>
          {language === 'En'? en : es }
        </h1> */}
        <h1 className="text-5xl font-black tracking-widest font-condensed py-2 text-white">
          <div
            className={`transition-opacity duration-600 ${
              !isVisible ? "opacity-0" : "opacity-100"
            }`}
          >
            <Typed
              strings={phrases}
              typeSpeed={70}
              backSpeed={50}
              loop={false} // Desactivar el loop
              showCursor={false} // Ocultar el cursor al finalizar
            />
          </div>
          <div
            className={`transition-opacity duration-600 ${
              !isVisible1 ? "opacity-0" : "opacity-100"
            }`}
          >
            <Typed
              strings={phrases1}
              typeSpeed={70}
              backSpeed={50}
              loop={false} // Desactivar el loop
              showCursor={false} // Ocultar el cursor al finalizar
              startDelay={time}
            />
          </div>
          <div>
            <Typed
              strings={phrases2}
              typeSpeed={70}
              backSpeed={50}
              loop={true} // Desactivar el loop
              showCursor={false} // Ocultar el cursor al finalizar
              startDelay={time1}
            />
          </div>
        </h1>
      </div>
    </>
  );
}

export default TypingAnimation;
