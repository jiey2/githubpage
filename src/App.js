import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useEffect } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import CoverLetter from './CoverLetter';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/coverletter" component={CoverLetter} />
          </Switch>
        </HashRouter>
        <Footer/>
      </React.Fragment>
    );

  }
}

export default App;




