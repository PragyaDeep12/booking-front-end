import * as React from "react";
import MovieList from "./MovieList";
import PlayList from "./PlayList";
export default function MainComponent() {
  return (
    <div className="row">
      <div className="col-md-3" />
      <div className="col-md-9 main">
        <MovieList count={4} />
        <PlayList count={4} />
      </div>
    </div>
  );
}
