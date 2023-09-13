import { useParams } from "react-router";
import icon from "../images/bookicon.jpg";
import pic from "../images/celebrate.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Booking() {
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
  const { bid, date, email } = useParams();
  console.log(bid, date, email);

  const navigateBooking = useNavigate();
  const navigate = () => {
    {
      navigateBooking("/bookinglist");
    }
  };

  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <div className="d-flex justify-content-around text-dark text-center">
      <Card style={{ width: "25rem", height: "27rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <img src={icon} alt="Logo" width="70" height="70" />
        </div>
        <Card.Body>
          <Card.Text>
            <h3>
              Booking Confirmed{" "}
              <img src={pic} alt="Logo" width="50" height="50" />
            </h3>
            <h5 style={{ marginTop: "10px" }}>Thank you for your Booking !!</h5>
            <h6 style={{ marginTop: "15px" }}> Your Booking Id : {bid}</h6>
            <hr />
            <h6 style={{ marginTop: "10px" }}>
              {" "}
              Customer Name : {customer.name}
            </h6>

            <h6 style={{ marginTop: "10px" }}>Email : {customer.email}</h6>
            <h6 style={{ marginTop: "10px" }}>
              Booking Date : {formattedDate}
            </h6>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate()}
            style={{ marginTop: "10px" }}
          >
            View Your Bookings
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
