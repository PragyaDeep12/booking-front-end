import React, { useState } from "react";
import { Seat } from "../Models/Seat";
import { seats } from "../AppConstants";

export default function SeatLayout(props) {
  const [seatList, setSeatList] = useState<Seat[]>(seats);
  let row: String = "";
  const bookedTicket: { row: String; column: number; booked: boolean }[] =
    props.bookedTickets;
  return (
    <div className="seat-layout">
      <div className="screen">SCREEN THIS WAY</div>
      <table>
        <tbody>
          {seatList.map((seat: Seat, index) => {
            return (
              <tr key={index}>
                <td>{seat.row}</td>
                {seat.columns.map((seatColumn, index) => {
                  return (
                    <td key={index}>
                      <div
                        className={
                          bookedTicket.find(item => {
                            return (
                              item.row === seat.row &&
                              item.column === seatColumn.column
                            );
                          }) != null
                            ? "each-seat-booked"
                            : "each-seat"
                        }
                        onClick={() => {
                          props.bookTicketCallback({
                            row: seat.row,
                            column: seatColumn.column,
                            booked: true
                          });
                        }}
                      >
                        {seatColumn.column}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
