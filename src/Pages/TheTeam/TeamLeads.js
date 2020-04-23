import React from 'react'


import './style.css';
import { Container, Row, Col} from 'react-bootstrap';

import Damola from '../../images/Damola.png';
import Pelumi from '../../images/Pelumi.png';
import Naomi from '../../images/Naomi.png';   
import Opeyemi from '../../images/Opeyemi.png';
// import Jolly from '../../images/Jolly.png';
import Erica from '../../images/Erica.png';   
// import G1 from '../../images/gallery1.png'
// import G2 from '../../images/gallery2.png'
// import G3 from '../../images/gallery3.png'

export default function TeamLeads() {
    return ( 
        <div class="a-team-leads">
              <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}  className="a-team-card-holder pt-5">
                        <Row>
                            <Col xs={12} md={4} className="a-blog-cards">
                                <img src={Damola} alt="" className="img"/>
                                <div className="a-blog-cards-heading pb-1">Adewale Adedamola</div>
                                <p>Team Lead, CEO</p>
                            </Col>
                            <Col xs={12} md={4} className="a-blog-cards">
                                <img src={Pelumi} alt="" className="img"/>
                                <div className="a-blog-cards-heading pb-1">Eniodunmo Pelumi</div>
                                <p>Software and Tech</p>
                            </Col>
                            <Col xs={12} md={4} className="a-blog-cards">
                                <div>
                                    <img src={Naomi} alt="" className="img"/>
                                    <div className="a-blog-cards-heading pb-1">Odidi Naomi</div>
                                    <p>Business Developer, COO</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{ span: 10, offset: 1 }} className="a-blog-card-holder pt-3">
                        <Row>
                            <Col xs={12} md={4} className="">
                                <img src={Opeyemi} alt="" className="img"/>
                                <div className="a-blog-cards-heading pb-1">Adewale Adedamola</div>
                                <p>Content Development, CIO</p>
                            </Col>
                            <Col xs={12} md={4} className="">
                                <img src={Pelumi} alt="" className="img"/>
                                <div className="a-blog-cards-heading pb-1">Eniodunmo Pelumi</div>
                                <p>Design and Creatives</p>
                            </Col>
                            <Col xs={12} md={4} className="">
                                <div>
                                    <img src={Erica} alt="" className="img"/>
                                    <div className="a-blog-cards-heading pb-1">Abala Erica</div>
                                    <p>Customer Relations, CFO</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="a-team-gallery-wrapper">
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={4}>
                                <h2>Gallery</h2>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="a-team-caption">
                                    At Aorthar, our singular task is to help make brands burst
                                    into life. Our goal is to create distinct and memorable
                                    experience through compelling visual and verbal
                                </div>
                            </Col>
                        </Row> 
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={4} className="a-team-bg1"></Col>
                            <Col xs={12} md={4} className="a-team-bg2"></Col>
                            <Col xs={12} md={4} className="a-team-bg3"></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>  
        </div>
    )
}
