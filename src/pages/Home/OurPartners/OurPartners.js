import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const OurPartners = () => {
    return (
        <div className="">

            <h1 className="my-5 text-center heading">Our Partners</h1>
            <Container>
                <Row className="g-0">
                    <Col md={4}>
                        <img className="w-100"
                            src="https://cdn.mos.cms.futurecdn.net/5ij5qdSHFzJ2piPRuoTL5F.jpg"
                            height="150"
                            alt=""
                        />
                    </Col>
                    <Col md={4}>
                        <img className="w-100"
                            src="https://1000logos.net/wp-content/uploads/2017/07/symbol-FedEx.jpg"
                            height="150"
                            alt=""
                        />
                    </Col>
                    <Col md={4}>
                        <img className="w-100"
                            src="https://www.holtsauto.com/redex/wp-content/uploads/sites/3/2017/08/RedexCoreLogo.png"
                            height="150"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurPartners;