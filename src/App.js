import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import CoverLetter from './CoverLetter';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import ProjectPage from './ProjectPage';
import NonePage from './NonePage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/coverletter" component={CoverLetter} />
            <Route exact path="/projects/undefined" component={NonePage} />
            <Route path="/projects/" component={ProjectPage} />
          </Switch>
        </HashRouter>
        <Footer/>
      </React.Fragment>
    );

  }
}

export default App;




