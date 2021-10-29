import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, googleSignOut } = useAuth();
    return (
        <div className="header">
            <Navbar className="" expand="lg">
                <Container>
                    <Navbar.Brand className="logo-name">Get Set Go</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link ms-1 fw-bold" to="/home">Home</Link>
                            <Link className="nav-link ms-1 fw-bold" to="/services">Services</Link>
                            <Link className="nav-link ms-1 fw-bold" to="/login">Login</Link>
                            {
                                user.email &&
                                <>
                                    <Link className="nav-link ms-1 fw-bold" to="/myOrders" >My Orders</Link>
                                    <Link className="nav-link ms-1 fw-bold" to="manageAllOrders" >Manage All Orders</Link>
                                    <Link className="nav-link ms-1 fw-bold" to="/addNewService" >Add a New Service</Link>
                                    <Button className="nav-link ms-1 fw-bold" onClick={googleSignOut} >Log Out</Button>


                                </>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;