import React from "react";
import Header from './header';


export default () => (
  <div>
    <header>
      <Header />
    </header>
    
    <main>
      <section className="intro">
        <hgroup>
          <h1>Hello, I'm Mariah!</h1>
          <img src="https://avatars3.githubusercontent.com/u/35393465?s=460&v=4" alt="Mariah Adams" width="200px"/>
        </hgroup>  
  
        <article>
          <p>Full Stack JavaScript Developer.</p>
        </article>
      </section>
  
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
  
      <section className="about">
        <hgroup>
          <h2>About Mariah.</h2>
          <img src="https://avatars3.githubusercontent.com/u/35393465?s=460&v=4" alt="Mariah Adams" />
        </hgroup>
        
        <article>
          <p>
            Mariah is a Full Stack JavaScript Developer currently living in the Pacific Northwest. She has a degree in business management from San Diego State University and experience in hospitality. 
          </p>
          <p>
            Ever since she completed the Disney College Program, it’s been her dream to create magical moments though code. She brings strong organizational skills, teamwork, and a desire to continuously learn to her work. 
          </p>
          <p>
            She is currently finishing up an intensive program with Alchemy Code Lab in Portland, Oregon. When she is not coding, you can find her baking, out in search of a good cup of coffee, or planning her next trip to Disney.
          </p>
        </article>
  
        <div className="social-media">
          <a href="https://github.com/MariahAdams">GI</a>
          <a href="https://www.linkedin.com/in/mariah-adams/">LI</a>
          <a href="#Instagram">Insta</a>
        </div>
      </section>
    </main>
  
    <footer>
      <span>&copy; <time dateTime="2018">2018</time></span>
    </footer>
  </div>
);
