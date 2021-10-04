import React from 'react';
import { Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap';

import './Home.css'
import bannar from '../../bannar/bannar.jpg'
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Home = () => {

    const [serviceItem, setServiceItem] = useState([])
    useEffect(() => {
        fetch('./homeDb.json')
            .then(res => res.json())
            .then(data => setServiceItem(data.slice(0, 4)))
    }, [])
    return (
        <div>
            <div className="header-fixed">
                <div className="d">
                    <h1 className="text-white">Code Edication</h1>
                    <h5 className="mb-5">Deep expressions are made for coding </h5>
                    <>
                        <Button className="me-5" variant="primary">Enroll 753$</Button>{' '}
                        <Button variant="outline-primary">Free Preview</Button>{' '}
                    </>
                    <p className="mt-5">Our team is always working for you to present difficult issues in an easy way <br /> <small>Learn programming with fun</small></p>
                </div>
            </div>

            <div className="header-fixed-part" gap={3}>
                <Row>
                    <Col md={6}>
                        <div className="header-title">
                            <h1><i class="bi bi-alt"></i>Code Educarion</h1>
                            <h3>Your Life Easy & Productive learning process</h3>
                            <p className="p">
                                Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.
                            </p>
                            <InputGroup className="mb-3 input">
                                <FormControl
                                    placeholder="Which programming language do you prefer?"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-dark" id="button-addon2">
                                    Send
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="bannar" src={bannar} alt="" />
                    </Col>
                </Row>
            </div>
            <div className="facilities">
                <h1 className="facilities">Our Courses</h1>
            </div>
            <div className="cart-container">

                {
                    serviceItem.map(service =>
                        <Service
                            key={service.id}
                            service={service}>

                        </Service>
                    )
                }
            </div>
        </div>
    );
};

export default Home;