import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const { services } = useServices()
    if (services.length <= 0) {
        return <div className="loader"><Spinner className="" animation="border" /></div>
    }
    return (
        <>

            <div className="sevices mx-auto d-flex justify-content-center">
                <div>
                    <h2 className="heading service-heading text-center my-5">Services</h2>
                    <Row xs={1} md={3} className="w-100 g-4">

                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </Row>
                </div>

            </div>
        </>
    );
};

export default Services;