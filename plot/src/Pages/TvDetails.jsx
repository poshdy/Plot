import React from "react";
import {
  useGetTvCastQuery,
  useGetTvDetailsQuery,
  useGetTvRecoQuery,
} from "../redux/MoviesApi";
import { Link, useParams } from "react-router-dom";
import RelatedTv from "../Components/RelatedTv";
import { motion } from "framer-motion";
import { container, item, itemtwo } from "../animation/motion";
import { TvHeaderDetails } from "../Components";

const TvDetails = () => {
  const ImgUrl = "https://image.tmdb.org/t/p/w500";
  const { tvid } = useParams();
  const { data: TvData } = useGetTvDetailsQuery(tvid);
  const { data: TvCast } = useGetTvCastQuery(tvid);
  const { data: TvReco } = useGetTvRecoQuery(tvid);

  const Cast = TvCast?.cast?.slice(0, 5);
  const Related = TvReco?.results?.slice(0, 5);
  return (
    <div className="w-full">
      <div className="w-full  absolute top-0">
        <img
          className="w-full h-[550px] blur-sm opacity-70 "
          src={ImgUrl + TvData?.backdrop_path}
        />
      </div>
      <TvHeaderDetails ImgUrl={ImgUrl} {...TvData} />
      <div className="flex gap-3 w-full justify-center items-center md:justify-end text-center">
        {Cast?.map((actor, key) => (
          <div key={key}>
            <Link to={`/actor/${actor?.id}`}>
              <img
                className=" w-16 h-16 md:w-24 md:h-24 rounded-[50%] object-cover"
                src={ImgUrl + actor?.profile_path}
              />
            </Link>
            <p className="text-sm  md:text-base font-bold w-16 truncate text-center">
              {actor?.name}
            </p>
            <p className="text-sm  md:text-base truncate w-16 font-thin text-center">
              {actor?.character}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full bg-[#252525] mb-14">
        <div className="container">
          <h1 className="text-lg sm:text-3xl text-center font-bold pt-2 my-5">
            RELATED MOVIES
          </h1>
          <div className="flex justify-center items-center gap-2">
            {Related?.map((show, key) => (
              <RelatedTv url={ImgUrl} {...show} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvDetails;
