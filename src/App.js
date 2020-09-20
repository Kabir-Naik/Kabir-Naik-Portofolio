import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Route ,Switch} from "react-router-dom"
import Work from './Work';
import Testimonials from './Testimonials';
import About from './About';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/work" component={Work}/>
        <Route path="/testimonials" component={Testimonials}/>
        <Route path="/about" component={About}/>
     </Switch>
    </div>
  );
}

export default App;
