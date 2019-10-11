import React from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import Beers from './components/Beers';
import Navigation from './components/Navigation';
 import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/'><Navigation/></Route>
      <Route exact path='/'><Home/></Route>
      <Route path='/beers'><Beers/></Route>
    </div>
  </Router>
  );
}

export default App;
