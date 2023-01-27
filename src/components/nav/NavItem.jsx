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

export default function NavItem({ onClick, nav, value, index }) {
  //   const arr = [AiFillHome, HiFire, MdSubscriptions, History, Watch];
  return (
    <>
      {nav === value ? (
        <div
          className={`${
            index === 3 && "mt-10"
          } bg-white text-youtube text-center py-2 cursor-pointer`}
          onClick={onClick}
        >
          {value === "Home" && <AiFillHome className="text-3xl m-auto" />}
          {value === "Trending" && <HiFire className="text-3xl m-auto" />}
          {value === "Subscriptions" && (
            <MdSubscriptions className="text-3xl m-auto" />
          )}
          {value === "History" && <FaHistory className="text-3xl m-auto" />}
          {value === "Watch Later" && (
            <MdAccessTimeFilled className="text-3xl m-auto" />
          )}
          {value === "Liked Videos" && (
            <CgPlayList className="text-3xl m-auto" />
          )}

          <span className="text-sm font-bold">{value}</span>
        </div>
      ) : (
        <div
          className={`${
            index === 3 && "mt-10"
          } text-center py-2 cursor-pointer`}
          onClick={onClick}
        >
          {value === "Home" && <AiFillHome className="text-3xl m-auto" />}
          {value === "Trending" && <HiFire className="text-3xl m-auto" />}
          {value === "Subscriptions" && (
            <MdSubscriptions className="text-3xl m-auto" />
          )}
          {value === "History" && <FaHistory className="text-3xl m-auto" />}
          {value === "Watch Later" && (
            <MdAccessTimeFilled className="text-3xl m-auto" />
          )}
          {value === "Liked Videos" && (
            <CgPlayList className="text-3xl m-auto" />
          )}
          <span className="text-sm ">{value}</span>
        </div>
      )}
    </>
  );
}
