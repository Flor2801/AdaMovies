import { React, useState } from "react";
import TrendingSeries from "./vistas-secundarias/trending-series";
import TrendingMovies from "./vistas-secundarias/trending-movies";



const Home = () => {
  return (
    <>

<TrendingMovies></TrendingMovies>
<TrendingSeries></TrendingSeries>

    </>
  );
};

export default Home;
