import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import {
  MdSubscriptions,
  MdPlaylistPlay,
  MdAccessTimeFilled,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";

export default function NavItem({ onClick, nav, value }) {
  const arr = {
    Home: AiFillHome,
    Trending: HiFire,
    Subscriptions: MdSubscriptions,
    History: FaHistory,
    "Watch Later": MdAccessTimeFilled,
    "Liked Videos": CgPlayList,
  };

  return (
    <>
      {nav === value.replace(" ", "") ? (
        <div
          className={`${
            value === "History" && "mt-10"
          } bg-white dark:bg-dark-bg  text-youtube text-center py-2 cursor-pointer`}
          onClick={onClick}
        >
          {React.createElement(arr[value], { className: "text-2xl m-auto" })}
          <span className="text-sm font-bold dark:text-white">{value}</span>
        </div>
      ) : (
        <div
          className={`${
            value === "History" && "mt-10"
          } text-center py-2 cursor-pointer`}
          onClick={onClick}
        >
          {React.createElement(arr[value], { className: "text-2xl m-auto" })}
          <span className="text-sm ">{value}</span>
        </div>
      )}
    </>
  );
}
