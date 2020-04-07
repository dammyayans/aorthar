import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footerdesc.css';

import Career from '../../images/career.png';
import Download from '../../images/download.png';
import TandC from '../../images/tandc.png';
import Feedback from '../../images/feedback.png';


class fDescSection extends Component {
    render() {
        return (
           <div class="footer-desc-section">
                <p class="text-center footer-desc-section-item">
                    <span>Office: </span>
                    <span> No. 19a, Ogundana Street, Off Allen Avenue, Ikeja, Lagos State.</span>
                </p>
                <div class="footer-contact-section">
                    <div>
                        <span>Email: </span>
                        <Link to="/">hello@aorthar.com</Link>
                    </div>
                    <div>
                        <span>Contact: </span>
                        <Link to="/">+234(0) 814 422 8160</Link>
                    </div>
                </div>  
                <div className="d-flex justify-content-between footer-base-section">
                    <span>
                        &copy; 2019 - 2020 Aorthar Design Agency - RC 2986050
                    </span>
                    <span class="footer-base-links">
                        <Link><img src={TandC} alt="Feedback" /> Terms & Conditions</Link>
                        <Link><img src={Feedback} alt="Feedback" /> Write us a Feedback</Link>
                        <Link><img src={Download} alt="Rate Card" /> Download our Rate Card</Link>
                        <Link><img src={Career} alt="Rate Card" /> Career & Internship</Link>
                    </span>
                </div>              
           </div>
        );
    }
}

export default fDescSection;