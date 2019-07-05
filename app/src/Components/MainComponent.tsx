import * as React from "react";
import MovieList from "./MovieList";
import PlayList from "./PlayList";
export default function MainComponent(props) {
  return (
    <div className="">
      <div className="main">
        <MovieList count={4} searchQuery={props.searchQuery} />
        <hr />
        <PlayList count={4} searchQuery={props.searchQuery} />
      </div>
    </div>
  );
}
