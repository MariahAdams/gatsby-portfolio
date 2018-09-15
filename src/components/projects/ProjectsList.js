import React, { Component } from 'react';
import styles from './Projects.scss';

class ProjectsList extends Component {
  
  render() { 
    return (
      <section className={styles.projects}>
        <header>
          <h2>My Projects.</h2>
        </header>

        <div>
          <article>
            <a href="./project-detail.html"><img src="" alt="splash page for project 1" /></a>
          </article>
    
          <article>
            <a href="./project-detail.html"><img src="" alt="splash page for project 2" /></a>
          </article>
          <article>
            <a href="./project-detail.html"><img src="" alt="splash page for project 1" /></a>
          </article>
    
          <article>
            <a href="./project-detail.html"><img src="" alt="splash page for project 2" /></a>
          </article>
          <article>
            <a href="./project-detail.html"><img src="" alt="splash page for project 1" /></a>
          </article>
    
          <article>
            <a href="./project-detail.html"><img src="" alt="splash page for project 2" /></a>
          </article>
        </div>
      </section>
    );
  }
}
 
export default ProjectsList;