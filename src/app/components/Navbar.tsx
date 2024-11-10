'use client'; // Ensure this is a client-side component

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>RamshaN..</div>
      <div className={styles.hamburger} onClick={handleToggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
}
