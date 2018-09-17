import React, { Component } from 'react';

class Intro extends Component {
  
  render() { 
    return (
      <section className="intro" id="top">
        <hgroup>
          <h1>Mariah Adams</h1>
          {/* <img src="https://avatars3.githubusercontent.com/u/35393465?s=460&v=4" alt="Mariah Adams" width="200px"/> */}
          <p>Full Stack JavaScript Developer.</p>
        </hgroup>  
      </section>
    );
  }
}
 
export default Intro;