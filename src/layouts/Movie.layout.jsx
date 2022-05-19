import React, {useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";

import MovieNavbar from '../components/Navbar/MovieNavbar.component';

import {MovieContext} from "../context/movie.context";

 const MovieLayout = (props) => {

    const { id } = useParams();
    
    return (
        <>
            <MovieNavbar />

            {props.children}
        </>
    )
}

export default MovieLayout;