import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../Models/Movie.";
export default function EachMovie(props) {
  const Movie: Movie = props.movie;
  return (
    <div className="col-md-3">
      <Link
        to={
          "/main/" +
          localStorage.getItem("city") +
          "/movies/bookTickets/" +
          props.movie.id +
          "/" +
          props.type
        }
      >
        <div className="card each-card ">
          <div>
            <img className={props.movie.image + " movie"} />
          </div>
          <div>
            <span>
              <img className="heart" />
              {props.movie.percentage} %
            </span>
            <br />
            <span className="movie-name">{props.movie.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
