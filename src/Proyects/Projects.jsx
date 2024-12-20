import React, { useState } from "react";
import { projects } from "./data.js";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";

function Projects({ language }) {
  const title = language === "Es" ? "Proyectos" : "Projects";
  const SeeMore = language === "Es" ? "Ver mas" : "See more";
  const SeeLess = language === "Es" ? "Ver menos" : "See Less";
  const text = language === "Es" ? "No hay mas proyectos" : "No more projects";
  const web = language === "Es" ? "Ir a la web" : "Go to web";

  /* HOVER */
  const [hoveredProjects, setHoveredProjects] = useState(
    Array(projects.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedHoveredProjects = [...hoveredProjects];
    updatedHoveredProjects[index] = true;
    setHoveredProjects(updatedHoveredProjects);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredProjects = [...hoveredProjects];
    updatedHoveredProjects[index] = false;
    setHoveredProjects(updatedHoveredProjects);
  };
  /* END  HOVER */

  /* SEE MORE */
  const [countElement, setCountElement] = useState(2);

  let projectsRender = projects.slice(0, countElement);

  const handleCount = () => {
    setCountElement((prev) => prev + 2);
    console.log(countElement);
  };
  /* END SEE MORE */
  return (
    <>
      <div className="w-full">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="font-condensed font-black tracking-widest py-9 text-center visible text-4xl md:text-5xl dark:text-white"
        >
          {title}
          {/* <span className="w-14 h-[2px] bg-tertiary m-auto block rounded-full"></span> */}
        </motion.h2>
        <div className="">
          {projectsRender.map((project, index) => (
            <div key={index}>
              <div key={index} className={` md:w-full  my-6`}>
                <div
                  className={`md:flex md:w-full md:h-full md:justify-evenly my-6 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* CONTENT TEXT */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 50 },
                    }}
                    className="md:self-center p-2"
                  >
                    <div className="w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center">
                      <div>
                        <h2 className="font-condensed font-black tracking-widest py-2 visible text-2xl dark:text-white">
                          {project.name}
                        </h2>
                        <p className="font-condensed tracking-widest py-2 text-base lg:text-xl dark:text-white">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CONTENT IMAGE */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -50 },
                    }}
                    className="md:self-center p-2 rounded"
                  >
                    <div className="w-full h-full m-auto max-w-[500px] md:min-w-[350px] md:h-auto md:max-w-[550px] relative  rounded">
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <div
                          // className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"
                          onMouseEnter={() => {
                            handleMouseEnter(index);
                          }}
                          onMouseLeave={() => {
                            handleMouseLeave(index);
                          }}
                        ></div>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="rounded group-hover:scale-125 transition-all duration-500"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        />
                        {hoveredProjects[index] && (
                          <span className="absolute top-0 left-0 text-white p-2 z-50">
                            {web}
                          </span>
                        )}
                      </a>
                    </div>
                  </motion.div>
                </div>

                {index < projectsRender.length - 1 && (
                  <div className="w-[75%] m-auto">
                    <Divider />
                  </div>
                )}
              </div>
              <div>
                {/* SEE MORE */}
                {projectsRender.length < projects.length &&
                  index === projectsRender.length - 1 && (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                      }}
                      className="text-center"
                    >
                      <button
                        className="outline outline-1 outline-tertiary text-black px-4 py-2 rounded-full font-condensed font-black tracking-widest text-xl shadow-2xl dark:text-white"
                        onClick={handleCount}
                      >
                        {SeeMore}
                      </button>
                    </motion.div>
                  )}

                {/* SEE LESS */}
                {projectsRender.length === projects.length &&
                  index === projectsRender.length - 1 && (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                      }}
                      className="text-center flex flex-col"
                    >
                      <span className="inline p-2">{text}</span>
                      <div className="inline p-2 font-condensed font-black tracking-widest">
                        <button
                          className="outline outline-1 outline-tertiary text-black px-4 py-2 rounded-full font-condensed font-black tracking-widest text-xl shadow-2xl dark:text-white"
                          onClick={() => setCountElement(2)}
                        >
                          {SeeLess}
                        </button>
                      </div>
                    </motion.div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
