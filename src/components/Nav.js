import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Html from "./Html";
import Css from "./Css";
import Javascript from "./Javascript";
 
class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="sidebar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/html">HTML</NavLink>
            <NavLink to="/css">CSS</NavLink>
            <NavLink to="/javascript">Javascript</NavLink>
          </div>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/html" component={Html}/>
             <Route path="/css" component={Css}/>
             <Route path="/javascript" component={Javascript}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Nav;