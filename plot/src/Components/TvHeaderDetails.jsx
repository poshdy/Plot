import React from "react";
import { motion } from "framer-motion";
import { container, item, itemtwo } from "../animation/motion";

const TvHeaderDetails = ({
  ImgUrl,
  poster_path,
  vote_average,
  genres,
  original_name,
  first_air_date,
  overview,
  number_of_episodes,
  number_of_seasons,
  episode_run_time,
  created_by,
}) => {
  return (
    <div className="mt-[500px]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container flex flex-col items-center md:items-start md:flex-row text-gray-300 "
      >
        <motion.img
          variants={item}
          className="w-[200px] h-[250px] md:w-[300px] md:h-[400px] rounded-md"
          src={ImgUrl + poster_path}
        />
        <motion.div variants={itemtwo} className="flex flex-col text-center md:text-left  items-center md:items-start gap-2 p-4">
          <motion.p variants={itemtwo} className="text-base font-thin">
            {first_air_date}
          </motion.p>
          <motion.h1 variants={itemtwo} className="text-3xl font-bold">
            {original_name}
          </motion.h1>
          <motion.p variants={itemtwo} className="text-base font-thin">
            {overview}
          </motion.p>
          <motion.div variants={itemtwo} className="flex flex-row gap-1">
            {genres?.map((genre, key) => (
              <motion.p
                key={key}
                variants={itemtwo}
                className="text-base font-normal"
              >
                {genre?.name}
              </motion.p>
            ))}
          </motion.div>
          <div className="flex gap-2 ">
            <p className="text-base font-thin">{number_of_seasons} Season</p>
            <p className="text-base font-thin">{number_of_episodes} Episodes</p>
            <p className="text-base font-thin">Rate {vote_average}</p>
            <p className="text-base font-thin">{episode_run_time} min</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-base font-normal">Created by :</p>
            {created_by?.map((pro, key) => (
              <p key={key} className="text-base font-normal">
                {pro.name}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TvHeaderDetails;
