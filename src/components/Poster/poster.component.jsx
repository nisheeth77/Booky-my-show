import React from "react";
import { Link } from "react-router-dom";



const PosterComponent = (props) =>
{
   return(
      <Link to={`/movie/${props.id}`} >
       <div className="flex flex-col items-center gap-2 px-1 md:px-3">
         <div className="h-40 md:h-80">
            <img 
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="" 
            className="w-full h-full rounded-md"
            />
         </div>

         <h3 className={`text-lg font-bold items-center
         ${props.isDark ? "text-white" : "text-gray-700"
            }`}>
            {props.original_title}
         </h3>

         <p className={`text-sm 
         ${props.isDark ? "text-white" : "text-gray-700"
            }`} >
            {props.subtitle}
         </p>
      </div>
      </Link>
   )
}

export default PosterComponent;