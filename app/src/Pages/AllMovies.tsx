import * as React from "react";
import MovieList from "../Components/MovieList";
import Navbar from "../Components/Navbar";
export default function AllMovies() {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className=" main">
          <MovieList />
        </div>
      </div>
    </div>
  );
}
