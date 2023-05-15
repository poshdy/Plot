import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const ApiKey = import.meta.env.VITE_API_KEY


export const MoviesApi = createApi({
    reducerPath: 'MoviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
      
    }),
    endpoints: (builder)=>({
        getDiscover: builder.query({query: ()=> `discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`}),
        getTrendingMovies: builder.query({query: ()=>`
        https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`}),
        getTrendingShows: builder.query({query: ()=>`
        https://api.themoviedb.org/3/trending/tv/day?api_key=${ApiKey}`}),
        getTopRatedM: builder.query({query: ()=>`
        https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`}),
        getMovieDetails: builder.query({query: (movieid)=> `
        https://api.themoviedb.org/3/movie/${movieid}?api_key=${ApiKey}&language=en-US`}),
        getMovieCast: builder.query({query:(movieid)=>`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${ApiKey}&language=en-US`}),
        getMovieRcommends: builder.query({query:(movieid)=>`https://api.themoviedb.org/3/movie/${movieid}/recommendations?api_key=${ApiKey}&language=en-US&page=1`}),
        getTvDetails: builder.query({query: (tvid)=>`https://api.themoviedb.org/3/tv/${tvid}?api_key=${ApiKey}&language=en-US`}),
        getTvCast: builder.query({query:(tvid)=>`https://api.themoviedb.org/3/tv/${tvid}/credits?api_key=${ApiKey}&language=en-US`}),
        getTvReco: builder.query({query:(tvid)=>`
        https://api.themoviedb.org/3/tv/${tvid}/recommendations?api_key=${ApiKey}&language=en-US&page=1`}),
     getActorDetails: builder.query({query: (actorid)=>`https://api.themoviedb.org/3/person/${actorid}?api_key=c0f527a00afb3873408556275c3e7e26&language=en-US`}),
    getKnownFor:  builder.query({query: (actorid)=>`https://api.themoviedb.org/3/person/${actorid}/movie_credits?api_key=${ApiKey}&language=en-US`}),

    })
})
export const {
    useGetDiscoverQuery,
    useGetTrendingMoviesQuery,
    useGetTrendingShowsQuery,
    useGetTopRatedMQuery,
    useGetMovieDetailsQuery,
    useGetMovieCastQuery,
    useGetMovieRcommendsQuery,
    useGetTvDetailsQuery,
    useGetTvRecoQuery,
    useGetTvCastQuery,
    useGetActorDetailsQuery,
    useGetKnownForQuery,
    
} = MoviesApi


