import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import aboutBannar from '../../bannar/about.jpg'
import './About.css'
const About = () => {
    return (
        <div className="about">
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
            {/* align-items-center justify-content-center */}
            <Row className="about-icon">

                <Col xs={6} md={4}>
                    <div>
                        <Row className="align">
                            <Col md={3} className="spa">
                                <i class="fas fa-folder-minus"></i>
                            </Col>
                            <Col>
                                <h6>4,000+ Free best <br /> online courses</h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div>
                        <Row className="align ">
                            <Col md={3} className="spar">
                                <i class="fas fa-user"></i>
                            </Col>
                            <Col>
                                <h6>2,000+ Experienced <br />and expert mentor</h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div>
                        <Row className="align ">

                            <Col md={3} className="spa">
                                <i class="fas fa-pen-square"></i>
                            </Col>
                            <Col>
                                <h6>1.4M+ students rate <br /> and review</h6>
                            </Col>


                        </Row>
                    </div>
                </Col>

            </Row>
            <div className="choose-area" >
                <div className="why text-center">
                    <h2>Why Choose Code Education?</h2>
                    <p>Our code Education course is trying its best to give you detailed feedback</p>
                </div>
                <Row className="choose" >
                    <Col md={4}>
                        <Row className="choose-item">
                            <Col>
                                <div className="certificate">
                                    <i class="fas fa-user-graduate"></i>
                                </div>
                                <div>
                                    <h5>Get Certificate</h5>
                                    <p>We are providing a certificate  to <br />you after completing your course <br /> and this will help you future. </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="choose-item">
                            <Col>
                                <div className="membar">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div>
                                    <h5>Get Menbership</h5>
                                    <p>We are providing a office that you <br /> can join our membership club <br /> and will get some extra. </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="choose-item">
                            <Col>
                                <div className="teacher">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div>
                                    <h5>Become a Teacher</h5>
                                    <p>We are giving you to become a teacher after complating your course amd you can join freely. </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;