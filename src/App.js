import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import TypingAnimation from './TypingAnimation/TypingAnimation';

const UrlVideo = "https://res.cloudinary.com/dfmkjxjsf/video/upload/v1690902266/varietales/notebook_-_197_Original_ohqqim.mp4"

function App() {
  // MODO DARK
  const[ theme, setTheme ] = useState(localStorage.getItem('color-theme') || "light")
console.log(theme);
  useEffect(()=>{
     // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }

  // if NOT set via local storage previously
    } else {
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
  // FIN DE MODO DARK
  return (
    <>
      <section id='Inicio' className="w-full min-h-screen relative" >
        <div className='relative z-10'>
          <NavBar handlerTheme={handlerTheme} />
        </div>
        <div className='flex flex-col justify-center items-center w-full min-h-screen relative z-10'>
          <TypingAnimation/>
        </div>
        <video autoPlay loop muted className='w-full h-full absolute top-0 left-0 object-cover'>
          <source src={UrlVideo} type='video/mp4'/>
        </video> 
        <div className='w-full h-full absolute top-0 left-0 bg-stone-900 opacity-50 mix-blend-overlay' ></div>
      </section>
      <section id='Acerca de mi' className="w-full min-h-screen relative">
        <p>Acerca de mi</p>
      </section>
      <section id='Proyectos' className="w-full min-h-screen relative">
        <p>Proyectos</p>
      </section>
      <section id='Contactame' className="w-full min-h-screen relative">
        <p>Contactame</p>
      </section>
    </>
  
  );
}

export default App;
