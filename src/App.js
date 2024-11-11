import { useEffect, useState } from "react";
import "./App.css";
// import TypingAnimation from "./TypingAnimation/TypingAnimation";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Main from "./Main/Main";
import Header from "./Header/Header";

function App() {
  /* LANGUAGE */
  const [language, setlanguage] = useState(
    localStorage.getItem("language") || "Es"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  /* END LANGUAGE */

  /* THEME DARK */
  const [themeDark, setThemeDark] = useState(
    localStorage.getItem("color-theme") || "light"
  );

  useEffect(() => {
    if (themeDark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("color-theme", themeDark);
  }, [themeDark]);

  const toggleTheme = () => {
    setThemeDark((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const theme = createTheme({
    palette: {
      mode: themeDark,
      primary: {
        main: "#FB3088",
        dark: "#FFFFFF",
      },
      secondary: {
        main: "#083088",
      },
    },
  });
  /* END DARK */

  /* SCROLL STYLES NAV */
  const initial = language === "Es" ? "Inicio" : "Home";
  const [currentSection, setCurrentSection] = useState(initial);
  /* END SCROLL STYLES NAV */

  /* SCROLL SECTION */
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
      // setCurrentSection(sectionId);
    }
  };
  /* END SCROLL SECTION */

  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById(
        language === "En" ? "Home" : "Inicio"
      );
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        if (rect.top - 50 <= -window.innerHeight) {
          setIsFirstSectionVisible(true);
        } else {
          setIsFirstSectionVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [language, isFirstSectionVisible]);

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-white dark:bg-slate-800 w-full overflow-x-hidden">
        <Header
          language={language}
          setlanguage={setlanguage}
          scrollToSection={scrollToSection}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isFirstSectionVisible={isFirstSectionVisible}
          themeDark={themeDark}
          toggleTheme={toggleTheme}
        />

        <Main
          language={language}
          setlanguage={setlanguage}
          scrollToSection={scrollToSection}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
