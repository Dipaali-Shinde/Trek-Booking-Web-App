import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function CustomerBooking() {
  const [booking, setbooking] = useState([]);
  const customerId = window.localStorage.getItem("userid");

  useEffect(() => {
    loadBooking();
  }, []);
  const loadBooking = async () => {
    const res = axios.get(
      `http://localhost:8080/bookings/viewByCust/${customerId}`
    );
    console.log((await res).data);
    setbooking((await res).data);
  };

  const deleteBooking = async (bid) => {
    await axios.delete(`http://localhost:8080/bookings/delete/${bid}`);
    loadBooking();
  };
  return (
    <div>
      <>
        <h5 className="text-center ">Your Booking Details</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Booking date</th>
              <th>trek title</th>
              <th>trek location</th>
              <th>Starting location</th>
              <th>trek price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((Bookings) => (
              <tr>
                <td>{Bookings.date}</td>
                <td>{Bookings.trek.name}</td>
                <td>{Bookings.trek.location}</td>
                <td>{Bookings.trek.source}</td>
                <td>{Bookings.trek.price}</td>

                <td>
                  <Button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteBooking(Bookings.bid)}
                  >
                    Delete Bookings
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </div>
  );
}
