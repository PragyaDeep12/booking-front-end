import * as React from "react";
import Navbar from "../Components/Navbar";
import MainComponent from "../Components/MainComponent";
function MainPage() {
  return (
    <div>
      {/* this is the main page */}
      <Navbar />
      <div>
        <MainComponent />
      </div>
    </div>
  );
}
export default MainPage;
