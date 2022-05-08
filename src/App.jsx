import {Route} from "react-router-dom";
import axios from "axios";

import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Home Page
import HomePage from "./pages/Home.page";
//Movie Page 
import MoviePage from "./pages/Movie.page";

//axios default settings
axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;

function App() {
  return (
  <>
    
  <DefaultHOC path="/" exact component={HomePage}/>
  <MovieHOC path="/movie/:id" exact component={MoviePage} />
  </>
  );
} 

export default App; 
