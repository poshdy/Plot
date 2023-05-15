import React from "react";
import { Link, useParams } from "react-router-dom";
const MovieCard = ({ poster_path, id, url, showId }) => {
  return (
    <div className="">
      <Link to={showId ? `/tv/${showId}` : `/movie/${id}`}>
        <img className=" w-52 h-60 md:w-72 md:h-80 rounded-md" src={url + poster_path} />
      </Link>
    </div>
  );
};

export default MovieCard;
