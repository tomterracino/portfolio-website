import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route  path="/resume" component={Resume}/>
        <Route  path="/projects" component={Projects}/>
        <Route  path="/about" component={About}/>
      </div>

    </Router>
    );
  }
}

export default App;
