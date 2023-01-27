import React from "react";
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  return (
    <ul className="grid grid-cols-5 gap-2 ">
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </ul>
  );
}
