import React from "react";
import { motion } from "framer-motion";
import { container, item, itemtwo } from "../animation/motion";
const HeaderDeatails = ({
  ImgUrl,
  poster_path,
  release_date,
  title,
  overview,
  genres,
  runtime,
  vote_average,
  backdrop_path
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
          className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] rounded-md"
          src={ImgUrl + poster_path}
        />
        <motion.div variants={itemtwo} className="flex flex-col text-center md:text-left  items-center md:items-start gap-2 p-4 ">
          <motion.p variants={itemtwo} className="text-base font-thin">
            {release_date}
          </motion.p>
          <motion.h1 variants={itemtwo} className="text-3xl font-bold">
            {title}
          </motion.h1>
          <motion.p variants={itemtwo} className="text-base font-thin">
            {overview}
          </motion.p>
          <motion.div variants={itemtwo} className="flex flex-row gap-1">
            {genres?.map((genre , i) => (
              <motion.p key={i} variants={itemtwo} className="text-base font-normal">
                {genre?.name}
              </motion.p>
            ))}
          </motion.div>
          <motion.div className="flex gap-2 text-base font-thin">
            <motion.p>{runtime}min</motion.p>
            <motion.p>
              Rate {vote_average?.toFixed(1)}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeaderDeatails;
