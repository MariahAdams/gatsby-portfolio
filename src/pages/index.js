import React from "react";
import Header from '../components/Header';
import Intro from '../components/Intro';
import ProjectsList from '../components/projects/ProjectsList';
import About from '../components/About';
import Footer from '../components/Footer';
import styles from './Index.module.scss';


export default () => (
  <div className={styles.index}>
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
