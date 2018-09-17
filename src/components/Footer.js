import React, { Component } from 'react';
import styles from './Footer.scss';

class Footer extends Component {
  
  render() { 

    return (
      <footer className={styles.footer}>
        <span>
          &copy; <time dateTime="2018">Mariah Adams 2018</time>
        </span>
          <a href="#top">Back to the top</a>
      </footer>
    );
  }
}
 
export default Footer;