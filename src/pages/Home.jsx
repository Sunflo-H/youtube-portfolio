import React from "react";
import { useQuery } from "react-query";
import RecentlyVideos from "../components/main/RecentlyVideos";
import RecommendVideos from "../components/main/RecommendVideos";
import Videos from "../components/main/Videos";

export default function Home() {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  return (
    <div>
      <section>
        {/* <h1 className="text-2xl">Recently Videos</h1>
        <Videos type="recent" />
        <button>SHOW MORE</button> */}
        <RecentlyVideos />
      </section>

      <section>
        {/* <h1 className="text-2xl">Recommend</h1>
        <Videos type="recommend" />
        <button>SHOW MORE</button> */}
        <RecommendVideos />
      </section>
    </div>
  );
}

async function getVideos({ queryKey }) {
  const url = `/data/popular.json`;
  const res = await fetch(url);
  const data = await res.json();
  return data.items;
}
