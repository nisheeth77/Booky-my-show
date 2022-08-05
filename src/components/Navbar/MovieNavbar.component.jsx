import React, { useContext } from "react";
import { BiSearch, BiMenu, BiChevronDown ,BiShareAlt} from "react-icons/bi";

import { MovieContext } from "../../context/movie.context";


const NavSm = () => {
    const { movie } = useContext(MovieContext);
     return (
        <>
            <div className="text-white flex items-center justify-between ">
                <div>
                    <h3 className="text-2xl font-bold ">{movie.original_title}</h3>
                   
                </div>

                <div className=" text-2xl">
                    <BiShareAlt />
                </div>
            </div>
        </>
    )
};


const NavLg = () => {
    return (
        <>
            <div className="container mx-2 my-1 px-4 flex items-center justify-between">
                <div className=" mx-10 flex items-center gap-4 w-1/2">
                    <div className="w-12 h-12">
                        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full" />
                    </div>
                    <div className=" py-2 px-2 mt-2 mb-0 w-full flex items-center gap-2 bg-white rounded-md  ">
                        <BiSearch className="text-xl"/>
                        <input type="search"
                            className="  w-full bg-transparent border-none focus:outline-none "
                            placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                <span className=" text-gray-200 text-sm flex items-center cursor-pointer hover:text-white ">
                        Lucknow <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white px-3 py-1 text-xs hover:bg-red-500 rounded-md">
                        Sign in
                        </button>
                        <div>
                            <BiMenu className="w-full h-full text-2xl text-white" />
                        </div>
                      
                </div>
            </div>
        </>
    );
};


// MAIN NAVBAR

const MovieNavbar = () => {
    return (
        <>
            <nav className=" w-full
             absolute insert-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg 
            lg:relative lg:bg-bms-700 px-4 py-2">
                <div className="md:hidden ">
                    {/*Mobile Screen*/}
                    <NavSm />
                </div>

                <div className="hidden md:block lg:hidden ">
                    {/* Medium /Tab screen */}{""}
                    <NavSm />
                </div>

                <div className="hidden lg:flex">
                    {/* Large Screen */}
                    <NavLg />
                </div>

            </nav>
        </>
    )
};
export default MovieNavbar;