import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { googleSignIn, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation()

    const redirect_url = location.state?.from || './home'

    const handleGoggle = () => {
        setIsLoading(true);
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                // setUser(result.user)
                // axios.post('https://arcane-earth-97331.herokuapp.com/users', result.user)
                //     .then(res => {
                //         if (res.data.insertedId) {
                //             alert("Posted Successfully");

                //         }
                //     })
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="login">
            <Container>
                <Row className="w-100">
                    <Col>
                        <img className="w-100"
                            alt=""
                            src="https://static.vecteezy.com/system/resources/previews/001/179/064/non_2x/mobile-phone-app-delivery-service-vector.jpg"
                        />
                    </Col>
                    <Col>
                        <div style={{ width: '20rem', height: "20rem" }} className="text-center mx-auto mt-lg-5  p-lg-2" >
                            <Card.Body className="m-lg-2">
                                {/* <p>{user.displayName}</p> */}
                                <Card.Title className="mt-5">First Login Please</Card.Title>

                                <Button onClick={handleGoggle} className="mt-3"><i className="fab fa-google mx-2"></i>Login with Google</Button>

                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;