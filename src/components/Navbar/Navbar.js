import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Navbar.css";
import { Container } from "react-bootstrap";

import Logo from "../../images/logo.png";
import MenuBar from "../../images/menuicon.png";
import DarkModeIcon from "../../images/darkmodeicon.png";
class Navbar extends Component {
  render() {
    return (
      <nav className="a-navbar-wrapper sticky-top whitebgNav">
        <Container>
          <nav>
            <span className="a-navbar-logo-container">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
            </span>
            <span className="a-navbar-others">
              <span className="a-navbar-dm">
                {/* <img src={DarkModeIcon} alt="MenuBar"/>  */}
                <img
                  src={DarkModeIcon}
                  alt="MenuBar"
                  className="toggleMode"
                  onClick={this.props.onClick}
                />
              </span>
              <span className="a-navbar-menubar blackText">
                <img src={MenuBar} alt="MenuBar" />
                <span>Menu</span>
              </span>
            </span>
          </nav>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
