import React, { useState, useContext } from "react";
import { Component } from "react";
import { movie } from "../AppConstants";
import EachMovie from "./EachMovie";
import { Link } from "react-router-dom";
import LoginContext from "../Contexts/LoginContext";
export default function MovieList(props) {
  const [movieList, setMovieList] = useState(movie);
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  var count = props.count ? 3 : -1;
  return (
    <div className="">
      <div style={{ textAlign: "left" }}>
        <span className="subheader">Movies</span>
      </div>
      <br />
      <div style={{ textAlign: "right" }}>
        <Link
          to={"/main/" + loginInfo.city + "/movies"}
          hidden={count ? false : true}
        >
          <button
            className="btn btn-link"
            onClick={() => {
              console.log(window.location);
            }}
          >
            View All Movies
          </button>
        </Link>
      </div>
      <div className="row">
        {movieList.map((item, index) => {
          if (count != 0) {
            count--;
            return <EachMovie movie={item} type="movie" />;
          }
        })}
      </div>
    </div>
  );
}
