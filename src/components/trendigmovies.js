import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { React, useState } from "react";


 return (
    <>
       <BrowserRouter>
       <p><Link to="/trendingmovies">PELICULAS QUE SON TENDENCIA</Link></p>

<div>tarjeta 1</div>
<div>tarjeta 1</div>
<div>tarjeta 1</div>
   

         <Switch>
           <Route path="/trendingmovies" component={TrendingMovies}></Route>

           </Switch>
   
       </BrowserRouter>
    </>

  );


export default TrendigMovies;