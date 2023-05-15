import React from "react";
import { Link } from "react-router-dom";
import { useGetTrendingShowsQuery } from "../redux/MoviesApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { motion } from "framer-motion";
const TrendingSeries = ({ImgdUrl}) => {
  const {
    data,
    isFetching,
    isLoading,
  } = useGetTrendingShowsQuery();

  const TrendS = data?.results?.slice(0, 12);
  return (
    <div className="container my-40">
      <h1 className="text-center text-2xl md:text-4xl font-bold my-14">
        TRENDING-SHOWS-TODAY
      </h1>
      <Swiper slidesPerView={4} spaceBetween={10}>
        {TrendS?.map((trend, key) => (
          <SwiperSlide key={key}>
            <Link to={`/tv/${trend?.id}`}>
              <motion.img
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, staggerChildren: key }}
                className="w-36 md:w-[350px] md:h-[450px] rounded-md "
                src={ImgdUrl + trend?.poster_path}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={"/trending"}>
        <p className="text-sm mt-3 sm:text-base text-center md:text-right cursor-pointer">Show More</p>
      </Link>
    </div>
  );
};

export default TrendingSeries;
