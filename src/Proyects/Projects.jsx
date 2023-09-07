import React from 'react'
import {projects} from './data.js'

function Projects({ language }) {
  const title = language === 'Es' ? 'Mis Proyectos' : 'My Projects';
  console.log(projects);
  return (
    <>
      <div className='w-full m-auto'>
        <h2 className='font-condensed font-black tracking-widest py-9 text-center visible text-3xl dark:text-white'>{title}</h2>
        <div className=''>
          {projects.map((project, index) => (
            <div key={index} className={`md:flex md:w-full md:h-full md:justify-evenly my-6 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* CONTENT TEXT */}
              <div className='md:self-center'>
                <div className='w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center'>
                  <div>
                    <h2 className='font-condensed font-black tracking-widest py-2 visible text-2xl dark:text-white'>
                      {project.name}
                    </h2>
                    <p className='font-condensed tracking-widest py-2 text-base lg:text-xl dark:text-white'>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTENT IMAGE */}
              <div className='md:self-center'>
                <div className='w-full h-full m-auto max-w-[500px] md:min-w-[350px] md:h-auto md:max-w-[550px]'>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.name} className='rounded'/>
                  </a>
                </div>
              </div>
            </div>
          ))}  
        </div>
      </div>
    </>
  )
}

export default Projects
