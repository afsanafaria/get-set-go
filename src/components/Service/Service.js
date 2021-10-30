import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, title, img, description } = props.service || {};
    return (
        <div className="service">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 120)}.....
                            <br />
                            <Button className="service-btn mt-3"><Link to={`/placeorder/${_id}`} className="service-link ">Have Our Service</Link></Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;