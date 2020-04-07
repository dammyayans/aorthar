import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './Pages/Home';
import TheTeam from './Pages/TheTeam';
import OurWorks from './Pages/OurWorks';
import Confirmation from './Pages/Confirmation';
import Subscription from './Pages/Subscription';

// import Confirmation from './Pages/sub';
// import Response from './Pages/Response';

export default function App() {
  return (
    <Router>
      <Navbar />
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

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      <Footer /> 
    </Router>
  );
}
