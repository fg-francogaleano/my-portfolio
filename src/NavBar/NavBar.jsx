import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

function NavBar({ language, setlanguage, scrollToSection, currentSection, setCurrentSection, isFirstSectionVisible}) {
  /* SCROLL STYLES NAV */
    const [scroll, setScroll] = useState(true);
    // const [blurred, setBlurred] = useState(false);
  
    // const getCurrentSection = () => {
    //   const scrollY = window.scrollY;
    //   let section = currentSection;
  
    //   navigations.forEach((s) => {
    //     console.log(navigations);
    //     if (scrollY + 80 >= s.position) {
    //       console.log(scrollY + 80);
    //       section = s.name;
    //       // console.log('1°','DENTRO DEL CONDICIONAL',s.name);
    //     }
    //   });
    //   console.log('RETORNA',section)
    //   return section;
    // };
   
    // useEffect(() => {
    //   const handleScroll = () => {
    //     setCurrentSection(getCurrentSection());
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, [currentSection, getCurrentSection, setCurrentSection]);
  /* END SCROLL STYLES NAV */

  /* MENU BURGER */
  const [ isOpen, setIsOpen ] = useState(false)
  /* END MENU BURGER */ 

  /* BUTTON NAV */
  const navigationsEs = [
    {name:'Inicio', position: 0}, 
    {name: 'Acerca de mi', position: 962}, 
    {name: 'Proyectos', position: 1924}, 
    {name: 'Contactame', position: 2886}
  ];
  const navigationsEn = [
    {name:'Home', position: 0}, 
    {name:'About me', position: 962}, 
    {name:'Projects', position: 1924}, 
    {name:'Contact', position: 2886}
  ];
  const navigations = language === 'En' ? navigationsEn : navigationsEs;
  /* END BUTTON NAV */

  /* THEME DARK */
  const[ theme, setTheme ] = useState(localStorage.getItem('color-theme') || "light")

  useEffect(()=>{
        /* SI ESTÁ SETEADO EN EL LOCALSTORANGE */
        if (localStorage.getItem('color-theme')) {
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

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Utiliza un desplazamiento suave
      });
    }, 250);
  };
console.log(isFirstSectionVisible);
  return (
    <>
      <nav className={`shadow-md flex justify-end text-lg font-medium tracking-widest h-[64px] md:py-4 md:h-auto ${isFirstSectionVisible? 'md:bg-white dark:bg-[#101418]' : 'bg-transparent backdrop-filter backdrop-blur-md'} `}>
        
        <div className={`p-7 h-[380px] w-full flex flex-col items-start justify-around md:flex-row md:w-full md:h-auto md:py-0 md:visible ${isOpen? 'visible bg-white dark:bg-[#101418]' : 'invisible'} ${isFirstSectionVisible? 'text-dark dark:text-white' : 'text-white'}`}>
          {/* NAVLINK */}
            <ul className='flex flex-col justify-around h-5/6 md:flex-row md:justify-evenly md:w-full'>
              {navigations?.map((navItem, index) => (
                <li
                  key={index}                  
                  className='navlink'
                >
                  <Link
                    className='' 
                    activeClass="active" 
                    to={navItem.name} 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={800} 
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex'>
              {/* THEME DARK */}
              <div className='px-2 flex'>
                {theme === 'dark' 
                  ? <i className="bi bi-moon-stars-fill"></i>
                  : <i className="bi bi-brightness-high-fill"></i>}
                <button 
                  onClick={() => {
                    setTimeout(() => {
                      handlerTheme()
                    },500);
                    setIsOpen(false)}}
                  className='px-1'
                >
                  {theme === 'light' 
                  ? <i className="bi bi-toggle2-off px- text-[18px]"></i>
                  : <i className="bi bi-toggle2-on px- text-[18px]"></i>}
                </button>
              </div>
              
              {/* LANGUAGE */}
              <div className='px-2 flex'>
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
                <button 
                  onClick={() => {
                    setTimeout(() => {
                      setlanguage(language === 'Es' ? 'En' : 'Es');
                    }, 500)
                    setIsOpen(false)
                    // setCurrentSection(getCurrentSection());
                    scrollToTop();
                  }}
                    className='px- flex'
                >
                  <i className="bi bi-caret-down-fill text-[8px] self-end"></i>
                </button>
              </div>
            </div>      
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