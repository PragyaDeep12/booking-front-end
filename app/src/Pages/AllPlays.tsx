import * as React from "react";
import PlayList from "../Components/PlayList";
import Navbar from "../Components/Navbar";
export default function AllPlays() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-9 main">
          <PlayList />
        </div>
      </div>
    </div>
  );
}
