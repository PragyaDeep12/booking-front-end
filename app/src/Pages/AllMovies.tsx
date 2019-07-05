import React, { useState } from "react";
import MovieList from "../Components/MovieList";
import Navbar from "../Components/Navbar";
export default function AllMovies() {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <div>
      <Navbar
        searchCallback={query => {
          setSearchQuery(query);
        }}
      />
      <div className="">
        <div className=" main">
          <MovieList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}
