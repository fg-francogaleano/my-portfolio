import React from 'react'

function About({ language }) {
  const title = language === 'Es' ? 'Acerca de mi' : 'About me';
  const img = "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1692823992/varietales/b7c5ca3b-46b6-44e0-8f42-76573ecccb00_j5putc.png";
  const text = language === 'Es' 
  ? 'Tengo +10 de años de experiencia en el ámbito relacionado a la construcción de obras edilícias. Liderar y supervisar grupos de trabajos en este rubro, me ha permitido desarrollar habilidades de gestión, cordinación y toma de decisiones en un entorno dinámico.Actualmente, mi objetivo es consolidarme en una posición donde pueda aportar valor agregado, como miembro esencial de un equipo, abordando desafíos de gran envergadura. Estoy listo para proporcionar, las habilidades de trabajo en equipo que he cultivado a lo largo de mi trayectoria y formación como desarrollador.'
  : 'I have +10 years of experience in the field of building construction. Leading and supervising work groups has allowed me to develop management, coordination and decision-making skills in a dynamic environment.Currently, my goal is to consolidate myself in a position where I can add value, as an essential member of a team, addressing large-scale challenges. I am willing to bring the teamwork skills I have cultivated throughout my career and training as a developer.'
  return (
    <>
      <div className=' md:m-auto md:mt-1'>
      <h2 className='font-condensed font-black tracking-widest visible text-3xl dark:text-white text-center py-9'>
                  {title}
                </h2>
        <div className='md:flex md:w-full md:h-full md:justify-evenly'>
          {/* CONTENT TEXT */}
          <div className=''>     
            <div className='w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center'>
              <div >
                {/* <h2 className='font-condensed font-black tracking-widest py-2 visible text-xl dark:text-white'>
                  {title}
                </h2> */}
                <p className='font-condensed tracking-widest py-2 text-base lg:text-xl dark:text-white'>
                  {text}
                </p>  
              </div>
            </div>
          </div>

          {/* CONTENT IMAGE */}
          <div className='md:self-center'>
            <div className='w-full h-full m-auto max-w-[500px] md:min-w-[350px] md:h-auto md:max-w-[550px] '>
              <img 
                src={img} 
                alt="Franco Galeano" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
