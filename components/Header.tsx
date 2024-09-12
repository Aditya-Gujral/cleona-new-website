// Header.js

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Import the CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/landing-page" className={styles.logo}>
        CLEONA
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/landing-page" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/insights" className={styles.navItem}>
              Insights
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navItem}>
              Reproductive Assistant
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

