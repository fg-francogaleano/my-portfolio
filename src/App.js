import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import TypingAnimation from './TypingAnimation/TypingAnimation';
import About from './About/About';
import Projects from './Proyects/Projects';
import Contact from './Contact/Contact';
import AnimationDown from './AnimationDown/AnimationDown';

const UrlVideo = "https://res.cloudinary.com/dfmkjxjsf/video/upload/v1692577789/varietales/pexels-pavel-danilyuk-5495845_1080p_f4ascs.mp4"

function App() {
  /* LANGUAGE */
  const[ language, setlanguage ] = useState(localStorage.getItem('language') || 'Es');
  useEffect(()=>{
        /* SI ESTÁ SETEADO EN EL LOCALSTORANGE */
      if (localStorage.getItem('language') !== null) {
        if (localStorage.getItem('language') === 'Es') {
            localStorage.setItem('language', 'En');
        } else {
            localStorage.setItem('language', 'Es');
        }

      /* SI NO ESTÁ SETEADO EN EL LOCALSTORANGE */
    } else {
        if (language === 'Es') {
          localStorage.setItem('language', 'En');
        } else {
          localStorage.setItem('language', 'Es');
        }
    }
  },[language])

   /* SCROLL STYLES NAV */
   const initial = language === 'Es' ? 'Inicio' : 'Home'
   const [currentSection, setCurrentSection] = useState(initial);
   /* END SCROLL STYLES NAV */
 
   /* SCROLL SECTION */
   const scrollToSection = (sectionId) => {
     const section = document.getElementById(sectionId);
       if (section) {
         setTimeout(()=>{
           section.scrollIntoView({ 
             behavior: 'smooth',
             block: 'start' 
           });
         }, 200);
         // setCurrentSection(sectionId);
       };
     };
   /* END SCROLL SECTION */
   const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const firstSection = document.getElementById(language === 'En' ? 'Home' : 'Inicio');
    if (firstSection) {
      const rect = firstSection.getBoundingClientRect();
      console.log(rect.top, -window.innerHeight);
      if(rect.top <= -window.innerHeight) {
        console.log('es true');
        setIsFirstSectionVisible(true)
      }
      else {
        console.log('es false');
        setIsFirstSectionVisible(false)
      }
      console.log(isFirstSectionVisible);
    }
  };

  // Agregar el evento de scroll al montar el componente
  window.addEventListener('scroll', handleScroll);

  // Eliminar el evento de scroll al desmontar el componente
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [language, isFirstSectionVisible]);

  return (
    <div className='bg-white dark:bg-slate-800'>
      <section 
        id={language === 'En' ? 'Home' : 'Inicio'} 
        className="w-full min-h-screen relative" >
        <div className='fixed w-full z-[1001]'>
          <NavBar 
            language={language} 
            setlanguage={setlanguage} 
            scrollToSection={scrollToSection} 
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            isFirstSectionVisible={isFirstSectionVisible}
          />
          </div>    
        <div className='flex justify-start items-center fixed w-full min-h-screen z-10'>
          <TypingAnimation language={language}/>
        </div>
        <video autoPlay loop muted className='w-full h-full fixed top-0 left-0 object-cover'>
          <source src={UrlVideo} type='video/mp4'/>
        </video> 
        {/* <div className='w-full h-[100%] absolute bottom-0 left-0 bg-gradient-to-t from-white from-5% to-50% dark:from-slate-800' style={{ filter: 'grayscale(10%)' }}></div> */}
        {/* <div className='w-full h-full flex justify-center items-end absolute bottom-0 left-0'>
          <AnimationDown />
        </div> */}
      </section>
      <section 
        id={language === 'En' ? 'About me' : 'Acerca de mi'} 
        className="w-full min-h-screen relative bg-white dark:bg-[#101418] z-[1000] p-6 flex items-center border">
          <About language={language} setlanguage={setlanguage} scrollToSection={scrollToSection}/>
      </section>
      <section 
        id={language === 'En' ? 'Projects' : 'Proyectos'} 
        className="w-full min-h-screen relative bg-white dark:bg-[#101418] z-[1000] p-6 flex items-center border">
        <Projects language={language} setlanguage={setlanguage}/>
      </section>
      <section 
        id={language === 'En' ? 'Contact' : 'Contactame'} 
        className="w-full min-h-screen relative bg-white dark:bg-[#101418] z-[1000] p-6 flex items-center border">
          <Contact language={language}/>
      </section>
    </div>
  );
}

export default App;
