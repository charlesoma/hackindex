import React, { Component } from "react";
import '../App.css';
import { FaGithub } from 'react-icons/fa';

class Header extends Component {
  render() {
    return (
      <div className="header" id="myHeader">
        <h2 className="logo">HackIndex.co</h2>
        <p className="contribute">
            <span className="contribute-1">Contribute on</span> 
            <a href="https://github.com/charlesoma/hackindex" className="link"> 
            <span className="span"> Github</span> <FaGithub className="github" /></a>
        </p>
      </div>
    );
  }
}
 
export default Header;