import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
// import { useForm } from "react-hook-form";

const ManageAllOrders = () => {
    const [manageUsers, setManageUsers] = useState([]);
    const [singleUser, setSingleUser] = useState([])
    const [approved, setApproved] = useState('');
    // const { register, handleSubmit, reset } = useForm();
    const statusHandler = e => {
        setApproved(e.target.value)
    }


    useEffect(() => {
        fetch(`https://arcane-earth-97331.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setManageUsers(data))
    }, [])
    if (manageUsers.length <= 0) {
        return <div className="loader"><Spinner className="" animation="border" /></div>
    }
    const updateOrderStatus = id => {
        fetch(`https://arcane-earth-97331.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data => setSingleUser(data))

        const updatedSingleUser = {
            name: singleUser.name,
            email: singleUser.email,
            city: singleUser.city,
            address: singleUser.address,
            title: singleUser.title,
            satus: approved
        };
        setSingleUser(updatedSingleUser);
        fetch(`https://arcane-earth-97331.herokuapp.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSingleUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const proceed = window.confirm('Are you sure?');
                    if (proceed) {
                        alert("You successfully approved the order")
                    }


                }
            })

    }

    const deleteOrder = id => {
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
                        const remainingUsers = manageUsers.filter(user => user._id !== id);
                        setManageUsers(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className="manage-orders">
            <h3 className="heading text-center my-5">Hi, Admin!! You can manage all orders</h3>
            <Container>
                <Row md={4} className="w-100 g-4">
                    {
                        manageUsers.map(manageUser => (
                            <Col >
                                <Card>
                                    <Card.Body variant="flush">

                                        <h6 className="mb-2">Name: {manageUser.name}</h6>
                                        <p className="mb-2">Service Name: {manageUser.title}</p>
                                        {/* <p>Order Status: {manageUser.satus}</p> */}
                                        <select onChange={statusHandler}>
                                            <option>{manageUser.satus}</option>
                                            <option>Approved</option>
                                        </select>
                                        <br />
                                        <Button onClick={() => updateOrderStatus(manageUser._id)} className="mt-2 service-btn">Update</Button>
                                        <Button onClick={() => deleteOrder(manageUser._id)} className="mt-2 ms-lg-2 service-btn">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }



                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;