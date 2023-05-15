import React from "react";
import { motion } from "framer-motion";

const HeroSec = ({ backdrop_path, y, url }) => {
  return (
     <div className="w-full absolute top-0 mb-24">
        <motion.img
         style={{ y }}
         className="w-full h-[400px] blur-sm opacity-70"
         src={url + backdrop_path}
     /> 
    </div>
  );
};

export default HeroSec;
