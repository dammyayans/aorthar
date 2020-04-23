import React from 'react'


import { Container, Row, Col} from 'react-bootstrap';
import '../../components/GlobalStyles/global.css'
export default function headerSection() {
    return (
        <Container>
            <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                <Row>
                    <Col xs={12} md={6} sm={12}>
                        <h2 className="bigText">
                            <span className="black">Branding so  </span>
                            <span className="green">real, </span> <br />
                            <span className="black">it lives</span>
                        </h2>
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
                <Row>
                    <div class="a-previous-works1">
                        qknlsslknlgnklnlnln
                    </div>
                    <div class="a-previous-works">
                        
                    </div>
                    <div class="a-previous-works">

                    </div>
                </Row>
            </Col>
            <Col>
                <Row>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis, suscipit nisi incidunt, labore minus impedit 
                    distinctio natus aliquid aliquam maxime nobis hic, error 
                    recusandae assumenda esse ducimus quaerat autem rerum?
                </Row>
            </Col>
        </Container>
    )
}
