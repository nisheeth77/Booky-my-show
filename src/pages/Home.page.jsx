import axios from "axios";
import React, { useState, useEffect } from "react";

import EntertainmentCardSlider from "../components/Entertaiment/Enetrtainmentcard.component";


import Premiereimages from "../components/config/PremiereImages.config";

import  PosterSlider  from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

    return (
        <>
            <div className="container mx-auto px-4  mb-10  ">

                <div className=" font-bold text-2xl py-2 px-2 text-gray-800  ">
                    The Best of Entertainment
                </div>
                <EntertainmentCardSlider />
            </div>

            <div className="bg-bms-800 py-7 px-3">
                <div className="hidden md:flex mx-4">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="add"
                        className="w-full h-full px-4" />
                </div>


                <div className="container mx-auto px-4 ">
                    <PosterSlider images={popularMovies}  title="Premiere"
                    subtitle="Brand new release every friday" 
                    isDark
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 mb-4 ">
                    <PosterSlider images={topRatedMovies} title="Top Rated Movies"
                     isDark={false}
                     />
                </div>
                <div className="container mx-auto px-4 mb-4 ">
                    <PosterSlider images={upcomingMovies}  title="Upcoming Movies"
                     isDark={false}
                     />
                </div>
                {/* <div className="container mx-auto px-4 mb-4 ">
                    <PosterSlider images={Premiereimages}  title="Laughter Therapy"
                     isDark={false}
                     />
                </div> */}

        </>
    );
}

export default HomePage;