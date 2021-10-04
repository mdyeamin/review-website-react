import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import aboutBannar from '../../bannar/about.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <Row className="align-items-center justify-content-center about-area">

                <Col xs={6} md={5}>
                    <img src={aboutBannar} alt="" />
                </Col>
                <Col xs={6} md={7}>
                    <h2>About  <br /> Dear Courses</h2>
                    <p>Computer programming is the process that professionals use to write code that instructs how a computer, application or software program performs. At its most basic, computer programming is a set of instructions to facilitate specific actions. ... That's what computer programming is all about.</p>
                    <Button>Course Overview</Button>
                </Col>

            </Row>
        </div>
    );
};

export default About;