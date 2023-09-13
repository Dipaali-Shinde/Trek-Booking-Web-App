import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { UserContext } from "../../App";
import icon from "./icon.png";

export default function CustNavBar(props) {
  const { state, dispatch } = useContext(UserContext);
  const [uid, setuid] = useState({
    uid: "",
  });

  const userid = window.localStorage.getItem("userid");
  const navigate = useNavigate();

  const [search, setsearch] = useState({
    name: "",
  });
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    console.log(userid);
  });

  const trekbyname = async () => {
    console.log(search.name);
    navigate(`/searchTrekByname/${search.name}`);
  };
  const logout = () => {
    navigate("/logout");
  };

  const RenderButton = () => {
    if (userid) {
      return (
        <>
          <Nav.Link href="/logout">logout</Nav.Link>
          <Nav.Link href="/profile">profile</Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="/custLOGIN">Login</Nav.Link>
          <Nav.Link href="/custsignUp">Sign Up</Nav.Link>
        </>
      );
    }
  };

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand text href="#">
            <img
              src={icon}
              alt="Logo"
              width="50"
              height="40"
              class="d-inline-block align-text-top"
            />
            Trek Booking App
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/dashboard/:uid">Home</Nav.Link>

            <RenderButton />

            <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdow`}>
              <NavDropdown.Item href="/aboutUs">AboutUs</NavDropdown.Item>
              <NavDropdown.Item href="/contactUs">contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
