import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SCP from './components/pages/SCP';
import Video from './components/pages/Video';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/scp' component={SCP} />
          <Route path='/video' component={Video} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
