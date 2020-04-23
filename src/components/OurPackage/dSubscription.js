import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


import './OurPackage.css';
import '../GlobalStyles/global.css';

import { Col } from 'react-bootstrap';

import Forward from '../../images/forward.png';



export default class DesignSubscription extends Component {
    render() {
        return (     
            <Col xs={12} md={12} className="px-0 a-our-packages-heading">
                <h1 className="bigText">Subscribe to <span className="green">our</span><br /> Design Package</h1>
                <p>We can handle all the media designs your brand would need
                   at anytime by subscribing to our subscription service.
                </p>
                {/* <Link to="/subscription" className="a-our-packages-more">Read more <img src={Forward} alt="forward"/></Link> */}
                <a href="/" className="a-wwa-readmore">Read more <img src={Forward} alt="forward" /></a>
            </Col>
        );
    }
}
