import * as React from "react";
import MovieList from "./MovieList";
import PlayList from "./PlayList";
export default function MainComponent() {
  return (
    <div className="">
      <div className="main">
        <MovieList count={4} />
        <hr />
        <PlayList count={4} />
      </div>
    </div>
  );
}
