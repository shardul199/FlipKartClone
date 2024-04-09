// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>Flipkart</Link>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..."/>
        <button type="submit">Submit</button>
      </div>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
