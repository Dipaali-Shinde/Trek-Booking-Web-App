import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import CustNavBar from "../navbar/CustNavBar";
import everest from "../images/everest.jpeg";

export default function Dashboard() {
  const navigate = useNavigate();
  const [trekList, settrekList] = useState([]);

  const { uid } = useParams();

  useEffect(() => {
    const userid = window.localStorage.getItem("userid");
    console.log(userid);
    loadtrek();
  }, []);

  const loadtrek = async () => {
    const result = await axios.get("http://localhost:8080/api/showtreks");
    settrekList(result.data);
    console.log(result.data);
    console.log(uid);
  };

  const overlay = {
    position: "absolute",
    bottom: "50px",
    right: "60px",
    backgroundColor: "black",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
  };
  const cont = {
    position: "relative",
  };
  return (
    <>
      <div>
        <img
          src={everest}
          alt="Norway"
          style={{ width: "95rem", height: "40rem" }}
        />
        <div class="text-block" style={overlay}>
          <h4>explore treks</h4>
          <p>IF YOU LIKE BOOK ONE</p>
        </div>

        <section id="gallery" className="mt-5">
          <Row lg={3}>
            {trekList.map((trek) => (
              <Col className="d-flex">
                <div className="flex-fill bg-secondery container ">
                  <div class="row">
                    <a href={`/trekdetsils/${trek.id}/${uid}`}>
                      <div class=" mb-5 btn btn-sm  ">
                        <div
                          class="card  "
                          style={{ width: "22rem", height: "30rem" }}
                        >
                          <img
                            src={trek.imgUrl}
                            alt=""
                            class="card-img-top "
                            style={{ width: "22rem", height: "20rem" }}
                          />
                          <div class="card-body" style={{ height: "8rem" }}>
                            <h5 class="card-title">{trek.name}</h5>
                            <p class="card-text">
                              Price per Person : {trek.price}
                            </p>
                            <p class="card-text">Journey Date : {trek.date}</p>
                            <p class="card-text">
                              Journey time : {trek.timing} am
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </>
  );
}
