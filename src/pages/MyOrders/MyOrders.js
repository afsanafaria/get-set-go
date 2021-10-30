import React, { useEffect, useState } from 'react';
import './MyOrders.css'
import useAuth from '../../hooks/useAuth'
import { Card, Col, Container, Row, Button, ListGroup, Spinner } from 'react-bootstrap';
// import useServices from '../../hooks/useServices';

const MyOrders = () => {
    const { user } = useAuth();
    // const { services } = useServices()
    const [registeredUsers, setRegisteredUsers] = useState([])
    useEffect(() => {
        fetch(`https://arcane-earth-97331.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setRegisteredUsers(data))
    }, [])
    const matched = registeredUsers.filter(r => r.email === user.email);
    // console.log(matched, "matched")
    if (registeredUsers.length <= 0 && matched.length <= 0) {
        return <div className="loader"><Spinner className="" animation="border" /></div>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,You want to delete?');
        console.log(id)
        if (proceed) {
            fetch(`https://arcane-earth-97331.herokuapp.com/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingUsers = matched.filter(user => user._id !== id);
                        setRegisteredUsers(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className="my-orders">
            <Container>
                <Row className="w-100">
                    <Col md={8}>
                        <img
                            className="w-100"
                            src="http://unblast.com/wp-content/uploads/2020/05/Delivery-Service-Illustration.jpg"
                            alt=""
                        />
                    </Col>
                    <Col md={4} className="mt-lg-5">
                        <Card className="mt-lg-5 p-3">
                            <Card.Title className="px-2">So {user.displayName}.<br /> You have ordered our {matched.length} services.</Card.Title>
                            <ListGroup variant="flush" >

                                {
                                    matched.map(service => <ListGroup.Item>{service.title} <Button
                                        onClick={() => handleDelete(service._id)} className="float-end service-btn">  Delete </Button></ListGroup.Item>)
                                }
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default MyOrders;