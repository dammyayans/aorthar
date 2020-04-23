import React, { Component } from 'react';

// import  { Link }  from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';
import GetStarted from '../../components/GetStarted/GetStarted';
import Contentdesign from '../../images/Damola.png';
// import Contentwriting from '../../images/contentwriting.png';
// import Mediamanagement from '../../images/mediamanagement.png';

export default class Confirmation extends Component {
    render() {
        return (
            <Container fuid>
                <Container className="a-response-wrapper">
                    <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={6} sm={12}>
                                <h2 className="a-wwa-who">Unlimited designs for your brand</h2>
                            </Col>
                            <Col xs={12} md={6} sm={12}>
                                <div className="a-wwa-caption">
                                Aorthar has delivered sterling service to a wide array of 
                                businesses in a variety of industries, leaving a trail of 
                                thoroughly satisfied clients. Across every engagement,
                                there is one in common, irrepressible theme: out commitment 
                                to excellence and branding that looks so real; it lives. Here
                                some of our previous works.
                                </div>
                            </Col>
                        </Row> 
                    </Col>

                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={4} className="a-response-card">
                                <img src={Contentdesign} alt=""/>
                                <h3 className="a-response-card-heading">Content Design</h3>
                                <p>We design every content you create or content we develop for you into graphics.</p>
                            </Col>
                            <Col xs={12} md={4} className="a-response-card">
                                <img src={Contentdesign} alt=""/>
                                <h3 className="a-response-card-heading">Content Writing</h3>
                                <p>We write for you, your captions, your newsletters, your blogs and articles.</p>
                            </Col>
                            <Col xs={12} md={4} className="a-response-card">
                                <img src={Contentdesign} alt=""/>
                                <h3 className="a-response-card-heading">Social Media Management</h3>
                                <p>We manage social media pages and interact with your audience on your behalf.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col  md={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} className="a-how-it-works">
                        <Row>
                            <Col xs={12} md={5}>
                                <h2 className="a-wwa-who">How it works</h2>
                            </Col>
                            <Col xs={12} md={4} sm={12}>
                                <div className="a-wwa-caption">
                                    At Aorthar, our singular task is to help make brandsburst into life. 
                                    Our goal is to create  a distinct and memorable experience through 
                                    compelling visual and verbal cues.
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={12}>
                        <Row className="">
                        
                            <Col md={4} className="a-response-rate-cards">
                                <div className="a-response-rate-cards-item">
                                    <p className="a-rate-cards-title text-center">Basic</p>
                                    <div>
                                        <span className="a-rate-cards-heading">Social Media Management</span>
                                        <p className="a-rate-cards-list">Instagram and Twitter</p>
                                        <p className="a-rate-cards-list">5 engaging posts weekly</p>
                                        <p className="a-rate-cards-list">Instagram stories inclusive</p>
                                        <p className="a-rate-cards-list line-through">Facebook stories inclusive</p>
                                        <p className="a-rate-cards-list line-through">Facebook page engagement</p>
                                        <p className="a-rate-cards-list line-through">Dedicated page manager</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="a-rate-cards-heading">Design Subscription</span>
                                        <p className="a-rate-cards-list">20 orders with moderate review</p>
                                        <p className="a-rate-cards-list">1 order at a time</p>
                                        <p className="a-rate-cards-list">24 - 48 hours update</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="a-rate-cards-heading">Content Writing</span>
                                        <p className="a-rate-cards-list">1500 word count</p>
                                        <p className="a-rate-cards-list">Social Media Content Writeup</p>
                                    </div>
                                    <div className="text-center amount pt-5">N100,000</div>
                                </div>
                            </Col>

                            <Col md={4} className="a-response-rate-cards justify-content-md-center">
                                <div className="a-response-rate-cards-item">
                                    <p className="a-rate-cards-title text-center">Premium</p>
                                    <div>
                                        <span className="a-rate-cards-heading">Social Media Management</span>
                                        <p className="a-rate-cards-list">Instagram and Twitter</p>
                                        <p className="a-rate-cards-list">10 engaging posts weekly</p>
                                        <p className="a-rate-cards-list">Instagram stories inclusive</p>
                                        <p className="a-rate-cards-list line-through">Facebook stories inclusive</p>
                                        <p className="a-rate-cards-list line-through">Facebook page engagement</p>
                                        <p className="a-rate-cards-list line-through">Dedicated page manager</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="a-rate-cards-heading">Design Subscription</span>
                                        <p className="a-rate-cards-list">30 orders with moderate review</p>
                                        <p className="a-rate-cards-list">2 order at a time</p>
                                        <p className="a-rate-cards-list">24 - 48 hours update</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="a-rate-cards-heading">Content Writing</span>
                                        <p className="a-rate-cards-list">3000 word count</p>
                                        <p className="a-rate-cards-list">Social Media Content Writeup</p>
                                    </div>
                                    <div className="text-center amount pt-5">N150,000</div>
                                </div>
                            </Col>

                            <Col md={4} className="a-response-rate-cards justify-content-md-center">
                            <div className="a-response-rate-cards-item">
                                    <p className="a-rate-cards-title text-center">Pro</p>
                                    <div>
                                        <span className="a-rate-cards-heading">Social Media Management</span>
                                        <p className="a-rate-cards-list">Instagram, Twitter and Facebook</p>
                                        <p className="a-rate-cards-list">20 engaging posts weekly</p>
                                        <p className="a-rate-cards-list">Instagram stories inclusive</p>
                                        <p className="a-rate-cards-list">Facebook stories inclusive</p>
                                        <p className="a-rate-cards-list">Facebook page engagement</p>
                                        <p className="a-rate-cards-list">Dedicated page manager</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="a-rate-cards-heading">Design Subscription</span>
                                        <p className="a-rate-cards-list">40 orders with moderate revisions</p>
                                        <p className="a-rate-cards-list">Priority support</p>
                                        <p className="a-rate-cards-list">24 - 48 hours update</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="a-rate-cards-heading">Content Writing</span>
                                        <p className="a-rate-cards-list">6000 word count</p>
                                        <p className="a-rate-cards-list">Social Media Content Writeup</p>
                                    </div>
                                    <div className="text-center amount pt-5">N300,000</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Container>
                <GetStarted />
        </Container>
        )
    }
}
