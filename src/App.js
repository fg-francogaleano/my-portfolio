import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import TypingAnimation from './TypingAnimation/TypingAnimation';

const UrlVideo = "https://res.cloudinary.com/dfmkjxjsf/video/upload/v1690902266/varietales/notebook_-_197_Original_ohqqim.mp4"

function App() {

  /* IDIOMA */
  const[ language, setlanguage ] = useState(localStorage.getItem('language') || 'Es');
  // console.log('ESTADO LOCAL', language, typeof language, 'LOCALSTORANGE',localStorage.getItem('language'), typeof localStorage.getItem('language'));
  useEffect(()=>{
    console.log('ESTADO LOCAL',typeof language,language);
    /* SI ESTÁ SETEADO EN EL LOCALSTORANGE */
    if (localStorage.getItem('language') !== null) {
      // console.log('SI ESTÁ SETEADO EN EL LOCALSTORANGE', localStorage.getItem('language'), typeof JSON.parse(localStorage.getItem('language')));
      if (localStorage.getItem('language') === 'Es') {
          localStorage.setItem('language', 'En');
      } else {
          localStorage.setItem('language', 'Es');
      }

    /* SI NO ESTÁ SETEADO EN EL LOCALSTORANGE */
  } else {
    console.log('SI NO ESTÁ SETEADO EN EL LOCALSTORANGE');
      if (language === 'Es') {
        localStorage.setItem('language', 'En');
      } else {
        localStorage.setItem('language', 'Es');
      }
  }
  },[language])

  return (
    <>
      <section id={language === 'En' ? 'Home' : 'Inicio'} className="w-full min-h-screen relative" >
        <div className='relative z-10'>
          <NavBar language={language} setlanguage={setlanguage}/>
        </div>
        <div className='flex flex-col justify-center items-center w-full min-h-screen relative z-10'>
          <TypingAnimation language={language}/>
        </div>
        <video autoPlay loop muted className='w-full h-full absolute top-0 left-0 object-cover'>
          <source src={UrlVideo} type='video/mp4'/>
        </video> 
        <div className='w-full h-full absolute top-0 left-0 bg-stone-900 opacity-50 mix-blend-overlay' ></div>
      </section>
      <section id={language === 'En' ? 'About me' : 'Acerca de mi'} className="w-full min-h-screen relative">
        <p>Acerca de mi</p>
      </section>
      <section id={language === 'En' ? 'Projects' : 'Proyectos'} className="w-full min-h-screen relative">
        <p>Proyectos</p>
      </section>
      <section id={language === 'En' ? 'Contact' : 'Contactame'} className="w-full min-h-screen relative">
        <p>Contactame</p>
      </section>
    </>
  
  );
}

export default App;
