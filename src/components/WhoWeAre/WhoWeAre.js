import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../GlobalStyles/global.css';
import './WhoWeAre.css';

import { Container, Col, Row } from 'react-bootstrap';

import Person1 from '../../images/person1.png';
import Person2 from '../../images/person2.png';
import Forward from '../../images/forward.png';



export default class WhoWeAre extends Component {
    render() {
        return (
            <Container className="a-wwa-wrapper">
                <Col md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
                    <Row>
                        <Col xs={12} md={6} sm={12}>
                            <h2 className="bigText">
                                <span className="black">Who </span>
                                <span className="green">we </span>
                                <span className="black">are</span>
                            </h2>
                        </Col>
                        <Col xs={12} md={6} sm={12}>
                            <div className="a-wwa-caption">
                                We are a team of great minds to serve our consumers with 
                                excellent delivery service to achieve the function of 
                                usable products and help our client improve in sales and
                                revenue. <br /><br />
                                             
                                <p>We believe not just good, but top-notch branding and
                                    design keep your products relevant and enables your 
                                </p>
                                <div>
                                    <Link to="/" className="a-wwa-readmore">Read more <img src={Forward} alt="forward"/></Link>
                                </div>
                            </div>
                        </Col>
                    </Row> 
                </Col>
                <Row className="pt-4">
                    <Col  md={2}>
                    </Col>
                    <Col  md={8}>
                        <Row>
                            <Col md={6} className="image">
                                <img src={Person1} alt="Person1" className="image-single" />
                            </Col>
                            <Col md={6} className="image">
                                <img src={Person2} alt="Person2" className="image-single" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2} sm={8} className="a-wwa-sideline">
                        <div>
                            <p className="smallBoldText black">Find us on</p>
                            <span>
                                <li>
                                    <a href="https://fb.com">Facebook</a>                                
                                </li>
                                <li>
                                    <a href="https://fb.com">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://fb.com">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://fb.com">Google</a>
                                </li>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
