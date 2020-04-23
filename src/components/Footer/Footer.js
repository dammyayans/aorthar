import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';
import '../GlobalStyles/global.css';

import ContactSection from './fContatctSection';
import DescSection from './fDescSection';
import OtherLinks from './fOtherLinks';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container fluid className="a-footer-wrapper">
                    <Container>
                        <ContactSection />
                        <DescSection />
                        <OtherLinks />
                    </Container>
                </Container>
            </footer>
        );
    }
}

export default Footer;