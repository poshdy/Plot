import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useGetTrendingMoviesQuery } from '../redux/MoviesApi'
import {BsArrowRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Loader from './Loader'
const TrendingMovies = ({ImgdUrl}) => {

  
    const {
        data,
        isFetching,
        isLoading
      } = useGetTrendingMoviesQuery();
    const TrendM = data?.results?.slice(0, 12);
if(isFetching || isLoading){
  return <Loader/>
}
  return (
    <div className="container my-40">
    <h1 className="text-center text-2xl md:text-4xl font-bold my-14">
      TRENDING-MOVIES-TODAY
    </h1>

    <Swiper slidesPerView={4} spaceBetween={10}>
      {TrendM?.map((trend, key) => (
        <SwiperSlide key={key}>
        <Link to={`/movie/${trend?.id}`}>
          <motion.img
            initial={ {opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once:true}}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-36 md:w-[350px] md:h-[450px] rounded-md"
            src={ImgdUrl + trend?.poster_path}
          />
        </Link>
        </SwiperSlide>
      ))}
   </Swiper>
    <Link to={"/trending"}>
      <p className="text-sm mt-3 sm:text-base text-center md:text-right cursor-pointer">
        Show More
      </p>
    </Link>
  </div>
  )
}

export default TrendingMovies