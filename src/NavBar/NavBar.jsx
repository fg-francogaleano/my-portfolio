import React, { useEffect, useState } from 'react'

function NavBar({ language, setlanguage}) {
  /* HANDLER SCROLL */
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
     if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  /* FIN */

  /* MENU BURGER */
  const [ isOpen, setIsOpen ] = useState(false)
  /* FIN */ 

  /* BOTONES NAV */
  const buttonsEs = ['Inicio', 'Acerca de mi', 'Proyectos', 'Contactame'];
  const buttonsEn = ['Home', 'About me', 'Projects', 'Contact'];
  const buttons = language === 'En' ? buttonsEn : buttonsEs;
  /* FIN */

  /* THEME DARK */
  const[ theme, setTheme ] = useState(localStorage.getItem('color-theme') || "light")

  useEffect(()=>{
    /* SI ESTÁ SETEADO EN EL LOCALSTORANGE */
    if (localStorage.getItem('color-theme')) {
      console.log('ESTÁ SETEADO EN LS', theme);
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }

    /* SI NO ESTÁ SETEADO EN EL LOCALSTORANGE */
  } else {
      console.log('NO ESTÁ SETEADO EN LS', theme)
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }
  }
  },[theme])

  const handlerTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  /* FIN */

  /* IDIOMA */
  const iconSpain = "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1691671842/varietales/92357_spain_icon_hbn8qn.png";
  const iconUsa = "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1691671831/varietales/16039_united_states_of_america_us_usa_icon_natugz.png"

  return (
    <>
      <nav className='flex justify-end py-10 text-lg font-medium tracking-widest'>
        
        <div className={`bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] flex flex-col items-start justify-around rounded-lg text-dark dark:text-white  md:flex-row md:w-full md:h-[50px] md:py-0 md:bg-inherit md:visible bg-white ${isOpen? 'visible' : 'invisible'}`}>
          {/* BOTONES */}
            <ul className='flex flex-col justify-around h-5/6 md:flex-row md:justify-center md:w-full'>
              {buttons?.map((button, index) => (
                <li
                  key={index}
                  onClick={() => {
                    scrollToSection(button);
                    setIsOpen(!isOpen)
                  }}
                  className='md:px-5'
                >
                  <button>{button}</button>
                </li>
              ))}
            </ul>

            {/* THEME DARK */}
            <button onClick={() => handlerTheme()}>
              {theme === 'light' 
              ? <i className="bi bi-moon-stars-fill"></i>
              : <i className="bi bi-brightness-high-fill"></i>}            
            </button>
            
            {/* IDIOMA */}
            <button onClick={() => setlanguage(language === 'Es' ? 'En' : 'Es')}>
              {language === 'Es' 
              ? <img src={iconSpain} alt="spain" />
              : <img src={iconUsa} alt="usa" />}
            </button>
        </div>
     
        {/* MENU BURGER */}
        <button 
          className='absolute top-16 right-5 md:hidden'
          onClick={() => setIsOpen(!isOpen)}>
          <span 
            className={`block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]  ${isOpen? 'transform rotate-45 origin-top-left translate-y-[5px] translate-x-[8px] transition-transform ease-in-out duration-500' : 'rotate-0 transition-transform ease-in-out duration-500'}`}
          ></span>
          <span 
            className={`block bg-black dark:bg-white my-[9px] rounded-md h-[3px] w-[28px] ${isOpen? 'opacity-0 transition-opacity' : 'opacity-100 transition-opacity duration-500 ease-in-out'}`}
          ></span>
          <span 
            className={`block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px] ${isOpen? 'transform rotate-[-45deg] origin-bottom-left translate-x-[8px] transition-transform ease-in-out duration-500' : 'rotate-0 transition-transform ease-in-out duration-500'}`}
          ></span>
        </button>
      </nav>
    </>
  )
}

export default NavBar
