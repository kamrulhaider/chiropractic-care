import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Therapy.css';

const Therapy = (props) => {

    // using destructuring
    const { key, img, name, details } = props.therapy;

    return (
        <div>
            <Col>
                <Card className="border-0 therapy">
                    <Card.Img className="therapy-img" variant="top" src={img} />
                    <Card.Body className="therapy-body">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details.slice(0, 200)}...
                        </Card.Text>
                        <Link to={`/details/${key}`}>
                            <button className="btn btn-outline-dark">More Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Therapy;