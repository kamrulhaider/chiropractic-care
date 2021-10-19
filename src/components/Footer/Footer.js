import React from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark bg-gradient py-5 mt-5">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <div className="col-md-6 text-center">
                        <h3 className="text-light">Chiropractic Care</h3>
                        <p className="text-light">"Chiropractic is a pseudoscientific alternative medicine."</p>
                    </div>
                    <div className="col-md-6">
                        <Nav className="d-flex justify-content-center">
                            <Link className="text-light mx-3" to="/">Home</Link>
                            <Link className="text-light mx-3" to="/therapies">Therapies</Link>
                            <Link className="text-light mx-3" to="/about">About Us</Link>
                            <Link className="text-light mx-3" to="/contact">Doctors</Link>
                        </Nav>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;