import React, { Component } from 'react';


import './Blog.css';
import '../GlobalStyles/global.css';
import { Container, Row, Col } from 'react-bootstrap';

import Independence from '../../images/independence.png';
import Smes from '../../images/smes.png';
import Branding from '../../images/branding.png';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row className="a-blog-wrapper">
                    <Col md={{ span: 8, offset: 2 }} className="a-blog-heading">
                        <h2 className="bigText black">From the Blog</h2>    
                    </Col>
                    <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1}} className="a-blog-card-holder">
                        <Row>
                            <Col xs={12} md={4} className="a-blog-cards">
                                <img src={Independence} alt=""/>
                                <div className="a-blog-cards-heading smallText green">Nigeria at 59</div>
                                <p>An approach to SMEs</p>
                            </Col>
                            <Col xs={12} md={4} className="a-blog-cards">
                                <img src={Branding} alt=""/>
                                <div className="a-blog-cards-heading smallText green">Branding Gone Wrong</div>
                                <p>How mistakes cost the lives of some popular brands</p>
                            </Col>
                            <Col xs={12} md={4} className="a-blog-cards">
                                <div>
                                    <img src={Smes} alt=""/>
                                    <div className="a-blog-cards-heading smallText green">Branding 20 Young Entrepreneurs</div>
                                    <p>Aorthar's service to Small Business Owners</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
