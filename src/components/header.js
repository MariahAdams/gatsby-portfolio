import React, { Component } from 'react';

class Header extends Component {
  
  render() { 
    return (
      <div>
        <nav>
          <span className="menu-toggle">Menu <i className="fas fa-bars"></i></span>
          <div className="menu-content">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
          </div>
        </nav>
    </div>
    );
  }
}
 
export default Header;