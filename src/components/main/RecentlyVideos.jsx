import React from "react";
import { useQuery } from "react-query";
import Videos from "./Videos";

export default function RecentlyVideos() {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  return (
    <>
      <h1 className="text-2xl">Recently Videos</h1>
      {videos && <Videos videos={videos} />}

      <button>SHOW MORE</button>
    </>
  );
}

async function getVideos({ queryKey }) {
  const url = `/data/popular.json`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data.items;
}
