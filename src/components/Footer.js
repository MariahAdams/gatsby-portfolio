import React, { Component } from 'react';
import styles from './Footer.scss';

class Footer extends Component {
  
  render() { 

    return (
      <footer className={styles.footer}>
        <span>
          &copy; <time dateTime="2018">2018</time>
        </span>
      </footer>
    );
  }
}
 
export default Footer;