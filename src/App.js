import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom";

import MovieDetail from './Page/Detail/movie-detail.component';
import HomePage from './Page/Homepage/home-page.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

 
  render() {
 
    return (
      <div className="App">
      
          <Switch> 
          <Route exact path="/" component={HomePage} />
          <Route path="/movie" component={MovieDetail}/>
         
          
          </Switch>
          
      </div>
    );
  }
}

export default App;
