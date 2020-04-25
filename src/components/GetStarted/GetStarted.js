import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import  { Link }  from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import "./GetStarted.css";
import "../GlobalStyles/global.css";

import Placeholder from "../../images/Opeyemi.png";
import Placeholder2 from "../../images/Damola.png";
import Placeholder3 from "../../images/Pelumi.png";

// import ContactSection from './';
// import DescSection from './';
// import OtherLinks from './';

class GetStarted extends Component {
  state = {
    randomQuote: { quote: "", image: "", author: "" },
  };
  myQuotes = [
    {
      quote:
        "Aorthar has immersed itself into the work they do and that has made them outstanding from the rest. They give us so much attention to their work and every little detail matters so much to them.",
      image: Placeholder,
      author: "Karr Johnson",
    },
    {
      quote:
        "If you are above twenty-one(21) in life and you've not started speaking in tongues, ha! my brother, your life is a joke . blah blah blah blah blah blah blah blah",
      image: Placeholder2,
      author: "Pastor Unknown",
    },
    {
      quote:
        "hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle hustle",
      image: Placeholder3,
      author: "Mike Tyson",
    },
  ];
  randomQuoteGenerator = () =>
    this.myQuotes[Math.floor(Math.random() * this.myQuotes.length)];
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ randomQuote: this.randomQuoteGenerator() });
    }, 4000);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }
  render() {
    return (
      <Container fluid className="a-get-started-wrapper greybg">
        <Col md={{ span: 8, offset: 2 }}>
          <Row>
            <Col xs={12} md={6} className="mb-sm-4 ">
              <div className="bigText">
                <div>Ready to start</div>
                <div>
                  with <span className="green">us?</span>
                </div>
              </div>
              <p className="a-get-started-caption blackText">
                Let's build something together! Enjoy the <br />
                luxury of working with us or contact us <br /> below
              </p>
              <select>
                <option>Select a service</option>
                <option>Design</option>
                <option>Design</option>
                <option>Design</option>
              </select>
              <p className="a-get-started-contact smallBoldText black">
                Send us a mail via{" "}
                <a
                  href="mailto:hello@aorthar.com"
                  className="green a-hello-aorthar"
                >
                  hello@aorthar.com
                </a>
                <br />
                or call: +234(0) 814 422 8160
              </p>
            </Col>
            <Col xs={12} md={6} className="">
              <Row className="justify-content-md-center blackText">
                <Col md={12} sm={2} xs={3}></Col>
                <Col
                  md={12}
                  sm={8}
                  xs={6}
                  className="mt-sm-4 mt-md-4 a-get-started-testimonies"
                >
                  <img src={this.state.randomQuote.image} alt="person" />
                  <div>
                    <div className="a-get-started-words">
                      <p className="blackText">
                        {this.state.randomQuote.quote}
                      </p>
                      <p className="blackText font-weight-bold">
                        {this.state.randomQuote.author}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={12} sm={2} xs={3}></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default GetStarted;
