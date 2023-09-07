import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import TypingAnimation from './TypingAnimation/TypingAnimation';
import About from './About/About';
import Projects from './Proyects/Projects';

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

  return (
    <div className='bg-white dark:bg-slate-800'>
      <section 
        id={language === 'En' ? 'Home' : 'Inicio'} 
        className="w-full min-h-screen relative" >
        <div className='fixed w-full z-50'>
        <NavBar language={language} setlanguage={setlanguage}/>
        </div>
        <div className='flex justify-start items-center w-full min-h-screen relative z-10'>
          <TypingAnimation language={language}/>
        </div>
        <video autoPlay loop muted className='w-full h-full absolute top-0 left-0 object-cover'>
          <source src={UrlVideo} type='video/mp4'/>
        </video> 
        <div className='w-full h-[100%] absolute bottom-0 left-0 bg-gradient-to-t from-white from-5% to-50% dark:from-slate-800' style={{ filter: 'grayscale(10%)' }}></div>
        <div className='w-full h-full flex justify-center items-end absolute bottom-0 left-0'>
          <i class="bi bi-chevron-compact-down px-10 z-50 bg-white"></i>
        </div>
      </section>
      <section 
        id={language === 'En' ? 'About me' : 'Acerca de mi'} 
        className="w-full relative p-6">
        <About language={language} setlanguage={setlanguage} />
      </section>
      <section 
        id={language === 'En' ? 'Projects' : 'Proyectos'} 
        className="w-full min-h-screen relative p-6">
        <Projects language={language} setlanguage={setlanguage}/>
      </section>
      <section 
        id={language === 'En' ? 'Contact' : 'Contactame'} 
        className="w-full min-h-screen relative p-6 border border-red">
        <p>Contactame</p>
      </section>
    </div>
  
  );
}

export default App;
