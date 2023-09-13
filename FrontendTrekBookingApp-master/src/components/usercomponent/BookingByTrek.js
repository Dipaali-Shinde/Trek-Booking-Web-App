import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router";

export default function BookingByTrek() {
  const { id } = useParams();
  const [booking, setbooking] = useState([]);

  useEffect(() => {
    loadBooking(id);
  }, []);

  const loadBooking = async (id) => {
    const res = axios.get(`http://localhost:8080/bookings/viewByTrek/${id}`);
    console.log((await res).data);
    setbooking((await res).data);
  };
  const deleteBooking = async (bid) => {
    await axios.delete(`http://localhost:8080/bookings/delete/${bid}`);
    loadBooking(id);
  };

  return (
    <div>
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Booking id</th>
              <th>Customer id</th>
              <th>Customer Name</th>
              <th>Customer email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((bookings) => (
              <tr key={bookings.bid}>
                <td>{bookings.bid}</td>
                <td>{bookings.customer.cid}</td>
                <td>{bookings.customer.name}</td>
                <td>{bookings.customer.email}</td>

                <td>
                  <Button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteBooking(bookings.bid)}
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
