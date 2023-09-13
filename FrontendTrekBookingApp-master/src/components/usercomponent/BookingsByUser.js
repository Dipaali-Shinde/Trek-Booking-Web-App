import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router";

export default function BookingsByUser() {
  const { id } = useParams();
  const [booking, setbooking] = useState([]);

  useEffect(() => {
    loadBooking(id);
  }, []);

  const loadBooking = async (id) => {
    const res = axios.get(`http://localhost:8080/bookings/viewByCust/${id}`);
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
              <th>trek id</th>
              <th>trek title</th>
              <th>trek location</th>
              <th>trek price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((Bookings) => (
              <tr>
                <td>{Bookings.bid}</td>
                <td>{Bookings.trek.id}</td>
                <td>{Bookings.trek.name}</td>
                <td>{Bookings.trek.location}</td>
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
