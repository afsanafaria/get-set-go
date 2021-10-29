import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="w-100 mt-5 pt-5">
                    <Col xs={1} md={4}>
                        <h4>Get Set Go</h4>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>FAQ</li>
                    </Col>
                    <Col xs={1} md={4}>
                        <h4>Services</h4>
                        <li>Food Delivery Service</li>
                        <li>Documents Delivery Service</li>
                        <li>Clothes Delivery Service</li>
                        <li>Shoes Delivery Service</li>
                    </Col>
                    <Col xs={1} md={4}>
                        <h4>Get in touch</h4>
                        <li><i class="fab fa-facebook"></i></li>
                        <li><i class="fab fa-google-plus-g"></i></li>
                        <li><i class="fab fa-linkedin"></i></li>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;