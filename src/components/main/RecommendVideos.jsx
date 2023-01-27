import React from "react";
import { useQuery } from "react-query";
import Videos from "./Videos";

export default function RecommendVideos() {
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
      <h1 className="text-2xl">Recommend</h1>
      {/* <Videos /> */}
      <button>SHOW MORE</button>
    </>
  );
}

async function getVideos({ queryKey }) {
  const url = `/data/popular.json`;
  const res = await fetch(url);
  const data = await res.json();
  return data.items;
}
