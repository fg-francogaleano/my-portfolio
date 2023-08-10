import React, { useState } from 'react'

function NavBar({ handlerTheme }) {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
     if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
  const [ showMenu, setShowMenu ] = useState(false) 

  const buttons = ['Inicio', 'Acerca de mi', 'Proyectos', 'Contactame']
   
  return (
    <>
      <nav className='flex justify-end py-10 text-lg font-medium tracking-widest'>
        
        <div className={`bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] flex flex-col items-start justify-around rounded-lg text-dark dark:text-white  md:flex-row md:w-full md:h-[50px] md:py-0 md:bg-inherit md:visible bg-white ${showMenu? 'visible' : 'invisible'}`}>
          {/* BOTONES */}
            <ul className='flex flex-col justify-around h-5/6 md:flex-row md:justify-center md:w-full'>
              {buttons?.map((button, index) => (
                <li
                  key={index}
                  onClick={() => {
                    scrollToSection(button);
                    setShowMenu(!showMenu)
                  }}
                  className='md:px-5'
                >
                  <button>{button}</button>
                </li>
              ))}
            </ul>

            {/* MODO DARK */}
            <button onClick={() => handlerTheme()}>
              <i className="bi bi-moon"></i>
            </button>
        </div>
     
        {/* MENU HAMBURGUESA */}
        <button 
          className='absolute top-16 right-5 md:hidden'
          onClick={() => setShowMenu(!showMenu)}>
          <span 
            className={`block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]  ${showMenu? 'transform rotate-45 origin-top-left translate-y-[5px] translate-x-[8px] transition-transform ease-in-out duration-500' : 'rotate-0 transition-transform ease-in-out duration-500'}`}
          ></span>
          <span 
            className={`block bg-black dark:bg-white my-[9px] rounded-md h-[3px] w-[28px] ${showMenu? 'opacity-0 transition-opacity' : 'opacity-100 transition-opacity duration-500 ease-in-out'}`}
          ></span>
          <span 
            className={`block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px] ${showMenu? 'transform rotate-[-45deg] origin-bottom-left translate-x-[8px] transition-transform ease-in-out duration-500' : 'rotate-0 transition-transform ease-in-out duration-500'}`}
          ></span>
        </button>
      </nav>
    </>
  )
}

export default NavBar
