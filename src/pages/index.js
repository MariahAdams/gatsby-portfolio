import React from "react";
import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/projects/Projects';


export default () => (
  <div>
    <header>
      <Header />
    </header>
    
    <main>
      <Intro />
  
      <Projects />
  
      <About />
    </main>
  
    <footer>
      <span>&copy; <time dateTime="2018">2018</time></span>
    </footer>
  </div>
);
