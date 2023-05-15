import React from "react";
import { useGetDiscoverQuery } from "../redux/MoviesApi";
import MovieCard from "../Components/MovieCard";
import HeroSec from "../Components/HeroSec";

const Dicover = () => {
  const ImgdUrl = "https://image.tmdb.org/t/p/w500";
  const { data } = useGetDiscoverQuery();
  const MovieData = data?.results;
  const hero = data?.results?.slice(0, 1);

  return (
    <div className="w-full mt-96 h-full">
      {hero?.map((movie) => (
        <HeroSec  url={ImgdUrl} {...movie} />
      ))}
      <div className="container">
        <h1 className=" text-5xl text-center font-bold my-7 py-2">Discover</h1>
        <div className=" flex flex-row justify-center my-7 flex-wrap gap-4">
          {MovieData?.map((movie, key) => (
            <MovieCard key={key} data={MovieData} url={ImgdUrl} {...movie} />
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Dicover;
