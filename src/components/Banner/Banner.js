import React, { Component } from "react";

// import  { Link }  from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

import "../GlobalStyles/global.css";
import "./Banner.css";

import HeroImg from "../../images/heroImg.png";
import HeroImgD from "../../images/heroImgD.png";
import Company1 from "../../images/company1.png";
import Company2 from "../../images/company2.png";
import Company3 from "../../images/company3.png";

// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';

export default class Banner extends Component {
  render() {
    return (
      <Container fluid className="whitebg">
        <Container className="a-banner">
          <Row className="a-banner-wrapper justify-content-md-center">
            <Col md={4} className="a-banner-heroImg">
              <Row className="justify-content-md-center heroheroL">
                <img
                  src={HeroImg}
                  alt="Hero Img"
                  className="a-banner-heroImg"
                />
              </Row>
              <Row className="justify-content-md-center heroheroD">
                <img
                  src={HeroImgD}
                  alt="Hero Img"
                  className="a-banner-heroImgD"
                />
              </Row>
            </Col>
            <Col md={6} className="a-banner-caption">
              <h2 className="bigText">
                <span className="black">Craft your</span>
                <span className="green"> Identity</span>
              </h2>
              <p className="smallText blackText">
                We will help you deliver a unique outlook, communicate values
                that will pierce the heart of your targets, in a perfectly
                relatable and compelling manner.
              </p>
              <select>
                <option>Select a service</option>
                <option>Design</option>
                <option>Design</option>
                <option>Design</option>
              </select>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-md-center a-banner-trusted-brands whitebg">
          <Col md={3} xs={12} className="a-banner-brands-caption blackText">
            <div>These brands have trusted us --</div>
          </Col>
          <Col md={4}>
            <img
              src={Company1}
              alt="Company1"
              className="a-banner-company-img"
            />
            <img
              src={Company2}
              alt="Company2"
              className="a-banner-company-img"
            />
            <img
              src={Company3}
              alt="Company3"
              className="a-banner-company-img"
            />
          </Col>
        </Row>
        <Row className="a-banner-pattern"></Row>
      </Container>
    );
  }
}
