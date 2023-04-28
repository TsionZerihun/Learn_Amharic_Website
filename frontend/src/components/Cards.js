import React, { Component } from 'react';
import Pronoun from "./Pronoun";
import Home from './Home';
import Intro from './Intro';
import Greet from './Greet';
import Days from './days';
import Month from './month';
import Number from './number';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      <Router>
        <Switch>
          <Route exact path="/">
          <Route path='/' component={Home }/>
          </Route>
            <Route path='/pro' component={Pronoun }/>
            <Route path='/intro' component={Intro }/>
            <Route path='/greet' component={Greet }/>
            <Route path='/days' component={Days }/>
            <Route path='/mon' component={Month }/>
            <Route path='/num' component={Number }/>

        </Switch>
      </Router>

       
     
    );
  }
}