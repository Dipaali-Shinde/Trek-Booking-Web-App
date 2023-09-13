import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function Login() {
  const navigate = useNavigate();
  var [id, setid] = useState({
    userid: "",
  });

  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  var userId = id.userid;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.pass);
    console.log(values.email);
    axios
      .post("http://localhost:8080/api/users/login", {
        email: values.email,
        password: values.pass,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "SUCCESS") {
          axios
            .get(`http://localhost:8080/api/usersByemail/${values.email}`)
            .then((res) => {
              console.log(res.data);
              if (res.data.email === values.email) {
                setid = res.data.id;
                console.log(res.data.id);
                navigate(`/home/${res.data.id}`);
              } else {
                console.log("didint navigate");
              }
            });
        } else {
          console.log("login failed");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const sty1 = {
    paddingTop: "150px",
    paddingLeft: "500px",
    paddingRight: "500px",
  };

  const sty2 = {
    background: "#2e8b57",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "90vh",
  };

  return (
    <div style={sty2}>
      <div style={sty1}>
        <Form onSubmit={handleSubmit} className="text-white">
          <h1>Admin Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setValues({ ...values, pass: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
