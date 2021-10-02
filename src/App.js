import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import ExperienceDetail from './ExperienceDetail'

import { Link, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/education">education</Link></li>
            <li><Link to="/experience">experience</Link></li>
          </ul>
        </nav>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/education" component={Education}></Route>
        <Route exact path="/experience" component={Experience}></Route>

        <Route exact path="/experience/:identifier" component={ExperienceDetail}></Route>
      </div>
    )
  }

}

export default App;
