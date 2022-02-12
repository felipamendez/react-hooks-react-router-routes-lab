import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => { 
     return  (
      <>
        <p> Title: {movie.title} </p>
        <p>  Time: {movie.time} </p>
        <p>Genres:</p>
        <ul>
         {movie.genres.map((genre) => { 
           return (
            <li>
              {genre}
            </li>
            )})}
        </ul>
      </>
      )
    })}
  </div>
  )
}

export default Movies;
