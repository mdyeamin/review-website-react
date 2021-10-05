import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-area">
            <Row className="footer">
                <Col md={3} className="footer-head">
                    <h4>Code <span className="span-color f-head">Education</span> </h4>
                    <p>Contact us to learn <br /> about our courses</p>
                    <h5>Fllow Us:</h5>
                    <div className="ico">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </Col>
                <Col md={3}>
                    <h4 className="text-white f-head">Take a tour</h4>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Entertainment</p>
                    <p>Support</p>
                </Col>
                <Col md={3}>
                    <h4 className="text-white f-head">Our Company</h4>
                    <p>Avout Us</p>
                    <p>Blog</p>
                    <p>Meadia</p>
                    <p>Contact Us</p>
                </Col>
                <Col md={3}>
                    <h4 className="text-white f-head">Subscribe</h4>
                    <p>subscribe to get the latest <br /> news from us</p>
                    <div class="input-group input-group-sm mb-3">

                        <input type="text" class="form-control" placeholder="entar your email..." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        <button type="button" class="btn btn-warning"><i class="fas fa-arrow-right"></i></button>
                    </div>
                </Col>

            </Row >
            <hr />
            <p className="text-center">&#169; Code Education 2021</p>
        </div>
    );
};

export default Footer;