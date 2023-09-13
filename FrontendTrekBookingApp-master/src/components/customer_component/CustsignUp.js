import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./CustSignUp.css";

export default function CustsignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/cus/signup", {
        name: values.name,
        email: values.email,

        password: values.password,
      })
      .then((res) => {
        console.log("signed up");
        console.log(res.data);
        navigate("/custLOGIN");
      })
      .catch((err) => console.error(err));
  };

  const handlePasswordVisibility = () => {
    setValues({ ...values, showPassw: !values.showPass });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h5 className="d-flex justify-content-center">
              New To Trek Booking App?{" "}
            </h5>
            <h6 className="d-flex justify-content-center"> Register Here </h6>
            <input
              className="form-control"
              placeholder="Full Name"
              required
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type={values.showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>

          <div className="mb-3 d-flex justify-content-center">
            <Button type="submit" variant="dark">
              Sign Up
            </Button>
          </div>

          <div className="login-link text-white">
            Already have an account?
            <Link to="/custLOGIN" className="text-white">
              Log In
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
