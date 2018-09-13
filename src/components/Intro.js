import React, { Component } from 'react';

class Intro extends Component {
  
  render() { 
    return (
      <section className="intro">
        <hgroup>
          <h1>Hello, I'm Mariah!</h1>
          <img src="https://avatars3.githubusercontent.com/u/35393465?s=460&v=4" alt="Mariah Adams" width="200px"/>
        </hgroup>  
  
        <article>
          <p>Full Stack JavaScript Developer.</p>
        </article>
      </section>
    );
  }
}
 
export default Intro;