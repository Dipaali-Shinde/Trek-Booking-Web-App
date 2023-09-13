import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import profile from "./images/profile.jpg";

export default function render() {
  document.body.style.backgroundColor = "white";
  const imgStyle = { width: "160px", height: "150px", borderRadius: "100px" };

  const sty1 = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
    backgroundColor: "#607D8B",
  };

  const sty2 = {
    marginRight: "15px",
    width: "18rem",
    height: "20rem",
    backgroundColor: "#455A64",
  };
  return (
    <>
      <div style={sty1}>
        <div class="row p-3 ">
          <Card className="text-white" style={sty2}>
            <Card.Img variant="top" src={profile} style={imgStyle} />
            <Card.Body>
              <Card.Title>Harsh Chaudhari</Card.Title>
              <Card.Text>Full Stack Web Developer</Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-white" style={sty2}>
            <Card.Img variant="top" src={profile} style={imgStyle} />
            <Card.Body>
              <Card.Title>Akash Ingale</Card.Title>
              <Card.Text>Full Stack Web Developer</Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-white" style={sty2}>
            <Card.Img variant="top" src={profile} style={imgStyle} />
            <Card.Body>
              <Card.Title>Dipali Shinde</Card.Title>
              <Card.Text>Full Stack Web Developer</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div class="row  ">
          <Card className="text-white" style={sty2}>
            <Card.Img variant="top" src={profile} style={imgStyle} />
            <Card.Body>
              <Card.Title>Harshal Thakare</Card.Title>
              <Card.Text>Full Stack Web Developer</Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-white" style={sty2}>
            <Card.Img variant="top" src={profile} style={imgStyle} />
            <Card.Body>
              <Card.Title>Hemant Choughule</Card.Title>
              <Card.Text>Full Stack Web Developer</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
