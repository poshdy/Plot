import React from "react";
import { motion } from "framer-motion";
import {
  discoverContainer,
  discoverItem,
  transition,
} from "../animation/motion";
import { useGetDiscoverQuery } from "../redux/MoviesApi";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const LandingPage = ({ ImgdUrl }) => {
  const { data, isFetching, isLoading } = useGetDiscoverQuery();
  const DisData = data?.results?.slice(0, 4);
  
  if(isFetching || isLoading){
    return <Loader/>
  }
  return (
    <div>
      <motion.div className="w-[80%] mx-auto my-40">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={transition}
          className="text-center text-2xl md:text-4xl font-bold my-14"
        >
          DISCOVER
        </motion.h1>
        <motion.div
          variants={discoverContainer}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-3"
        >
          {DisData?.map((trend, key) => (
            <Link key={key} to={`/movie/${trend?.id}`}>
              <motion.img
                variants={discoverItem}
                className=" w-[200px] h-[250px] sm:w-[400px] sm:h-[550px]"
                src={ImgdUrl + trend?.poster_path}
              />
            </Link>
          ))}
        </motion.div>
        <motion.p className=" text-sm mt-3 sm:text-base text-center md:text-right cursor-pointer">
          Show more
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
