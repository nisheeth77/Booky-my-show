import React from 'react'
import Slider from "react-slick";
import PosterComponent from '../Poster/poster.component';

import settings from '../config/PosterCarousel.config';

 const PosterSlider = (props ) => {
  return (
    <>
     <div className="container mx-auto px-4 mb-4 mt-6">
                    <div className={`font-bold text-2xl 
                    ${props.isDark ? "text-white" : "text-gray-800"
                    }`}>
                        {props.title}

                    </div>
                    <p className={`
                     ${props.isDark ? "text-white" : "text-gray-800"
                    }`}>{props.subtitle}</p>
                </div>
            <Slider {...settings}>
                {props.images.map((image) => (
                    <PosterComponent {...image} isDark={props.isDark} />
                )
                )}
            </Slider>
    </>
  )
}
export default PosterSlider;