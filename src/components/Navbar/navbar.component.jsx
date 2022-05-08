import React from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown } from "react-icons/bi";



const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between ">
                <div>
                    <h3 className="text-2xl font-bold ">It All Starts Here!</h3>
                    <span className=" text-gray-400 text-xs flex items-center ">
                        Lucknow <BiChevronRight />
                    </span>
                </div>

                <div className=" text-2xl">
                    <BiSearch />
                </div>
            </div>
        </>
    )
};
const NavMd = () => {
    return (
        <div className=" py-2 px-2 mt-2 mb-0 w-full flex items-center gap-2 bg-white rounded-sm  ">
            <BiSearch className="text-xl" />
            <input type="search"
                className="  w-full bg-transparent border-none focus:outline-none "
                placeholder="Search for Movies, Events, Plays, Sports and Activities" />
        </div>
    );
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

const Navbar = () => {
    return (
        <>
            <nav className="bg-bms-700 px-4 py-2">
                <div className="md:hidden ">
                    {/*Mobile Screen*/}
                    <NavSm />
                </div>

                <div className="hidden md:flex lg:hidden">
                    {/* Medium /Tab screen */}{""}
                    <NavMd />
                </div>

                <div className="hidden lg:flex">
                    {/* Large Screen */}
                    <NavLg />
                </div>

            </nav>
        </>
    )
};
export default Navbar;