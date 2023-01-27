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

  /**
   * 섹션 별로 각기 다른 영상들을 보여줄거야
   * Home : 최신 비디오, 추천비디오
   * Trending : 핫한 비디오,
   * Subscriptions : 구독한 채널의 비디오
   *
   * History : 본 비디오 (한줄로)
   * Watch Later : 나중에 볼 비디오 (한줄로)
   * Liked Video : 좋아요 누른 비디오 (한줄로)
   */

  return (
    <div>
      <section>
        {/* <h1 className="text-2xl">Recently Videos</h1>
        <Videos type="recent" />
        <button>SHOW MORE</button> */}
        <RecentlyVideos />
      </section>

      <section>
        <h1 className="text-2xl">Recommend</h1>
        {/* <Videos type="recommend" /> */}
        <button>SHOW MORE</button>
        {/* <RecommendVideos /> */}
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
