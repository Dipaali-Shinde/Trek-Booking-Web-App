import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Button, Table } from "react-bootstrap";
import Userlist from "./Userlist";

export default function Home() {
  const navigate = useNavigate();
  const [trekList, settrekList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadtrek();
  }, []);

  const loadtrek = async () => {
    const result = await axios.get("http://localhost:8080/api/showtreks");
    settrekList(result.data);
    console.log(id);
  };

  const DeleteTrek = async (id) => {
    await axios.delete(`http://localhost:8080/api/delete/${id}`);
    loadtrek();
  };

  return (
    <>
      <br></br>
      <Link className="btn btn-primary mb-2 mx-2" to="/addtrek">
        Add trek
      </Link>
      <Link className="btn btn-primary mb-2 mx-2 " to="/customers">
        {" "}
        customer list
      </Link>
      <Link className="btn btn-primary mb-2 mx-2" to="/userlist">
        User List
      </Link>
      <Link className="btn btn-primary mb-2 mx-2" to={"/signup"}>
        add new user
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
            <th>price</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trekList.map((treks) => (
            <tr key={treks.id}>
              <td>{treks.id}</td>
              <td>{treks.name}</td>
              <td>{treks.location}</td>
              <td>{treks.date}</td>
              <td>{treks.price}</td>

              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/edittrek/${treks.id}`}
                >
                  Edit
                </Link>
                <Button
                  className="btn btn-danger mx-2"
                  onClick={() => DeleteTrek(treks.id)}
                >
                  Delete
                </Button>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/trekBookings/${treks.id}`}
                >
                  Bookings
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
