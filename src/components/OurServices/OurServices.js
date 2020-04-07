import React, { Component } from 'react';


import './OurServices.css';
import { Container, Col, Row } from 'react-bootstrap';



export default class OurServices extends Component {
    render() {
        return (
            <Container fluid className="a-our-services-bg">
                <Container className="a-our-services-wrapper">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2>
                                <span className="a-our-services-h1">Our </span>
                                <span className="a-our-services-h2">Services</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4>Branding</h4>
                            <p>
                                We give your product and brand a
                                distinctive look, unveiling the grasp of what 
                                your brand does, and what it stands for.
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4>Product Design</h4>
                            <p>We give your website a beautiful look, 
                                understandable and easy-to-use interface 
                                for your customers.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4>Content Marketing</h4>
                            <p>We deliver the perfect message to the
                            perfect listeners. We write blogs, stories, 
                            newsletter and needed captions.
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4>Software Development</h4>
                            <p>
                            We develop your apps and websites into a
                            perfect working prototype as we deliver 
                            design, front-end and back-end service.
                        </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
