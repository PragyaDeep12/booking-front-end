import React, { useState } from "react";
import PlayList from "../Components/PlayList";
import Navbar from "../Components/Navbar";
export default function AllPlays() {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <div>
      <Navbar
        searchCallback={query => {
          setSearchQuery(query);
        }}
      />
      <div className="">
        <div className="main">
          <PlayList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}
