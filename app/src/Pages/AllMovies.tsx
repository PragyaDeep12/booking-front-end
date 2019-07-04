import * as React from "react";
import MovieList from "../Components/MovieList";
import Navbar from "../Components/Navbar";
export default function AllMovies() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-9 main">
          <MovieList />
        </div>
      </div>
    </div>
  );
}
