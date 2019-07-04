import React, { useState, useEffect, useContext } from "react";
import LoginContext from "../Contexts/LoginContext";
import { Link } from "react-router-dom";
export default function BookTicket(props) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  const tickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [ticketCount, setTicketCount] = useState(2);
  const [amount, setAmount] = useState();
  useEffect(() => {
    console.log(props.movie.ticketPrice);
    console.log(props.movie);
    setAmount(props.movie.ticketPrice * 2);
  }, []);
  return (
    <div id="bookticket" hidden={true}>
      <div
        className="loading-background"
        style={{ textAlign: "center", zIndex: 10 }}
      >
        <div className="book-ticket-container">
          <div className="jumbotron">
            <div className="comic">How many Tickets ?</div>
            <br />
            {[...Array(ticketCount)].map((item, index) => {
              return <img className={"popcorn"} />;
            })}
          </div>
          <div className="btn-group mr-2">
            {tickets.map((item, index) => {
              return (
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    setTicketCount(item);
                    setAmount(item * props.movie.ticketPrice);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div>
            <br />
            <br />
            <Link to={loginInfo.isLoggedIn === true ? "/payment" : "/login"}>
              <button className="btn btn-primary">
                Proceed to pay &#8377; {amount}
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
