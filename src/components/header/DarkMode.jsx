import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import { BsYoutube, BsSunFill, BsMoonFill, BsSearch } from "react-icons/bs";

export default function DarkMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) localStorage.theme = "dark";
    else localStorage.theme = "light";

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="flex items-center p-2 cursor-pointer"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <BsMoonFill className="text-xl text-dark-text " />
      ) : (
        <BsSunFill className="text-xl text-light-text" />
      )}
    </div>
  );
}
