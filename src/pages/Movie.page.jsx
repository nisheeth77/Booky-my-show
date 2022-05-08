// import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import React from 'react';
import Cast from "../components/Cast/Cast.component";
import MovieHero from '../components/MovieHero/MovieHero.component';

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-8 container  px-4 lg:ml-10 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>When Dr. Strange`s spell to restore Spider-Man`s
            identity goes awry, Peter is forced to overcome his
            greatest challenge yet.

          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>


        {/* <div className="my-8">
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
        </div> */}

        <div >

          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Cast
          </h2>

          <div className="flex flex-wrap gap-4 ">
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div >

          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Crew
          </h2>

          <div className="flex flex-wrap gap-4 ">
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jon-watts-1057903-24-03-2017-17-55-32.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jon-watts-1057903-24-03-2017-17-55-32.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jon-watts-1057903-24-03-2017-17-55-32.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jon-watts-1057903-24-03-2017-17-55-32.jpg"
              castName="Tom Holland"
              role="Spiderman"
            />
          </div>
        </div>


        <div className="my-8">
          <hr />
        </div>

        <div className='sm:width-10'
        style={{width:"28rem"}}>
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Reviews
          </h2>

          <div className='flex items-center gap-4 bg-bms3-100 p-4 rounded-xl'>
            <div>
              <h2 className='text-lg font-medium  '>
                Watched? Add your rating & review
              </h2>
              <p>
                Your ratings matter
              </p>
            </div>
            <button className="bg-red-600 text-white px-3 py-1 text-lg hover:bg-red-500 rounded-md">
              Rate now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie;
