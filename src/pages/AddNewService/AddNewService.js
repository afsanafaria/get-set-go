import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://arcane-earth-97331.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Posted Successfully");
                    reset();
                }
            })
    };
    return (
        <div className="mt-5">
            <Container>
                <Row className="w-100">
                    <Col xs={1} md={6} className="mt-lg-5 pt-lg-5">
                        <h2 className="mt-lg-2 heading">Add A New Service</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("title")} className="form-control mb-4" placeholder="Enter title" />
                            <textarea  {...register("description")} className="form-control mb-4" placeholder="Enter Description" />
                            <input type="text" {...register("img")} className="form-control mb-4" placeholder="Enter Image URL" />
                            <input className="btn btn-primary " type="submit" />
                        </form>
                    </Col>
                    <Col xs={1} md={6}>
                        <img className="w-100"
                            alt=""
                            src="https://i.pinimg.com/736x/0c/19/21/0c19219ab92ebc202c5b0e5a3968607e.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddNewService;