// import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import React ,{useContext , useState , useEffect}from 'react';
import Cast from "../components/Cast/Cast.component";
import MovieHero from '../components/MovieHero/MovieHero.component';
 
import axios from "axios";
 import { useParams } from "react-router-dom";

import { MovieContext } from "../context/movie.context";


import Slider from "react-slick";

const Movie = () => {
  const {id} = useParams();
  const {movie} = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => { 
    const requestCast = async () =>
    {
      const getCast = await axios.get(`/movie/${id}/credits`); 
      setCast(getCast.data.cast);
      setCrew(getCast.data.crew);

    }
    
    
    requestCast();
  }, [])

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-8 container  px-4 lg:ml-10 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            {movie.overview}

          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>


        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>


        

        <div >

          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Cast
          </h2>
         
          
          <Slider {...settingsCast}>
            {cast.map((castdata)=>(
              <Cast image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
              castName={castdata.original_name}
              role={castdata.character}
            />
            )
            )}
            </Slider>
          
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div >

          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Crew
          </h2>

          <Slider {...settingsCast}>

           {crew.map((crewdata)=>(
              <Cast image={`https://image.tmdb.org/t/p/original${crewdata.profile_path}`}
              castName={crewdata.original_name}
              role={crewdata.job}
            />
            )
            )} 
           
          </Slider>
        </div>       
      </div>
    </>
  )
}

export default Movie;
