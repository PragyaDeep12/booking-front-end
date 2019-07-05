import React, { useState, useContext, useEffect } from "react";
import { play } from "../AppConstants";
import EachMovie from "./EachMovie";
import { Link } from "react-router-dom";
import LoginContext from "../Contexts/LoginContext";
import { Play } from "../Models/Play";
import { searchPlay } from "../Util";
export default function PlayList(props) {
  const [movieList, setMovieList] = useState<Play[]>(play);
  const {
    state: { loginInfo }
  }: any = useContext(LoginContext);
  useEffect(() => {
    setMovieList(searchPlay(props.searchQuery));
  }, [props.searchQuery]);
  var count = props.count ? 4 : -1;
  return (
    <div className="">
      <div style={{ textAlign: "left" }}>
        <span className="subheader">Plays</span>
      </div>
      <br />
      <div style={{ textAlign: "right" }} hidden={props.count ? false : true}>
        <Link to={"/main/" + loginInfo.city + "/plays"}>
          <button
            className="btn btn-link"
            onClick={() => {
              console.log(window.location);
            }}
          >
            View All Plays
          </button>
        </Link>
      </div>
      <div className="row">
        {movieList.map((item, index) => {
          if (count != 0) {
            count--;
            return <EachMovie movie={item} type="play" />;
          }
        })}
      </div>
    </div>
  );
}
