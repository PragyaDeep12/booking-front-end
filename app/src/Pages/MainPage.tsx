import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import MainComponent from "../Components/MainComponent";
function MainPage() {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <div>
      {/* this is the main page */}
      <Navbar
        searchCallback={query => {
          setSearchQuery(query);
        }}
      />
      <div>
        <MainComponent searchQuery={searchQuery} />
      </div>
    </div>
  );
}
export default MainPage;
