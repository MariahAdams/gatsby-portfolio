import React from "react";
import Header from '../components/Header';
import Intro from '../components/Intro';
import ProjectsList from '../components/projects/ProjectsList';
import About from './about';
import Footer from '../components/Footer';


export default () => (
  <div>
    <header>
      <Header />
    </header>
    
    <main>
      <Intro />
  
      <ProjectsList />
  
      <About />
    </main>
  
    <footer>
      <Footer />
    </footer>
  </div>
);
