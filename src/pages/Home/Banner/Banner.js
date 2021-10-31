import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner ">
            <Container >
                <Row className="w-100">
                    <Col xs={12} md={4}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div className=" ">
                            {/* <h1 className="heading">Get Set Go</h1> */}
                            <h1 className="home-heading text-md-wrap fw-bold">An Online delivery service</h1>
                            <p className="fs-5">We focus on our fastest delivery and quality of our service</p>
                        </div>


                    </Col>
                    <Col md={8}>
                        <img
                            className="w-100"
                            src="https://image.freepik.com/free-vector/delivery-service-vector-illustration_132971-179.jpg"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;