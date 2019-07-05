import * as React from "react";
import PlayList from "../Components/PlayList";
import Navbar from "../Components/Navbar";
export default function AllPlays() {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="main">
          <PlayList />
        </div>
      </div>
    </div>
  );
}