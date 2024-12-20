import React from "react";
// import SliderSkrill from '../Slider/SliderSrill';
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import { motion } from "framer-motion";
import Button from "../Button/Button";

function About({ language, scrollToSection }) {
  const contact = language === "Es" ? "Contáctame" : "Contact";
  const title = language === "Es" ? "Acerca de mi" : "About me";
  // const img = "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1692823992/varietales/b7c5ca3b-46b6-44e0-8f42-76573ecccb00_j5putc.png";
  const download = language === "Es" ? "Descargar CV" : "Download CV";
  const text1 = language === "Es" ? "Hola, soy" : "Hey, I am";
  const text =
    language === "Es"
      ? "Me especializo en crear experiencias web digitales de alta calidad, enfocándome en contenido animado, responsivo e interactivo. Diseño y codifico elementos maravillosamente simples. Trabajo constantemente para mejorar mis habilidades, amo lo que hago."
      : "I specialize in creating high-quality digital web experiences, focusing on animated, responsive and interactive content. I design and code beautifully simple elements. I constantly work to improve my skills, I love what I do";
  /* HOVER BOTTON CONTACT */
  // const [hovered1, setHovered1] = useState(true);

  // const handleMouseEnter1 = () => {
  //   setHovered1(true);
  // };

  // const handleMouseLeave1 = () => {
  //   setHovered1(false);
  // };
  /* END HOVER BOTTON DOWNLOAD */

  /* HOVER BOTTON DOWNLOAD */
  // const [hovered, setHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setHovered(false);
  // };

  // const variants = {
  //   visible: { opacity: 1, x: 0 },
  //   hidden: { opacity: 0, x: -50 },
  // }
  /* END HOVER BOTTON DOWNLOAD */
  const handleToSection = () => {
    scrollToSection(contact);
  };
  return (
    <>
      <div className="w-full md:mt-1 self-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="font-condensed font-black tracking-widest visible md:text-5xl text-4xl dark:text-white text-center py-9"
        >
          {title}
          {/* <span className="w-14 h-[2px] bg-tertiary m-auto block rounded-full"></span> */}
        </motion.h2>
        <div className="md:flex md:w-full md:h-full md:justify-evenly">
          {/* VERSION DESKTOP */}
          <div className="">
            <div className="w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center">
              <div>
                {/* TEXTS */}
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -50 },
                  }}
                  className="font-condensed tracking-widest sm:text-5xl text-3xl font-black dark:text-white"
                >
                  {text1}
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 },
                  }}
                  className="font-condensed tracking-widest sm:text-8xl text-6xl font-black bg-gradient-to-r from-primary via-secondary  to-tertiary bg-clip-text text-transparent"
                >
                  Franco Galeano
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 },
                  }}
                  className="font-condensed tracking-widest sm:text-5xl text-3xl font-black dark:text-white"
                >
                  DEVELOPER WEB FULL
                </motion.h3>

                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -50 },
                  }}
                  className="font-condensed tracking-widest py-2 text-base lg:text-xl dark:text-white"
                >
                  {text}
                </motion.p>

                {/* BOTTONS/ SOCIAL MEDIA */}
                <div className="text-center mt-1 hidden md:block">
                  <div className="w-full flex gap-2">
                    {/* BOTTON CONTACT */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -50 },
                      }}
                      className="w-full"
                    >
                      <Button
                        childen={contact}
                        type={"button"}
                        onAction={handleToSection}
                      />
                    </motion.div>
                    {/* BOTTON DOWNLOAD CV */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 50 },
                      }}
                      className="w-full "
                    >
                      <a href="/Cv-Franco Galeano.pdf" download>
                        <Button
                          secondary={true}
                          childen={download}
                          type={"button"}
                        />
                      </a>
                    </motion.div>
                  </div>
                  {/* BOTTONS SOCIAL MEDIA */}
                  <div className="w-full flex justify-start py-2">
                    <ul className="flex mx-3">
                      {/* LINKEDIN */}
                      <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: -50 },
                        }}
                      >
                        <a
                          href="https://www.linkedin.com/in/fran-galeano/"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="mr-2"
                        >
                          <i className="bi bi-linkedin text-xl dark:text-white"></i>
                        </a>
                      </motion.li>
                      {/* INSTAGRAM */}
                      <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: -50 },
                        }}
                      >
                        <a
                          href="https://www.linkedin.com/in/fran-galeano/"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="mr-0"
                        >
                          <i className="bi bi-instagram text-xl dark:text-white"></i>
                        </a>
                      </motion.li>
                      {/* WHATSAPP */}
                      <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: 50 },
                        }}
                      >
                        <WhatsappButton />
                      </motion.li>
                      {/* GITHUB */}
                      <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: 50 },
                        }}
                      >
                        <a
                          href="https://github.com/fg-francogaleano"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="mr-2"
                        >
                          <i className="bi bi-github text-xl dark:text-white"></i>
                        </a>
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT IMAGE/VERSION MOBILE */}
          <div className="md:self-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 },
              }}
              className="w-full h-full m-auto max-w-[500px] md:min-w-[300px] md:h-auto md:max-w-[350px] 2xl:min-w-[350px] 2xl:h-auto 2xl:max-w-[500px]"
            >
              <img src="/image1.png" alt="Franco Galeano" />
            </motion.div>

            {/* VERSION MOVILE */}
            <div className="text-center mt-5 block md:hidden">
              {/* BOTTON CONTACT */}
              <div className="max-w-[500px] m-auto flex">
                <div className="w-full gap-1">
                  {/* BOTTON CONTACT */}
                  <motion.div
                    className="py-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -50 },
                    }}
                  >
                    <Button
                      onAction={scrollToSection}
                      childen={contact}
                      type={"button"}
                    />
                  </motion.div>
                  {/* BOTTON DOWNLOAND */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 50 },
                    }}
                  >
                    <a href="/Cv-Franco Galeano.pdf" download>
                      <Button
                        secondary={true}
                        childen={download}
                        type={"button"}
                      />
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div>
                <ul className="max-w-[500px] m-auto flex justify-start mt-2">
                  {/* LINKEDIN */}
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -20 },
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/fran-galeano/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-2"
                    >
                      <i className="bi bi-linkedin text-xl  dark:text-white"></i>
                    </a>
                  </motion.li>
                  {/* INSTAGRAM */}
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -20 },
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/fran-galeano/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-2"
                    >
                      <i className="bi bi-instagram text-xl dark:text-white"></i>
                    </a>
                  </motion.li>
                  {/* WHATSAPP */}
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 100 },
                    }}
                  >
                    <WhatsappButton />
                  </motion.li>
                  {/* GITHUB */}
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 100 },
                    }}
                  >
                    <a
                      href="https://github.com/fg-francogaleano"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-2"
                    >
                      <i className="bi bi-github text-xl dark:text-white"></i>
                    </a>
                  </motion.li>
                </ul>
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
  );
}

export default About;
