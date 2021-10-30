import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();

    const [selectedService, setSelectedService] = useState([])
    useEffect(() => {
        fetch(`https://arcane-earth-97331.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, [])

    const { register, handleSubmit, reset } = useForm({
        defaultValues: { title: selectedService.title },
    });
    const onSubmit = data => {
        console.log(data)
        axios.post('https://arcane-earth-97331.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    window.confirm("Please Check your data again");
                    reset(data);

                }
            })

    };


    return (
        <div className="my-4">
            <Container>
                <Row className="w-100">
                    <Col xs={1} md={8}>
                        <Card>
                            <Card.Img variant="top" src={selectedService.img} />
                            <Card.Body>
                                <Card.Title>{selectedService.title}</Card.Title>
                                <Card.Text>
                                    {selectedService.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={1} md={4}>
                        <Card>
                            {/* <Image variant="top" src={user.photoURL} className="w-100" height="200" /> */}
                            <Card.Body>
                                <Card.Title>Welcome {user.displayName} <br /> Your email is: {user.email}</Card.Title>
                                <Card.Text>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label>Your Name</label>
                                        <input type="text" {...register("name")} value={user.displayName} className="w-100 form-control mb-2" placeholder="Enter Your Name" />
                                        <label>Your Email</label>
                                        <input  {...register("email")} value={user.email} className="w-100 form-control mb-2" placeholder="Enter Your Email" />
                                        <label>Your City</label>
                                        <input type="text" {...register("city")} className="w-100 form-control mb-2" placeholder="Enter Your City" />
                                        <label>Your Address</label>
                                        <input type="text" {...register("address")} className="w-100 form-control mb-2" placeholder="Enter Your Address" />
                                        <label>Your Desired Service</label>
                                        <input  {...register("title")} className="w-100 form-control mb-2" placeholder="Enter your desired Service" />
                                        <label>Order Status</label>
                                        <input  {...register("satus")} value="Pending" className="w-100 form-control mb-2" placeholder="Enter your desired Service" />
                                        <input className="w-100 btn btn-primary mb-2" type="submit" value="PlaceOrder" />
                                        {/*  */}
                                    </form>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default PlaceOrder;