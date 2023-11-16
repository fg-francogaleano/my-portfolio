import React, { useEffect, useState } from 'react'

function AnimationDown() {
  const [currentIcon, setCurrentIcon] = useState(0);

    useEffect(() => {
      const animationInterval = setInterval(() => {
        setCurrentIcon(prevIcon => (prevIcon + 1) % 3); // Ciclo entre 0, 1, y 2
      }, 666); // Cambiar de icono cada tres segundos
  
      return () => {
        clearInterval(animationInterval); // Limpia el intervalo cuando el componente se desmonta
      }
  }, [])

  const icons = [
    'bottom-9', 
    'bottom-5', 
    'bottom-1'
  ];

  return (
    <div className='flex-col flex items-end'>
      {icons.map((icon, index) => (
        <i
          key={index}
          className={`bi bi-chevron-compact-down ${icon} text-6xl px-0 z-20 absolute ${index === currentIcon ? 'transition-opacity duration-800 ease-in-out opacity-100' : 'transition-opacity duration-2000 ease-in-out opacity-0'}`}
        ></i>
      ))}
    </div>
  );
}

export default AnimationDown;
