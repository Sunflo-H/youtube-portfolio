import React, { useContext, useEffect } from "react";
import { BsYoutube, BsSunFill, BsMoonFill, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import DarkMode from "./DarkMode";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="fixed flex justify-between w-full h-20 px-4 py-6 bg-white border-b border-light-calloutbg dark:bg-black dark:border-dark-calloutbg ">
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
      <form className="flex w-full max-w-lg border border-dark-fg-10 rounded-2xl">
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
      <DarkMode />
    </div>
  );
}
