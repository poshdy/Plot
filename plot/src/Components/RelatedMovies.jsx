import React from 'react'
import { Link } from 'react-router-dom'

const RelatedMovies = ({poster_path ,url , vote_average,id}) => {
  return (
    <div className=''>
      <Link to={`/movie/${id}`}>
      <img className='w-36 md:w-[200px] md:h-[300px] rounded-md' src={url + poster_path} />
      </Link>
      <div className='flex flex-col justify-center items-center  '>
        <p className='font-normal text-base'>{vote_average.toFixed(1)}</p> 
      </div>
    </div>
  )
}

export default RelatedMovies