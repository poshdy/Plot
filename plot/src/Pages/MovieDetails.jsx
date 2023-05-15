import React from "react";
import {
  useGetMovieDetailsQuery,
  useGetMovieCastQuery,
  useGetMovieRcommendsQuery,
} from "../redux/MoviesApi";
import { Link, useParams } from "react-router-dom";
import RelatedMovies from "../Components/RelatedMovies";
import { HeaderDeatails, Cast } from "../Components";
import { motion } from "framer-motion";
import { container } from "../animation/motion";

const MovieDetails = () => {
  const ImgUrl = "https://image.tmdb.org/t/p/w500";
  const { movieid } = useParams();
  const { data } = useGetMovieDetailsQuery(movieid);
  const { data: MovieCast } = useGetMovieCastQuery(movieid);
  const { data: MovieReco } = useGetMovieRcommendsQuery(movieid);
  const cast = MovieCast?.cast?.slice(0, 5);
  const Related = MovieReco?.results?.slice(0, 5);

  return (
    <div className="w-full">
        <div className="w-full  absolute top-0">
        <img className="w-full h-[550px] blur-sm opacity-50 " src={ImgUrl + data?.backdrop_path} />
      </div>
      <div className="container">
        <HeaderDeatails {...data} ImgUrl={ImgUrl} />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-3 w-full justify-center items-center md:justify-end text-center"
        >
          {cast?.map((actor, i) => (
            <Cast key={i} {...actor} ImgUrl={ImgUrl} />
          ))}
        </motion.div>

      </div>
        <div className="w-full bg-[#252525] mb-14">
          <div className="container">
            <h1 className="text-lg sm:text-3xl text-center font-bold pt-2 my-5">
              RELATED MOVIES
            </h1>
            <div className="flex justify-center items-center gap-2">
              {Related?.map((movie, key) => (
                <RelatedMovies url={ImgUrl} {...movie} key={key} />
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default MovieDetails;
