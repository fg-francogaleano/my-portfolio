import React from "react";
import NavBar from "../NavBar/NavBar";

function Header({
  language,
  setlanguage,
  scrollToSection,
  currentSection,
  setCurrentSection,
  isFirstSectionVisible,
  themeDark,
  toggleTheme,
}) {
  return (
    <header className="fixed w-full z-[1001]">
      <NavBar
        language={language}
        setlanguage={setlanguage}
        scrollToSection={scrollToSection}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        isFirstSectionVisible={isFirstSectionVisible}
        themeDark={themeDark}
        toggleTheme={toggleTheme}
      />
    </header>
  );
}

export default Header;
