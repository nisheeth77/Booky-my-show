import React , {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";
// componet
import {NextArrow, PrevArrow} from "./Arrows.component";



const HeroCarousal = () => 
{
    const[images, setImages] = useState([]);
    useEffect(()=> {
      //async
       const requestNowPlayingMovies = async () => {
         const getImages = await axios.get("/movie/now_playing");
         console.log(getImages);
         setImages(getImages.data.results);
        
       };
       requestNowPlayingMovies();
       
    },[]);

    const settingsLg ={
      arrows : true,
      autoplay: true,
      centerMode: true,
      centerPadding: "300px",
      speed: 500,
      
      slidesToShow: 1,
      infinite: true,
      slidesToScroll:1,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
    };

    const settings = {
        arrows: true,
       
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };

     

    return(
        <>
         <div className="lg:hidden bg-slate-100">
         <HeroSlider {...settings} >
            {
              images.map((image) =>(
                <div className="w-full h-56 md:h-80 py-3  ">
                  <img 
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="" 
                  className="w-full h-full  " />
                </div>
              ))
            }
          </HeroSlider>
         </div>

         <div className="hidden lg:block bg-slate-100">
         <HeroSlider {...settingsLg} >
            {
              images.map((image) =>(
                <div className="w-full h-96 px-1 py-2">
                  <img 
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="" 
                  className="w-full h-full rounded-md " />
                </div>
              ))
            }
          </HeroSlider>
         </div>
        </>
    );

};


export default HeroCarousal;