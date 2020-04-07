import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  { Link }  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './GetStarted.css';

import  Placeholder from '../../images/Opeyemi.png';

// import ContactSection from './';
// import DescSection from './';
// import OtherLinks from './';

class GetStarted extends Component {
    render() {
        return (
            <Container fluid className="a-get-started-wrapper">
                <Col md={{ span: 8, offset: 2 }}>
                    <Row>
                        <Col xs={12} md={6} className="a-get-started-heading">
                            <h1>
                                Ready to start <br /> with <span>Us?</span>
                            </h1>
                            <p className="a-get-started-caption">Let's build something together! Enjoy the <br />luxury of working with us or contact us <br/> below</p>
                            <select>
                                <option>Select a service</option>
                                <option>
                                    <Link to="/">Design</Link>
                                </option>
                                <option>
                                    <Link to="/">Design</Link>
                                </option>
                                <option>
                                    <Link to="/">Design</Link>
                                </option>
                            </select>
                            <p className="a-get-started-contact">Send us a mail via <span>hello@aorthar.com</span><br />or call: +234(0) 814 422 8160</p>
                        </Col>
                        <Col xs={12} md={6} className="">
                            <Row className="justify-content-md-center">
                                <Col md="auto" className="a-get-started-testimonies">
                                    <img src={Placeholder} alt="person" />
                                    <div>
                                        <div className="a-get-started-words">
                                            <p>
                                                Aorthar has immersed itself into
                                                the work they do and that has made
                                                them outstanding from the rest. They
                                                give us so much attention to their work
                                                and every little detail matters so much
                                                to them.
                                            </p>
                                            <p><span>-</span>Karr Johnson</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default GetStarted;