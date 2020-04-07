import React from 'react'


import './style.css';
import { Container, Row, Col} from 'react-bootstrap';

import Erica from '../../images/Erica.png';
import Forward from '../../images/forward.png';

export default function index() {
    return (
        <Container fluid>
            <Container>
                <Row className="pp">
                    <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} className="push3">
                        <Row>
                            <Col xs={12} md={12} sm={12}>
                                <h2 className="font">Erica would get back to you</h2>
                            </Col>
                        </Row> 
                    </Col>
                    <Col  md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col md={4}>
                                <img src={Erica} alt='' className="erica"/>                            
                            </Col>
                            <Col md={8} className='bold'>
                                <h3>
                                    Hi ........
                                </h3>
                                <h3>
                                    I will send you a response shortly <br />
                                    You can also reach me on <span className="greenText">+234 (0) 814 422 8160</span>
                                </h3>
                            </Col>
                        </Row> 
                        <Row>
                            <div className="dark text-center">
                                <a href="/" >
                                    Go Back Home <img src={Forward} alt=''/>
                                </a>
                            </div>
                        </Row>
                    </Col>            
                </Row>
            </Container>
        </Container>
    )
}
