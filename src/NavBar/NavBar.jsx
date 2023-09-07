import React, { useEffect, useState } from 'react'

function NavBar({ language, setlanguage}) {
  /* SCROLL STYLES NAV */
    const [scroll, setScroll] = useState(false);
    // const [blurred, setBlurred] = useState(false);

    console.log(scroll);
  
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setScroll(true);
      } else {
        setScroll(false);
      };
    };
   
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },[]);
  /* END SCROLL STYLES NAV */

  /* SCROLL SECTION */
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
     if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  /* END SCROLL SECTION */

  /* MENU BURGER */
  const [ isOpen, setIsOpen ] = useState(false)
  /* END MENU BURGER */ 

  /* BUTTON NAV */
  const buttonsEs = ['Inicio', 'Acerca de mi', 'Proyectos', 'Contactame'];
  const buttonsEn = ['Home', 'About me', 'Projects', 'Contact'];
  const buttons = language === 'En' ? buttonsEn : buttonsEs;
  /* END BUTTON NAV */

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
  /* END THEME DARK */

  /* LANGUAGE */
  const iconSpain = "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1691671842/varietales/92357_spain_icon_hbn8qn.png";
  const iconUsa = "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1691671831/varietales/16039_united_states_of_america_us_usa_icon_natugz.png"

  return (
    <>
      <nav className={`md:bg-slate-100 md:bg-opacity-10 backdrop-blur-md flex justify-end text-lg font-medium tracking-widest h-[64px] md:py-4 md:h-auto ${scroll? '' : 'hidden'} `}>
        
      <div className={`p-7 h-[380px] w-full flex flex-col items-start justify-around text-dark dark:text-white md:flex-row md:w-full md:h-auto md:py-0 md:visible ${isOpen? 'visible bg-white dark:bg-slate-800' : 'invisible'}`}>
          {/* BUTTON NAV */}
            <ul className='flex flex-col justify-around h-5/6 md:flex-row md:justify-center md:w-full'>
              {buttons?.map((button, index) => (
                <li
                  key={index}
                  onClick={() => {
                    scrollToSection(button);
                    setIsOpen(false)
                  }}
                  className='md:px-5'
                >
                  <button>{button}</button>
                </li>
              ))}
            </ul>

            {/* THEME DARK */}
            <button 
              onClick={() => {
                setTimeout(() => {
                  handlerTheme()
                },500);
                setIsOpen(false)}}
              className='px-3 flex'
            >
              {theme === 'light' 
              ? <i className="bi bi-moon-stars-fill"></i>
              : <i className="bi bi-brightness-high-fill"></i>}
              {theme === 'light' 
              ? <i class="bi bi-toggle2-off px-1 text-[18px]"></i>
              : <i class="bi bi-toggle2-on px-1 text-[18px]"></i>}
            </button>
            
            {/* LANGUAGE */}
            <button 
              onClick={() => {
                setTimeout(() => {
                  setlanguage(language === 'Es' ? 'En' : 'Es');
                }, 500)
                setIsOpen(false)}}
                className='px-3 flex'
            >
              {language === 'En' 
              ? (<>
                  <img src={iconSpain} alt="spain" className='px-1'/> 
                  <span>Es</span>
                </>) 
              : (
                <>
                  <img src={iconUsa} alt="usa" className='px-1'/>
                  <span>En</span>
                </>
              )}
              <i className="bi bi-caret-down-fill text-[8px] self-end"></i>
            </button>
        </div>
     
        {/* MENU BURGER */}
        <button 
          className='absolute top-3 right-10 md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
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
