import React from "react" 
import {
  LandingPage,
  TopRatedPreview,
  TrendingMovies,
  TrendingSeries,
} from "../Components";

const Home = () => {
  const ImgdUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="w-[80%] mx-auto my-40">
      <LandingPage ImgdUrl={ImgdUrl} />
      <TrendingMovies ImgdUrl={ImgdUrl} />
      <TrendingSeries ImgdUrl={ImgdUrl} />
      <TopRatedPreview ImgdUrl={ImgdUrl} />
    </div>
  );
};

export default Home;
