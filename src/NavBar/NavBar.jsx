import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import { motion } from "framer-motion";

function NavBar({
  language,
  setlanguage,
  scrollToSection,
  currentSection,
  setCurrentSection,
  isFirstSectionVisible,
  toggleTheme,
  themeDark,
}) {
  // console.log(toggleThemeMode);
  /* SCROLL STYLES NAV */
  // const [scroll, setScroll] = useState(true);
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
  const [isOpen, setIsOpen] = useState(false);
  /* END MENU BURGER */

  /* BUTTON NAV */
  const navigationsEs = [
    { name: "Inicio", position: 0, icon: "bi-house" },
    { name: "Acerca de mi", position: 962, icon: "bi-person" },
    { name: "Proyectos", position: 1924, icon: "bi-file-earmark-text" },
    { name: "Contáctame", position: 2886, icon: "bi-envelope" },
  ];
  const navigationsEn = [
    { name: "Home", position: 0, icon: "bi-house" },
    { name: "About me", position: 962, icon: "bi-person" },
    { name: "Projects", position: 1924, icon: "bi-file-earmark-text" },
    { name: "Contact", position: 2886, icon: "bi-envelope" },
  ];
  const navigations = language === "En" ? navigationsEn : navigationsEs;
  /* END BUTTON NAV */

  /* THEME DARK */
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("color-theme") || "light"
  // );

  // useEffect(() => {
  //   /* SI ESTÁ SETEADO EN EL LOCALSTORANGE */
  //   if (localStorage.getItem("color-theme")) {
  //     if (localStorage.getItem("color-theme") === "light") {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("color-theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("color-theme", "light");
  //     }

  //     /* SI NO ESTÁ SETEADO EN EL LOCALSTORANGE */
  //   } else {
  //     console.log("NO ESTÁ SETEADO EN LS", theme);
  //     if (document.documentElement.classList.contains("dark")) {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("color-theme", "light");
  //     } else {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("color-theme", "dark");
  //     }
  //   }
  // }, [theme]);

  // const handlerTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  /* END THEME DARK */

  /* LANGUAGE */
  const iconSpain =
    "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1691671842/varietales/92357_spain_icon_hbn8qn.png";
  const iconUsa =
    "https://res.cloudinary.com/dfmkjxjsf/image/upload/v1691671831/varietales/16039_united_states_of_america_us_usa_icon_natugz.png";
  const idioma = language === "Es" ? "ES" : "EN";
  const [isOpen1, setIsOpen1] = useState(false);

  // const scrollToTop = () => {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }, 250);
  // };

  const handlerLanguage = () => {
    setTimeout(() => {
      setlanguage(language === "Es" ? "En" : "Es");
      setIsOpen1(!isOpen1);
      // setIsOpen(false);
    }, 500);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    // Función que se ejecutará cuando cambie el tamaño de la ventana
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    // Añade un event listener para el evento resize
    window.addEventListener("resize", handleResize);

    // Ejecuta la función inicial para establecer el estado correctamente
    handleResize();

    // Limpia el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-100%" },
  };

  useEffect(() => {
    // Ejecuta tu función aquí cuando isLargeScreen cambie a true
    if (isLargeScreen) {
      // Tu función específica aquí
      setIsOpen(false);
    }
  }, [isLargeScreen]);
  return (
    <>
      <nav
        className={`shadow-md flex justify-end text-lg font-medium tracking-widest h-[68px] md:py-4  ${
          isFirstSectionVisible
            ? "bg-white dark:bg-[#0F0F0F]"
            : "bg-transparent backdrop-filter backdrop-blur-md"
        } `}
      >
        {/* NAVBAR */}
        <motion.div
          animate={isOpen || isLargeScreen ? "open" : "closed"}
          variants={variants}
          className={`shadow-md p-7 h-[380px] w-full flex flex-col items-start justify-around md:shadow-none md:flex-row md:justify-between md:h-auto md:py-0 md:visible ${
            isOpen ? "visible bg-white dark:bg-[#0F0F0F]" : "invisible"
          } ${
            isFirstSectionVisible
              ? "text-black dark:text-white"
              : "md:text-white dark:text-white"
          }`}
        >
          {/* PROFILE */}
          <div className="lg:flex gap-3 hidden ">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgE3b96JxT73GWLaAWUAx4IwKFD8_tuH3dxw&usqp=CAU"
                alt=""
                className="h-8 w-8 rounded-full"
              />
            </div>
            <span className="font-medium tracking-widest">FRANCO GALEANO</span>
          </div>
          {/* NAVLINK/THEME AND LANGUAGE */}
          <div className="w-full h-5/6 flex flex-col md:flex-row md:gap-6 lg:w-auto">
            {/* NAVLINK */}
            <ul className="h-5/6 flex flex-col justify-around md:h-full md:w-full md:flex-row md:gap-6">
              {navigations?.map((navItem, index) => (
                <li key={index} className="navlink">
                  <Link
                    className="pb-1"
                    activeClass={`md:border-b md:border-secondary ${
                      isFirstSectionVisible
                        ? "text-black dark:text-white"
                        : "text-black dark:text-white md:text-white"
                    }`}
                    to={navItem.name}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    onClick={() => setIsOpen(false)}
                  >
                    <i className={`bi ${navItem.icon} md:hidden`}></i>{" "}
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>

            <hr
              style={{ border: "1px solid #C4C4C4" }}
              className={`h-4 self-center hidden md:block ${
                isFirstSectionVisible
                  ? "border border-[#C4C4C4]"
                  : "border border-grey"
              }`}
            />

            {/* THEME/LANGUAGE */}
            <ul className="h-8 flex justify-between md:h-auto md:gap-2">
              {/* THEME DARK */}
              <li className="flex">
                {themeDark === "dark" ? (
                  <i className="bi bi-moon-stars font-normal"></i>
                ) : (
                  <i className="bi bi-sun font-normal"></i>
                )}
                <button
                  onClick={() => {
                    setTimeout(() => {
                      toggleTheme();
                    }, 500);
                    setIsOpen(false);
                  }}
                  className="px-1"
                >
                  {themeDark === "light" ? (
                    <i className="bi bi-toggle2-off px- text-[18px] font-normal"></i>
                  ) : (
                    <i className="bi bi-toggle2-on px- text-[18px] font-normal"></i>
                  )}
                </button>
              </li>

              {/* LANGUAGE */}
              <li className="gap-3">
                <span className="font-normal text-sm">{idioma}</span>
                {/* ICON */}
                <button
                  onClick={() => {
                    setIsOpen1(!isOpen1);
                    // setIsOpen(false)
                  }}
                >
                  {isOpen1 ? (
                    <i className="bi bi bi-chevron-up text-[8px] self-center"></i>
                  ) : (
                    <i className="bi bi bi-chevron-down text-[8px] self-center"></i>
                  )}
                </button>
                {/* DROPDOWN MENU */}
                <div
                  className={`rounded-sm w-9 h-auto md:block relative z-50 ${
                    isOpen1 ? "visible" : "invisible"
                  }`}
                >
                  <div>
                    <button onClick={handlerLanguage}>
                      {language === "Es" ? (
                        <img src={iconUsa} alt="usa" className="px-1" />
                      ) : (
                        <img src={iconSpain} alt="spain" className="px-1" />
                      )}
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* VERSION MOBILE */}
        {/* PROFILE */}
        <div className="absolute top-4 left-4 md:hidden">
          <div className="flex gap-3">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgE3b96JxT73GWLaAWUAx4IwKFD8_tuH3dxw&usqp=CAU"
                alt=""
                className="h-8 w-8 rounded-full"
              />
            </div>
            <span
              className={`font-medium tracking-widest dark:text-white 
              ${isFirstSectionVisible || isOpen ? "text-black" : "text-white"}
              `}
            >
              FRANCO GALEANO
            </span>
          </div>
        </div>
        {/* MENU BURGER */}

        <button
          className="absolute top-3 right-10 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block bg-black dark:bg-white my-2 rounded-full h-[3px] w-[28px] 
                ${isFirstSectionVisible || isOpen ? "bg-black" : "bg-white"}  
                ${
                  isOpen
                    ? "transform rotate-45 origin-top-left translate-y-[5px] translate-x-[8px] transition-transform ease-in-out duration-500"
                    : "rotate-0 transition-transform ease-in-out duration-500"
                }`}
          ></span>
          <span
            className={`block bg-black dark:bg-white my-[9px] rounded-full h-[3px] w-[28px] 
                ${isFirstSectionVisible || isOpen ? "bg-black" : "bg-white"} 
                ${
                  isOpen
                    ? "opacity-0 transition-opacity"
                    : "opacity-100 transition-opacity duration-500 ease-in-out"
                }`}
          ></span>
          <span
            className={`block bg-black dark:bg-white my-2 rounded-full h-[3px] w-[28px] 
                ${isFirstSectionVisible || isOpen ? "bg-black" : "bg-white"} 
                ${
                  isOpen
                    ? "transform rotate-[-45deg] origin-bottom-left translate-x-[8px] transition-transform ease-in-out duration-500"
                    : "rotate-0 transition-transform ease-in-out duration-500"
                }`}
          ></span>
        </button>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavBar;
