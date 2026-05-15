'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} glass`}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoAccent}>Bexa</span>
            <span className={styles.logoWhite}>Volt</span>
            <span className={styles.logoTag}>⚡</span>
          </Link>

          <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {['HOME','ABOUT','CHARGERS','FEATURES','INSTALLATION','CONTACT'].map(item => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <span className={styles.navUnderline} />
              </Link>
            ))}
          </div>

          <div className={styles.navRight}>
            <Link href="#quote" className={`btn-primary ${styles.ctaNav}`}>
              GET A FREE QUOTE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={menuOpen ? styles.barOpen : ''} />
              <span className={menuOpen ? styles.barOpen : ''} />
              <span className={menuOpen ? styles.barOpen : ''} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
