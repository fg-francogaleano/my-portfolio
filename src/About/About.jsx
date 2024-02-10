import React, { useState } from 'react'
// import SliderSkrill from '../Slider/SliderSrill';
import WhatsappButton from '../WhatsappButton/WhatsappButton';

function About({ language, scrollToSection }) {
  const contact = language === 'Es' ? 'Contáctame' : 'Contact'
  const title = language === 'Es' ? 'Acerca de mi' : 'About me';
  // const img = "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1692823992/varietales/b7c5ca3b-46b6-44e0-8f42-76573ecccb00_j5putc.png";
  const download = language === 'Es' ? 'Descargar CV' : 'Download CV';
  const text1 = language === 'Es' ? 'Hola, soy' : 'Hey, I am';
  const text = language === 'Es' 
  ? 'Tengo +10 de años de experiencia en el ámbito relacionado a la construcción de obras edilícias. Liderar y supervisar grupos de trabajos en este rubro, me ha permitido desarrollar habilidades de gestión, '
  : 'I have +10 years of experience in the field of building construction. Leading and supervising work groups has allowed me to develop management, coordination and decision-making skills in a dynamic environment.Currently, my goal is to consolidate myself in a position where I can add value, as an essential member of a team, addressing large-scale challenges. I am willing to bring the teamwork skills I have cultivated throughout my career and training as a developer.'
  /* HOVER BOTTON CONTACT */
  const [hovered1, setHovered1] = useState(false);

  const handleMouseEnter1 = () => {
    setHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setHovered1(false);
  };
  /* END HOVER BOTTON DOWNLOAD */

  /* HOVER BOTTON DOWNLOAD */
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  /* END HOVER BOTTON DOWNLOAD */
  return (
    <>
      <div className='w-full md:mt-1 self-center'>
        <h2 className='font-condensed font-black tracking-widest visible text-5xl dark:text-white text-center py-9'>
          {title}
          <span className='w-14 h-[2px] bg-tertiary m-auto block rounded-full'></span>
        </h2>
        <div className='md:flex md:w-full md:h-full md:justify-evenly'>
          {/* CONTENT TEXT/BOTTONS */}
          <div className=''>     
            <div className='w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center'>
              <div >
                {/* TEXTS */}
                <h3 className='font-condensed tracking-widest sm:text-6xl text-4xl font-black dark:text-white'>{text1}</h3>
                <h3 className='font-condensed tracking-widest sm:text-8xl text-6xl font-black bg-gradient-to-r from-primary via-secondary  to-tertiary bg-clip-text text-transparent'>Franco Galeano</h3>
                <h3 className='font-condensed tracking-widest sm:text-5xl text-3xl font-black dark:text-white'>DEVELOPER WEB FULL</h3>
                <p className='font-condensed tracking-widest py-2 text-base lg:text-xl dark:text-white'>
                  {text}
                </p>
                {/* BOTTONS */}
                <div className='text-center mt-5 hidden md:block'>                  
                  <div className='w-full flex gap-2'>
                    {/* BOTTON CONTACT */}
                    <div className='w-full'>
                      <button
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                        onClick={() => {
                          setTimeout(()=>{
                            scrollToSection(contact)
                          }, 100);
                        }} 
                        className={`w-full bg-transparent relative overflow-hidden px-4 py-2 rounded-full font-condensed font-black tracking-widest text-xl dark:text-white shadow-2xl transition duration-500 ease-in-out ${hovered1? 'outline outline-1 outline-secondary': 'outline-none'}`}
                      >
                        {contact}
                        <span className={`bg-gradient-to-r from-primary via-secondary to-tertiary absolute h-full right-0 bottom-0 transition-width duration-500 ease-in-out z-[-1] ${hovered1? 'w-0 ': 'w-full'}`}></span> 
                      </button>
                    </div>
                    {/* BOTTON DOWNLOAD CV */}
                    <div className='w-full'>
                      <a href='/Cv-Franco Galeano.pdf' download>
                        <button 
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          className='relative w-full outline outline-1 outline-tertiary text-black px-4 py-2 rounded-full font-condensed font-black tracking-widest text-xl shadow-2xl dark:text-white hover:w-full overflow-hidden' 
                        >
                          <i class="bi bi-download text-black dark:text-white hover:text-tertiary"></i> {download}
                          <span className={`bg-tertiary absolute h-full left-0 bottom-0 transition-width duration-500 ease-in-out z-[-1] ${hovered? 'w-full': 'w-0'}`}>
                          </span>
                            
                        </button>
                      </a>
                    </div>
                  </div>
                  {/* BOTTONS SOCIAL MEDIA */}
                  <div className='w-full flex justify-start py-2'>
                    <ul className='flex mx-3'>
                      {/* LINKEDIN */}
                      <li>
                        <a 
                          href="https://www.linkedin.com/in/fran-galeano/" 
                          rel="noopener noreferrer" 
                          target="_blank"
                          className='mr-2' 
                        >
                            <i className="bi bi-linkedin text-xl dark:text-white"></i>
                        </a>
                      </li>
                      {/* INSTAGRAM */}
                      <li>
                        <a 
                          href="https://www.linkedin.com/in/fran-galeano/" 
                          rel="noopener noreferrer" 
                          target="_blank"
                          className='mr-2'
                        >
                          <i className="bi bi-instagram text-xl dark:text-white"></i>
                        </a>
                      </li>
                      {/* WHATSAPP */}
                      <li>
                        <WhatsappButton />
                      </li>
                      {/* GITHUB */}
                      <li>
                        <a 
                          href="https://github.com/fg-francogaleano" 
                          rel="noopener noreferrer" 
                          target="_blank"
                          className='mr-2'
                        >
                          <i className="bi bi-github text-xl dark:text-white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          {/* CONTENT IMAGE */}
          <div className='md:self-center'>
            <div className='w-full h-full m-auto max-w-[500px] md:min-w-[350px] md:h-auto md:max-w-[500px]'>
              <img 
                src='/imagen1.png' 
                alt="Franco Galeano" 
              />
            </div>

            {/* VERSION MOVILE */}
            <div className='text-center mt-5 block md:hidden'>
              {/* BOTTON CONTACT */}
              <div className='max-w-[500px] m-auto flex'>
                <div className='w-full gap-1'>
                  <button
                    onClick={() => {
                      setTimeout(()=>{
                        scrollToSection(contact)
                      }, 100);
                    }} 
                    className='w-full my-2 bg-gradient-to-r from-primary via-secondary  to-tertiary px-4 py-2 rounded-full font-condensed font-black tracking-widest text-xl shadow-2xl text-white'
                  >
                    {contact}
                  </button>
                  <a href='/Cv-Franco Galeano.pdf' download>
                    <button 
                      className='w-full my-2 outline outline-1 outline-secondary px-4 py-2 rounded-full font-condensed font-black tracking-widest text-xl shadow-2xl text-black dark:text-white' 
                    >
                      {download} <i className="bi bi-download text-black"></i>
                    </button>
                  </a>

                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className='max-w-[500px] m-auto flex justify-start mt-2'>
                {/* LINKEDIN */}
                <a 
                  href="https://www.linkedin.com/in/fran-galeano/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                  className='mx-2' 
                >
                  <i className="bi bi-linkedin text-xl  dark:text-white"></i>
                </a>
                {/* INSTAGRAM */}
                <a 
                  href="https://www.linkedin.com/in/fran-galeano/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                  className='mx-2'                
                >
                  <i className="bi bi-instagram text-xl dark:text-white"></i>
                </a>
                {/* WHATSAPP */}
                <WhatsappButton />
                {/* GITHUB */}
                <a 
                  href="https://github.com/fg-francogaleano" 
                  rel="noopener noreferrer" 
                  target="_blank"
                  className='mx-2'
                >
                  <i className="bi bi-github text-xl dark:text-white"></i>
                </a>
              </div>
            </div>            
          </div>
        </div>
        {/* SLIDER */}
        {/* <div className='w-min-full md:w-[75%] m-auto py-8'>
          <SliderSkrill />
        </div> */}
      </div>
    </>
  )
}

export default About
