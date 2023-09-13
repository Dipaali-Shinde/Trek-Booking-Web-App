import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Customerlist() {
  const [customer, setcustomer] = useState([]);
  useEffect(() => {
    loadcustomer();
  }, []);

  const loadcustomer = async () => {
    const res = await axios.get("http://localhost:8080/cus/viewall");
    setcustomer(res.data);
    console.log(res.data);
  };
  const DeleteCustomer = async (cid) => {
    await axios.delete(` http://localhost:8080/cus/delete/${cid}`);
  };
  return (
    <div>
      <>
        <h3>customer list</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>EmailId</th>
              <th>Password</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((cust) => (
              <tr key={cust.cid}>
                <td>{cust.cid}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.password}</td>
                <td>
                  {" "}
                  <Button
                    className="btn btn-danger mx-2"
                    onClick={() => DeleteCustomer(cust.cid)}
                  >
                    Delete
                  </Button>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/customerBookings/${cust.cid}`}
                  >
                    Bookings
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </div>
  );
}
