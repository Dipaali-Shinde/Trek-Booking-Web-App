import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",

    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/register", {
        name: values.name,
        email: values.email,

        password: values.password,
      })
      .then((res) => {
        console.log("signed up");
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const sty1 = {
    paddingTop: "150px",
    paddingLeft: "500px",
    paddingRight: "500px",
  };

  return (
    <div>
      <div
        className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
        style={sty1}
      >
        <h2 className="text-center m-4 ">Add User</h2>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3" container direction="column" spacing={2}>
            <div item className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                fullWidth
                className="form-control"
                label="Enter your name"
                placeholder="Name"
                variant="outlined"
                required
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>

            <div item className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                fullWidth
                label="Enter your email"
                placeholder="Email Address"
                variant="outlined"
                required
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div item className="mb-3">
              <label htmlFor="Password" className="form-label ">
                Password
              </label>
              <input
                className="form-control"
                type={values.showPassword ? "text" : "password"}
                fullWidth
                label="Password"
                placeholder="Password"
                variant="outlined"
                required
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div item>
              <Button type="submit" className="btn btn-primary">
                Add User
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
