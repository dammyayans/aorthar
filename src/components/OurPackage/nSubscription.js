import React, { Component } from 'react';


import './OurPackage.css';
import '../GlobalStyles/global.css';
import { Col } from 'react-bootstrap';



export default class NewsletterSubscription extends Component {
    render() {
        return (     
            <Col xs={12} md={12} className="px-0 a-our-packages-heading push">
                <h1 className="bigText">Subscribe to <span className="green">our</span><br /> Newsletters</h1>
                <p>Discover how companies all over the world use design
                    to create and end up being a step ahead of the competition.
                </p>
                <div className="a-our-packages-form">
                    <form>
                        <input placeholder="Email" />   
                        <input value="Submit" type="button" /> 
                    </form>
                </div>
            </Col>
        );
    }
}
