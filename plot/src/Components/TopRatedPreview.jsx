import React from "react";
import { Link } from "react-router-dom";
import { useGetTopRatedMQuery } from "../redux/MoviesApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
const TopRatedPreview = ({ ImgdUrl }) => {
  const {
    data: TopRated,
    isFetching: isFetchingTop,
    isLoading: isLoadingTop,
  } = useGetTopRatedMQuery();
  const TopData = TopRated?.results?.slice(0, 12);
  return (
    <div className="container my-40">
      <h1 className="text-center text-2xl md:text-4xl font-bold my-14">
        TOP RATED MOVIES
      </h1>
      <Swiper slidesPerView={4} spaceBetween={10}>
        {TopData?.map((trend, key) => (
          <SwiperSlide key={key}>
            <Link to={`/movie/${trend?.id}`}>
              <img
                className="w-40 md:w-[350px] md:h-[450px] rounded-md"
                src={ImgdUrl + trend?.poster_path}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedPreview;
