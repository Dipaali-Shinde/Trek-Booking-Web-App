import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

export default function TrekByname() {

    const [trek, settrek] = useState([]);

    const { id } =useParams();
    useEffect(() => {
      loadtrek();

    }, []);

    const loadtrek = async () => {
        const result = await axios.get(`http://localhost:8080/api/trek/${id}`);
        settrek(result.data);
        console.log(result.data);
      };
  return (
    <div>
       <div>
            <nav class="bg-dark navbar-dark">
                <div class="container">
                    <a href="" class="navbar-brand"><i class="fas fa-tree mr-2"></i>Forest</a>
                </div>
            </nav>
            <section id="header" class="jumbotron text-center">
                <h1 class="display-3">FOREST</h1>
                <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a href="" class="btn btn-primary">Click</a>
                <a href="" class="btn btn-secondary">Click</a>
            </section>

            <section id="gallery">
                <Row lg={3}>
                {
                    trek.map(
                        trek =>
                       <Col className='d-flex'>
                        <div class="container" className='flex-fill'>
                    <div class="row">
                        <div class=" mb-5">
                            <div class="card">
                                <img src={trek.imgUrl} alt="" class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title">{trek.name}</h5>
                                    <p class="card-text">{trek.price}</p>
                                    <a href= {`/trekdetsils/${trek.id}`} class="btn btn-outline-success btn-sm">More details</a>
                                    <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                </Col>
               
                    )
                }
                </Row>
                
            </section>

        </div>
    </div>
  )
}
