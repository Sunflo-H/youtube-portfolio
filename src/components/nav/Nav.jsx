import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { MdSubscriptions } from "react-icons/md";
import NavItem from "./NavItem";

export default function Nav() {
  const [nav, setNav] = useState("Home");
  // const [isActive, setIsActive] = useState(false);

  const arr = [
    "Home",
    "Trending",
    "Subscriptions",
    "History",
    "Watch Later",
    "Liked Videos",
  ];

  /**
   * nav 클릭
   * 클릭한 값으로 nav 활성화
   *
   * 각 nav는 값을 가지고 있어야해 (innerText로 )
   */

  const handleClick = (e) => {
    // console.log(e.target);
    console.log(e.currentTarget.innerText);
    setNav(e.currentTarget.innerText);
    // setNav('')
  };
  return (
    <div className="w-24 h-screen bg-youtube py-6 text-white">
      {arr.map((value, index) => (
        <NavItem
          onClick={handleClick}
          nav={nav}
          value={value}
          index={index}
          key={index}
        />
      ))}
      {/* Home */}
      {/* Trending */}
      {/* Subscription */}
      {/* History */}
      {/* Watch Later */}
      {/* Liked Videos */}
      {/* Help */}
      {/* Settings */}
    </div>
  );
}
