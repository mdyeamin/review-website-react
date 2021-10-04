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
                <Col sm={4}>
                    <div>
                        <img src={serviceBannar} alt="" />
                    </div>
                </Col>

                <Col sm={8}>
                    <div className="servises">

                        <h2>Our services and courses</h2>
                        <p>
                            programming service means such services as the manufacturer or Service Provider generally make available without separate charge in connection with programming. For purposes of this Agreement, the terms “Programming” and “Programming Services” do not include Service Provider’s programs and hardware manufacturer programs and services that are available for a separate charge or which are offered under separate written software license agreements (i.e., any programs that are not listed in the Sales Order).
                        </p>
                    </div>
                </Col>
            </Row>

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