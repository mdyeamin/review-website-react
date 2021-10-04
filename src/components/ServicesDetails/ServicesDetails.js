import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./ServicesDetails.css"
const ServicesDetails = (props) => {
    const { tamb, title, dec, price } = props.service
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tamb} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{dec.slice(0, 70)} </Card.Text>
                    <div className="enroll">
                        <Button variant="primary">Enroll Now</Button>
                        <h2>${price}</h2>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServicesDetails;