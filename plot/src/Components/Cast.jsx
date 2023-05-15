import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {item } from "../animation/motion";

const Cast = ({ id, profile_path, character, name, ImgUrl }) => {
  return (
    <div>
      <motion.div variants={item}>
        <Link to={`/actor/${id}`}>
          <motion.img
            className="w-16 h-16 md:w-24 md:h-24 rounded-[50%] object-cover"
            src={ImgUrl + profile_path}
          />
        </Link>
        <motion.p className="text-sm  md:text-base font-bold w-16 truncate text-center">{name}</motion.p>
        <motion.p className="text-sm  md:text-base truncate w-16 font-thin text-center">
          {character}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Cast;
