import React, { useState, useEffect, useContext } from "react";
import LoginContext from "../Contexts/LoginContext";
import { Link } from "react-router-dom";
import SeatLayout from "./SeatLayout";
export default function BookTicket(props) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  // const tickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [bookedTickets, setBookedTickets] = useState<
    { row: String; column: number; booked: boolean }[]
  >([]);
  // const [ticketCount, setTicketCount] = useState(2);
  // const [amount, setAmount] = useState();
  // useEffect(() => {
  //   console.log(props.movie.ticketPrice);
  //   console.log(props.movie);
  //   setAmount(props.movie.ticketPrice * 2);
  // }, []);
  const updateBookedTicket = (bookedTicket: {
    row: String;
    column: number;
    booked: boolean;
  }) => {
    var find = bookedTickets.find(item => {
      return (
        item.row === bookedTicket.row && item.column === bookedTicket.column
      );
    });
    if (find) {
      var temp = bookedTickets.filter(
        item =>
          item.row !== bookedTicket.row || item.column !== bookedTicket.column
      );

      setBookedTickets(temp);
    } else {
      setBookedTickets([...bookedTickets, bookedTicket]);
    }
  };
  return (
    <div id="bookticket" hidden={true}>
      <div
        className="loading-background"
        style={{ textAlign: "center", zIndex: 10 }}
      >
        <div className="book-ticket-container">
          <div className="jumbotron">
            <div className="comic">Book Your Seats</div>
            <br />
            {bookedTickets.map((item, index) => {
              return <img className={"popcorn"} key={index} />;
            })}
          </div>
          <span>{bookedTickets.length > 0 ? <h5>Booked Seats :</h5> : ""}</span>
          <div>
            {bookedTickets.map((bookedTicket, index) => {
              return (
                <span key={index}>
                  {bookedTicket.row + "" + bookedTicket.column + ", "}
                </span>
              );
            })}
          </div>
          <div>
            <SeatLayout
              bookedTickets={bookedTickets}
              bookTicketCallback={bookedTicket => {
                updateBookedTicket(bookedTicket);
              }}
            />
            <Link to={loginInfo.isLoggedIn === true ? "/payment" : "/login"}>
              <button
                className="btn btn-primary"
                disabled={bookedTickets.length === 0}
              >
                Proceed to pay &#8377;{" "}
                {bookedTickets.length * props.movie.ticketPrice}
              </button>
            </Link>
            <br />
            <br />
            <button
              className="btn btn-light"
              onClick={() => {
                var elm = document.getElementById("bookticket");
                if (elm) {
                  elm.hidden = true;
                }
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
