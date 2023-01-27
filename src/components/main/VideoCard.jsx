import React from "react";

export default function VideoCard({ video }) {
  console.log(video);
  const { thumbnails, title, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} />
      <p>{title}</p>
      <p>{publishedAt}</p>
    </li>
  );
}
