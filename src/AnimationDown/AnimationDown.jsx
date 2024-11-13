import React, { useEffect, useState } from "react";

function AnimationDown() {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isMounted, setIsMounted] = useState(true); // Estado para controlar el montaje del componente

  useEffect(() => {
    if (!isMounted) return;

    const animationInterval = setInterval(() => {
      setCurrentIcon((prevIcon) => {
        if (prevIcon === 2) {
          // Cuando llega al último ícono, desmonta el componente
          setIsMounted(false);
        }
        return (prevIcon + 1) % 3; // Ciclo entre 0, 1, y 2
      });
    }, 400);

    return () => clearInterval(animationInterval);
  }, [isMounted]);

  // Remontar el componente después de un cierto tiempo
  useEffect(() => {
    if (!isMounted) {
      const remountTimeout = setTimeout(() => {
        setCurrentIcon(0); // Reinicia el icono al primero
        setIsMounted(true); // Vuelve a montar el componente
      }, 1000); // Tiempo de desmontaje en milisegundos

      return () => clearTimeout(remountTimeout);
    }
  }, [isMounted]);

  if (!isMounted) return null; // No renderiza nada si no está montado

  const icons = ["bottom-9", "bottom-5", "bottom-1"];

  return (
    <div className="flex-col flex items-end">
      {icons.map((icon, index) => (
        <i
          key={index}
          className={`bi bi-chevron-compact-down ${icon} text-6xl px-0 z-20 absolute ${
            index === currentIcon
              ? "transition-opacity duration-800 ease-in-out opacity-100"
              : "transition-opacity duration-1000 ease-in-out opacity-0"
          }`}
        ></i>
      ))}
    </div>
  );
}

export default AnimationDown;
