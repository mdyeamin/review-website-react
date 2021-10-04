import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-area">
            <Row>
                <Col md={6}>
                    <div className="links">
                        <Row>
                            <Col md={4}>
                                <h6>Library</h6>
                                <p>Code education</p>
                                <p>Inspiration</p>
                                <p>Tools</p>
                                <p>Resources</p>
                            </Col>
                            <Col md={4}>
                                <h6>topic</h6>
                                <p>HTML,CSS, Js</p>
                                <p>css frameworks</p>
                                <p>js frameworks</p>
                            </Col>
                            <Col md={4}>

                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="icon-area">
                        <div className="footer-icon">
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fa-linkedin-in"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div className="footer-links">
                            <h5>Blog</h5>
                            <h5>Airticle</h5>
                            <h5>Travelling</h5>
                            <h5>learning process</h5>
                        </div>
                    </div>
                </Col>

            </Row >
            <p>&#169; Code Education 2021</p>
        </div>
    );
};

export default Footer;