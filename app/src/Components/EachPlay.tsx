import React from "react";
import { Link } from "react-router-dom";
export default function EachPlay(props) {
  return (
    <Link
      to={
        "/main/" +
        localStorage.getItem("city") +
        "/plays/bookTickets/" +
        props.movie.id
      }
    >
      <div className="col-md-4">
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
      </div>
    </Link>
  );
}
