import React from "react";
import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/projects/Projects';
import Footer from '../components/Footer';


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
      <Footer />
    </footer>
  </div>
);
