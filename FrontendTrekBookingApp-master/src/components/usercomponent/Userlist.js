import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Userlist() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const res = await axios.get("http://localhost:8080/api/users");
    setuser(res.data);
    console.log(res.data);
  };

  const Deleteuser = async (id) => {
    await axios.delete(`http://localhost:8080/api/users/delete/${id}`);
    loaduser();
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>

              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/useredit/${user.id}`}
                >
                  Edit
                </Link>
                <Button
                  className="btn btn-danger mx-2"
                  onClick={() => Deleteuser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
