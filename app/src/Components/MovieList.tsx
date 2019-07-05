import React, { useState, useContext, useEffect } from "react";
import { Component } from "react";
import { movie } from "../AppConstants";
import EachMovie from "./EachMovie";
import { Link } from "react-router-dom";
import LoginContext from "../Contexts/LoginContext";
import { Movie } from "../Models/Movie.";
import { searchMovie } from "../Util";
export default function MovieList(props) {
  const [movieList, setMovieList] = useState<Movie[]>(movie);
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  useEffect(() => {
    setMovieList(searchMovie(props.searchQuery));
  }, [props.searchQuery]);
  var count = props.count ? 4 : -1;
  return (
    <div className="list">
      <div style={{ textAlign: "left" }}>
        <span className="subheader">Movies</span>
      </div>
      <br />
      <div style={{ textAlign: "right" }}>
        <Link
          to={"/main/" + loginInfo.city + "/movies"}
          hidden={props.count ? false : true}
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
            return <EachMovie movie={item} type="movie" key={index} />;
          }
        })}
      </div>
    </div>
  );
}
