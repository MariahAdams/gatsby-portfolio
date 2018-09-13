import React, { Component } from 'react';

class Projects extends Component {
  
  render() { 
    return (
      <section className="projects">
        <header>
          <h2>My Projects.</h2>
        </header>
  
        <article>
          <a href="./project-detail.html"><img src="" alt="splash page for project 1" /></a>
        </article>
  
        <article>
          <a href="./project-detail.html"><img src="" alt="splash page for project 2" /></a>
        </article>
      </section>
    );
  }
}
 
export default Projects;