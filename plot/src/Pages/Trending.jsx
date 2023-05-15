import React from "react";
import {
  useGetTrendingMoviesQuery,
  useGetTrendingShowsQuery,
} from "../redux/MoviesApi";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSec from "../Components/HeroSec";
import MovieCard from "../Components/MovieCard";
const Trending = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const ImgdUrl = "https://image.tmdb.org/t/p/w500";
  const { data: TrendM } = useGetTrendingMoviesQuery();
  const { data: TrendS } = useGetTrendingShowsQuery();
  const Trends = TrendM?.results;
  const hero = Trends?.slice(0, 1);

  return (
    <div className="w-full mt-96 h-full">
      {hero?.map((movie, key) => (
        <HeroSec key={key} y={y} url={ImgdUrl} {...movie} />
      ))}
      <div className="container">
        <h1 className=" text-5xl text-center font-bold my-7 py-2">
          TRENDING MOVIES
        </h1>
        <div className=" flex flex-row justify-center my-7 flex-wrap gap-4">
          {Trends?.map((movie, key) => (
            <MovieCard key={key} data={Trends} url={ImgdUrl} {...movie} />
          ))}
        </div>
      </div>
      <div className="w-full mb-5 ">
        <div className="w-full mx-auto bg-[#252525]">
          <h1 className="text-5xl text-center font-bold my-7 py-2">
            TRENDING SHOWS
          </h1>
        </div>
        <div className=" flex flex-row w-[80%] justify-center mx-auto flex-wrap gap-4">
          {TrendS?.results?.map((tvshow, key) => (
            <MovieCard key={key}
              data={TrendS}
              showId={tvshow.id}
              url={ImgdUrl}
              {...tvshow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
