import React, { useEffect, useState } from "react";

function Button({ childen, secondary, type, onAction, styled }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definimos umbral para móviles
    };

    handleResize(); // Comprobamos en la carga inicial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setHovered(true); // Sólo activar en escritorio
  };

  const handleMouseLeave = () => {
    if (!isMobile) setHovered(false); // Sólo activar en escritorio
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };
  return (
    <>
      {secondary ? (
        <button
          type={type}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`w-full relative ${styled} px-4 py-1 rounded-full overflow-hidden font-condensed font-black tracking-widest text-xl dark:text-white shadow-2xl transition duration-500 ease-in-out
          outline outline-1 outline-tertiary ${isClicked ? "scale-75" : ""}`}
          onClick={() => {
            setIsClicked(true);
            setTimeout(() => {
              setIsClicked(false);
            }, 100);
          }}
        >
          <i className="bi bi-download text-black dark:text-white hover:text-tertiary"></i>{" "}
          {childen}
          <span
            className={`bg-tertiary absolute h-full left-0 bottom-0 transition-width duration-500 ease-in-out z-[-1] ${
              hovered ? "w-full" : "w-0"
            }`}
          ></span>
        </button>
      ) : (
        <button
          type={type}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            handleClick();
            if (onAction) {
              onAction(childen);
            }
          }}
          className={`w-full ${styled} bg-transparent relative overflow-hidden px-4 py-1 rounded-full font-condensed font-black tracking-widest text-xl dark:text-white shadow-2xl transition duration-500 ease-in-out ${
            hovered ? "outline outline-1 outline-secondary" : "outline-none"
          } ${isClicked ? "scale-75" : ""}`}
        >
          {childen}
          <span
            className={`bg-gradient-to-r from-primary via-secondary to-tertiary absolute h-full right-0 bottom-0 transition-width duration-500 ease-in-out z-[-1] ${
              hovered ? "w-0 " : "w-full"
            }`}
          ></span>
        </button>
      )}
    </>
  );
}

export default Button;
