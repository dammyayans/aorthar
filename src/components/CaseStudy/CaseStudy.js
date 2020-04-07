import React, { Component } from 'react';

import './CaseStudy.css';
import { Container, Col, Row } from 'react-bootstrap';


export default class CaseStudy extends Component {
    render() {
        return (
            <Container className="a-case-study-wrapper a-case-study-wrapper">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row>
                        <Col xs={12} md={6} className="a-case-study-heading">
                            <h2>Case Study</h2>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="a-case-study-caption">
                                Have a glance at some selected works we are proud of, as
                                we delivered solutions to branding and design pattern and
                                design problems, with in-depth research, innovation and creativity
                            </div>
                        </Col>
                    </Row> 
                </Col>
                <Col md={{ span: 10, offset: 1 }}>
                    <Row>
                        <Col xs={12} md={4} className="a-case-study-cards">
                        
                        </Col>
                        <Col xs={12} md={4} className="a-case-study-cards">
                        
                        </Col>
                        <Col xs={12} md={4} className="a-case-study-cards">
                        
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }
}
