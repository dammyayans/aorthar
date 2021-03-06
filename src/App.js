import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import storage from "local-storage-fallback";

import "./App.css";
import "./components/Navbar/Navbar.css";

import { Container } from "react-bootstrap";

import Logo from "./images/logo.png";
import MenuBar from "./images/menuicon.png";
import DarkModeIcon from "./images/darkmodeicon.png";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import TheTeam from "./Pages/TheTeam";
import OurWorks from "./Pages/OurWorks";
import Confirmation from "./Pages/Confirmation";
import Subscription from "./Pages/Subscription";

import { ThemeProvider, createGlobalStyle } from "styled-components";
// import Confirmation from './Pages/sub';
// import Response from './Pages/Response';

const GlobalStyle = createGlobalStyle`

body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#EEE"};
  color: ${(props) => (props.theme.mode === "dark" ? "#FFF" : "#343434")};
}
.cover{
  color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#076847")};
}
.blackText{
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#343434")};
}
.whitebg{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#FFF"};
}
.whitebgNav{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#000" : "#FFF"};
}
.greybg{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#F3F3F3"};
}
.heroheroL{
  display: ${(props) => (props.theme.mode === "dark" ? "none" : "block")};
}
.heroheroD{
  display: ${(props) => (props.theme.mode === "dark" ? "block" : "none")};
}
.a-get-started-testimonies img{
  border: ${(props) =>
    props.theme.mode === "dark" ? "7px solid #343434" : "7px solid #fff"};
}
.toggleButton{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#343434" : "#000"};   
  color: ${(props) => (props.theme.mode === "dark" ? "#000" : "#343434")};   
}
.toggleMode{
  opacity: ${(props) => (props.theme.mode === "dark" ? ".5" : "1")};     
}
`;
function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <div className="cover">
            <NavBar
              onClick={() =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            />
            <Switch>
              <Route exact path="/Subscription">
                <Subscription />
              </Route>

              <Route exact path="/Confirmation">
                <Confirmation />
              </Route>

              <Route exact path="/OurWorks">
                <OurWorks />
              </Route>

              <Route exact path="/TheTeam">
                <TheTeam />
              </Route>

              {/* <Route component={ErrorPage} /> */}

              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
            <GlobalStyle />
          </div>
        </>
      </ThemeProvider>
    </Router>
  );
}
