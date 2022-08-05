import React , {useContext} from 'react';
import {MovieContext} from "../../context/movie.context";
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div >
        {/* {mobile} */}
        <div className="relative md:hidden w-full"
          style={{ height: "100vh" }}>

            <div className='absolute z-20 bottom-8 left-6 w-5/6'>
              <MovieInfo />
            </div>

          <div className='w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0' />
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            className='w-full h-full' />
        </div>


        {/* medium */}
        <div className=" realtive hidden md:block  w-full lg:hidden"
          style={{ height: "100vh" }}>
            <div className='w-full h-72 bg-opacity-50 absolute bg-black z-10 bottom-0' />
            <div className='absolute z-20 bottom-16 '>
              <MovieInfo />
            </div>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            className='w-full h-full' />
        </div>


        {/* large */}
        <div className=" relative hidden w-full lg:block" 
        style={{ height: "31.1rem" }} >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />
            <div className="absolute z-30 left-14 top-10 flex items-center gap-10">
            <div className=' w-66  '
             style={{height:"27rem"}}
             >
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
               alt=""
               className='w-full h-full rounded-xl' />
            </div>
            <div>
              <MovieInfo />
            </div>
            </div>
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
            className='w-full h-full' />
        </div>
      </div>
    </>
  );
};

export default MovieHero;