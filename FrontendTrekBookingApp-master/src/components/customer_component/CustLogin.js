import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import { UserContext } from "../../App";
import bg1 from "../images/bg1.jpeg";

export default function CustLogin() {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.pass);
    console.log(values.email);
    axios
      .post(" http://localhost:8080/cus/login", {
        email: values.email,
        password: values.pass,
      })
      .then((res) => {
        dispatch({ type: "USER", payload: true });
        console.log(res.data);
        if (res.data === "SUCCESS") {
          axios
            .get(`http://localhost:8080/cus/customerByemail/${values.email}`)
            .then((res) => {
              navigate(`/dashboard/${res.data.cid}`);

              window.localStorage.setItem(
                "userid",
                JSON.stringify(res.data.cid)
              );
            });
        } else {
          console.log("login failed");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const overlay = {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    color: "black",
  };

  const sty1 = {
    paddingTop: "150px",
    paddingLeft: "500px",
    paddingRight: "500px",
  };

  const sty2 = {
    backgroundImage: `url(${bg1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "90vh",
  };

  return (
    <>
      <div style={sty2}>
        <div style={sty1}>
          <Form onSubmit={handleSubmit} className="text-white" style={overlay}>
            <h1>Welcome to Trek App</h1>
            <h5>Login Here</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: "370px" }}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <Form.Text className="text-black">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ width: "370px" }}
                onChange={(e) => setValues({ ...values, pass: e.target.value })}
              />
            </Form.Group>
            <div>
              <Button variant="primary" type="submit" className="m-4">
                Submit
              </Button>
            </div>
            <div className="text-white" style={{ fontSize: 20 }}>
              Don't have an account?
              <Link to="/custSignup" className="text-white">
                Sign Up
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
