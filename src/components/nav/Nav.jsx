import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { MdSubscriptions } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

export default function Nav() {
  const [nav, setNav] = useState("Home");

  const arr = [
    "Home",
    "Trending",
    "Subscriptions",
    "History",
    "Watch Later",
    "Liked Videos",
  ];

  const navigate = useNavigate();

  const handleClick = (e) => {
    const value = e.currentTarget.innerText.replace(" ", "");
    let url = `/`;
    switch (value) {
      case "Trending":
      case "Subscriptions":
      case "History":
        url = `/feed/${value}`;
        break;
      case "WatchLater":
      case "LikedVideos":
        url = `/playlist/${value}`;
        break;
    }

    setNav(value);
    navigate(url);
  };
  return (
    <div className="w-24 bg-youtube py-6 text-white">
      {arr.map((value, index) => (
        <NavItem
          onClick={handleClick}
          nav={nav}
          value={value}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}
