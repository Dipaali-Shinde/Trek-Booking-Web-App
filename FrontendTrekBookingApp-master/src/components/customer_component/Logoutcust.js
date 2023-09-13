import React, { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

export default function Logoutcust() {
  const { dispatch } = useContext(UserContext);
  const navigatelogin = useNavigate();

  const navigate = () => {
    {
      navigatelogin("/custLOGIN");
    }
  };

  const display = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  };

  dispatch({ type: "USER", payload: false });
  window.localStorage.clear();
  return (
    <div style={display}>
      <h1>logged out succesfully</h1>
      <h4>Thank you for using app</h4>
      <Button variant="primary" onClick={() => navigate()}>
        Login Again
      </Button>
    </div>
  );
}
