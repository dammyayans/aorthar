import React, { Component } from 'react';


import './OurPackage.css';
import { Col } from 'react-bootstrap';


export default class designQuotes extends Component {
    render() {
        return (     
            <Col xs={12} md={12} className="px-0 a-our-packages-quotes">
               <Col className="justify-content-md-center ">
                    <p>
                        The Design Thinking Process is a blend of Heart, Head and Hand.
                    </p>
                    <span>- Yu Siang Teo</span>
               </Col>
            </Col>
        );
    }
}
