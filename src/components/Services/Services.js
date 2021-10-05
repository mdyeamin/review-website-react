import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import './Services.css'
import serviceBannar from '../../bannar/servises.png'
import { Col, Row } from 'react-bootstrap';
const Services = () => {

    const [servicesItem, setServicesItem] = useState([])
    useEffect(() => {
        fetch('./homeDb.json')
            .then(res => res.json())
            .then(data => setServicesItem(data))
    }, [])
    return (
        <div>
            <Row className="justify-content-md-center align-items-center servises-area">
                <Col md={1}>

                </Col>
                <Col md={4}>
                    <div>
                        <img src={serviceBannar} alt="" />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="servises">

                        <h2 className="code-educat">Our services and courses</h2>
                        <p className="service-dec">
                            programming service means such services as the manufacturer or Service Provider generally make available without separate charge in connection with programming. For purposes of this Agreement, the terms “Programming” and “Programming Services” do not include Service Provider’s
                        </p>
                    </div>
                </Col>
                <Col md={1}>

                </Col>
            </Row>
            <h2 className="all-services">All Services</h2>
            <div className="services-container">
                {
                    servicesItem.map(service => <ServicesDetails
                        key={service.id}
                        service={service}
                    >

                    </ServicesDetails>)
                }
            </div>
        </div>
    );
};

export default Services;