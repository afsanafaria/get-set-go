import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css'
const Gallery = () => {
    return (
        <div className="gallery">
            <h1 className="my-5 text-center heading">Gallery</h1>
            <Container>
                <Row className="">
                    <Col md={4}>
                        <img className="w-100"
                            src="https://image3.jdomni.in/banner/16032020/39/A3/DA/8819445C12A52FB0BCF656C01A_1584365654079.jpg?output-format=webp"
                            height="150"
                            alt=""
                        />
                    </Col>
                    <Col md={4}>
                        <img className="w-100"
                            src="https://image2.jdomni.in/banner/16032020/BE/88/FB/D467F86115BAD275FA0BC0AB52_1584365633864.jpg?output-format=webp"
                            height="150"
                            alt=""
                        />
                    </Col>
                    <Col md={4}>
                        <img className="w-100"
                            src="https://image3.jdomni.in/banner/16032020/10/43/EF/2E6F4E7E46184C6EA2F65B369A_1584365595606.jpg?output-format=webp"
                            height="150"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;