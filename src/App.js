import React, { Component } from 'react'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from '../src/components/other/Navbar';

import Team from './components/pages/Team';
import Enterprise from './components/pages/Enterprise';
import Trending from './components/pages/Explore';
import Marketplace from './components/pages/Marketplace';
import Pricing from './components/pages/Pricing';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      search : '',
    }
    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(value){
    this.setState({search : value});
  }

  render() {
    return (
      <div>   
      <Router>
      <NavBar setSearch={this.setSearch}/>        
        <Switch>
          <Route path="/team">
          <Team /> 
          </Route>
          <Route path="/enterprise">
          <Enterprise />
          </Route>
          <Route path="/explore">
            <Trending search={this.state.search}/>
          </Route>
          <Route path="/marketplace">
            <Marketplace />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </Router>
    </div>
    )
  }
}


