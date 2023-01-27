import React, { useContext, useEffect } from "react";
import { BsYoutube, BsSunFill, BsMoonFill, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
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
    <div className="flex justify-between px-4 py-6 border-b border-light-calloutbg">
      {/* 로고 */}
      <div
        className=" flex items-center cursor-pointer font-roboto"
        onClick={() => navigate("/")}
      >
        <BsYoutube className="text-youtube text-2xl mr-1" />
        <span className="text-xl font-semibold tracking-tight text-light-logo dark:text-dark-logo">
          YouTube
        </span>
      </div>

      {/* 검색 */}
      <form className="flex w-full max-w-lg border border-gray-400 rounded-2xl">
        <input
          className="w-11/12 h-full ml-4 outline-none"
          type="text"
          placeholder="Search..."
        />
        <button className="h-full m-auto cursor-pointer text-gray-400">
          <BsSearch className="mx-4" />
        </button>
      </form>

      {/* 다크모드 */}
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
    </div>
  );
}
