import React from "react";
import {useParams } from "react-router-dom";
import RelatedMovies from "../Components/RelatedMovies";
import {
  useGetKnownForQuery,
  useGetActorDetailsQuery,
} from "../redux/MoviesApi";
const ActorDetails = () => {
  const ImgdUrl = "https://image.tmdb.org/t/p/w500";
  const { actorid } = useParams();
  const { data: ActorData } = useGetActorDetailsQuery(actorid);
  const { data } = useGetKnownForQuery(actorid);
  const KnownFor = data?.cast?.slice(0, 5);

  return (
    <div>
      <div className="container flex flex-col items-center md:items-start md:flex-row text-gray-300 ">
        <img
          className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] rounded-md"
          src={ImgdUrl + ActorData?.profile_path}
        />
        <div className="flex gap-5 text-sm font-thin flex-col text-center md:text-left justify-start ml-7">
          <p>{ActorData?.birthday}</p>
          <h1 className="text-3xl font-bold">{ActorData?.name}</h1>
          <p className="font-medium">
            {ActorData?.gender === 1 ? "Female" : "Male"}
          </p>
          <p>{ActorData?.biography}</p>
          <p className="font-medium">{ActorData?.place_of_birth}</p>
        </div>
      </div>
      <div className="w-full bg-[#252525] mb-14">
        <div className="container">
          <h1 className="text-2xl text-center sm:text-3xl font-bold my-5">
            Known For
          </h1>
          <div className="flex justify-center items-center gap-2">
            {KnownFor?.map((movie, key) => (
              <RelatedMovies url={ImgdUrl} {...movie} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
