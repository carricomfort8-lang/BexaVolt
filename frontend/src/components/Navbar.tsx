'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="BexaVolt Logo" className={styles.logoImg} />
          </Link>

          <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {/* For Home with Mega Menu Hover Trigger */}
            <div
              className={styles.navItemWithMega}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                href="/"
                className={`${styles.navLink} ${megaOpen ? styles.navLinkActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                For Home
                <svg
                  className={`${styles.chevron} ${megaOpen ? styles.chevronOpen : ''}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.navUnderline} />
              </Link>

              {/* Mega Menu overlay */}
              {megaOpen && (
                <div className={styles.megaMenuContainer}>
                  {/* Left Column: Products */}
                  <div className={styles.megaLeft}>
                    {[
                      { name: 'VoltHome S', desc: 'Smart home charging', img: '/img23-removebg-preview.png' },
                      { name: 'VoltHome Solar', desc: 'Solar optimized', img: '/img23-removebg-preview.png' },
                      { name: 'VoltHome Pro', desc: 'EV ready. Future ready.', img: '/img23-removebg-preview.png' },
                      { name: 'VoltHome Max', desc: 'Three-phase power', img: '/img23-removebg-preview.png' },
                    ].map(prod => (
                      <Link href="#chargers" key={prod.name} className={styles.megaProductItem}>
                        <div className={styles.megaProductContent}>
                          <div className={styles.megaProductImgWrap}>
                            <img src={prod.img} alt={prod.name} className={styles.megaProductImg} />
                          </div>
                          <div className={styles.megaProductDetails}>
                            <span className={styles.megaProductName}>{prod.name}</span>
                            <span className={styles.megaProductDivider} />
                            <span className={styles.megaProductDesc}>{prod.desc}</span>
                          </div>
                        </div>
                        <span className={styles.megaProductArrow}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                        </span>
                      </Link>
                    ))}

                    <Link href="#chargers" className={styles.megaProductItem}>
                      <div className={styles.megaProductContent}>
                        <div className={styles.megaCompareIcon}>
                          ⚖
                        </div>
                        <span className={styles.megaProductName} style={{ marginLeft: '1.5rem' }}>Compare Chargers</span>
                      </div>
                      <span className={styles.megaProductArrow}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                      </span>
                    </Link>
                  </div>

                  {/* Right Column: Featured Promo Card */}
                  <div className={styles.megaRight}>
                    <div className={styles.megaRightTextCol}>
                      <div>
                        <h3 className={styles.megaCardTitle}>
                          Home <br />
                          <span className={styles.megaCardTitleHighlight}>charging</span>
                        </h3>
                        <div className={styles.megaCardLine} />
                        <p className={styles.megaCardTag}>Smart. Safe. Sustainable.</p>
                        <p className={styles.megaCardSub}>Power your home, power your future.</p>
                      </div>
                      
                      <Link href="#chargers" className={styles.megaCardBtn}>
                        Explore Home Chargers
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                      </Link>
                    </div>

                    {/* Float mounted charger visual */}
                    <div className={styles.megaRightChargerWrap}>
                      <div className={styles.megaRightGlow} />
                      <img src="/img23-removebg-preview.png" alt="Featured Charger" className={`${styles.megaRightImg} float-animation`} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {[
              { label: 'Business', href: '#business' },
              { label: 'Installers', href: '#installers' },
              { label: 'Support', href: '#support' },
              { label: 'About Us', href: '#about' },
            ].map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <span className={styles.navUnderline} />
              </Link>
            ))}
          </div>

          <div className={styles.navRight}>
            {/* Store Button */}
            <Link href="#store" className={styles.storeBtn}>
              Store
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </Link>

            {/* Get a Quote Button */}
            <Link href="#quote" className={`btn-primary ${styles.ctaNav}`}>
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18L15 12L9 6"/>
              </svg>
            </Link>

            {/* Globe Icon */}
            <button className={styles.iconBtn} aria-label="Language">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </button>

            {/* Shopping Bag Icon with Count "0" */}
            <button className={styles.iconBtn} aria-label="Cart">
              <div className={styles.cartIconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span className={styles.cartBadge}>0</span>
              </div>
            </button>

            {/* Hamburger (Mobile Menu Toggle) */}
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
