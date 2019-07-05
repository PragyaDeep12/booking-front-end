import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { movie, play } from "../AppConstants";
import BookTicket from "./BookTicket";
import { Movie } from "../Models/Movie.";
import { Play } from "../Models/Play";
export default function MovieDesc({ match }) {
  const [thisMovie, setThisMovie] = useState([]);
  const [amount, setAmount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  useEffect(() => {
    var id = match.params.id;
    var type = match.params.type;
    var movieList = type === "movie" ? movie : play;

    console.log(type);
    setThisMovie(
      movieList.filter(item => {
        console.log(item.id);
        console.log(id);
        return item.id == id;
      })
    );
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="">
          {console.log(thisMovie)}
          {thisMovie.map((item, index) => {
            return (
              <div className="row">
                <BookTicket movie={item} />
                <div className="col-md-4 movieDescription">
                  <img className={item.image + " movie"} />
                  <br />
                  <div>
                    <div className="movie-desc-title">{item.name}</div>
                  </div>
                  <div>
                    {item.gerne.map((gerne, index) => {
                      return (
                        <label className="btn btn-outline-success btn-margin bg-light">
                          {gerne}
                        </label>
                      );
                    })}
                  </div>
                  <div>
                    <span className="bg-light btn btn-outline-primary">
                      Releasing : {item.releaseDate}
                    </span>
                  </div>
                </div>
                <div className="col-md-8  remove-left-padding remove-right-padding">
                  <div className="jumbotron bg-gray">
                    <iframe
                      className="trailer-video"
                      src={item.trailerLink}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                  <div className="row desc-body">
                    <div className="col">
                      <div className="description">
                        <h4>Synopsys</h4>
                        {item.description}
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          var elm = document.getElementById("bookticket");
                          if (elm) {
                            elm.hidden = false;
                          }
                        }}
                      >
                        Book Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/**/}
        </div>
      </div>
    </div>
  );
}
