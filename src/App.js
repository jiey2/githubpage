import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume'
import CoverLetter from './CoverLetter'
import Navbar from './Components/Navbar'

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        <Router basename="/">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/resume'component={Resume}/>
            <Route exact path='/coverletter' component={CoverLetter} />
          </Switch>
        </Router>
      </React.Fragment>
    );
    
  }
}
 
export default App;


  

