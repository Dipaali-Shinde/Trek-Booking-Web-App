import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import vally from "../images/vally.jpg";
import { useNavigate } from "react-router";

export default function Profile() {
  const [customer, setcustomer] = useState([]);
  const customerId = window.localStorage.getItem("userid");
  useEffect(() => {
    console.log("from profile page customer id : ", customerId);
    axios.get(`http://localhost:8080/cus/${customerId}`).then((res) => {
      console.log(res.data);
      setcustomer(res.data);
      console.log(customer.name);
    });
  }, []);

  const navigateBooking = useNavigate();
  const navigate = () => {
    {
      navigateBooking("/bookinglist");
    }
  };

  const overlay = {
    position: "absolute",
    bottom: "150px",
    right: "400px",
    color: "white",
    paddingLeft: "3px",
    paddingRight: "3px",
  };

  // const overlay1 = {
  //   width: "100vw",
  //   height: "10rem",
  // };

  return (
    <>
      <img
        src={vally}
        alt="Norway"
        style={{ width: "100vw", height: "90vh" }}
      />
      <div class="text-block text-center" style={overlay}>
        <h3>Welcome {customer.name} to your profile</h3>
        {/* <p>see your details below</p> */}
        <Card
          className="  text-white text-center"
          style={{
            width: "50vw",
            height: "30vh",
            backgroundColor: "rgba(0,0,0,0.0)",
            border: "1px",
          }}
        >
          <Card.Body className="mt-2">
            <Card.Title>Name : {customer.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-white">
              your email: {customer.email}
            </Card.Subtitle>

            <Button variant="light" onClick={() => navigate()}>
              see your bookings
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
