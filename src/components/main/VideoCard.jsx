import React from "react";

export default function VideoCard({ video }) {
  console.log(video);
  const { thumbnails, title, publishedAt, channelTitle } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} />
      <p>{title}</p>
      <p>{channelTitle}</p>
      <p>{publishedAt}</p>
    </li>
  );
}
