'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

interface MegaData {
  leftItems?: Array<{ name: string; desc: string; img: string; href: string }>;
  rightCard?: {
    titlePart1: string;
    titlePart2: string;
    tagline?: string;
    sub: string;
    btnText: string;
    btnHref: string;
    img: string;
  };
  wallMount?: Array<{ name: string; href: string }>;
  portable?: Array<{ name: string; href: string }>;
  accessories?: Array<{ name: string; href: string }>;
}

interface NavItem {
  key: string;
  label: string;
  href: string;
  hasMega: boolean;
  isProductsMega?: boolean;
  megaData: MegaData;
}

const navItems: NavItem[] = [
  {
    key: 'products',
    label: 'Products',
    href: '#products',
    hasMega: true,
    isProductsMega: true,
    megaData: {
      wallMount: [
        { name: 'Volt Pulse', href: '/products/volt-pulse' },
        { name: 'Volt Ultra', href: '/products/volt-ultra' },
      ],
      portable: [
        { name: 'Volt Go', href: '/products/volt-go' },
      ],
      accessories: [
        { name: 'Charging Accessories', href: '#accessories' },
      ],
      rightCard: {
        titlePart1: 'Explore',
        titlePart2: 'BexaVolt Products',
        sub: 'Smart charging solutions for every lifestyle.',
        btnText: 'View All Products',
        btnHref: '#products',
        img: '/img23-removebg-preview.png'
      }
    }
  },
  {
    key: 'home',
    label: 'For Home',
    href: '/',
    hasMega: true,
    megaData: {
      leftItems: [
        { name: 'VoltHome Pro', desc: 'EV ready. Future ready.', img: '/img23-removebg-preview.png', href: '/products/volt-home-pro' },
        { name: 'VoltHome Max', desc: 'Three-phase power', img: '/img23-removebg-preview.png', href: '/products/volt-home-max' },
      ],
      rightCard: {
        titlePart1: 'Home',
        titlePart2: 'charging',
        tagline: 'Smart. Safe. Sustainable.',
        sub: 'Power your home, power your future.',
        btnText: 'Explore Volt Mini',
        btnHref: '/products/volt-mini',
        img: '/img23-removebg-preview.png'
      }
    }
  },
  {
    key: 'business',
    label: 'Business',
    href: '#business',
    hasMega: true,
    megaData: {
      leftItems: [
        { name: 'VoltBusiness Ultra', desc: 'Ultra-fast DC rapid charging', img: '/img23-removebg-preview.png', href: '#business' },
        { name: 'VoltBusiness Fleet', desc: 'Smart software management', img: '/img23-removebg-preview.png', href: '#business' },
      ],
      rightCard: {
        titlePart1: 'Commercial',
        titlePart2: 'charging',
        tagline: 'Scalable. Profitable. Smart.',
        sub: 'Future-proof solutions for enterprises.',
        btnText: 'Explore Commercial Solutions',
        btnHref: '#business',
        img: '/img23-removebg-preview.png'
      }
    }
  },
  {
    key: 'installers',
    label: 'Installers',
    href: '#installers',
    hasMega: true,
    megaData: {
      leftItems: [
        { name: 'Partner Portal', desc: 'Manage bookings & jobs', img: '/img23-removebg-preview.png', href: '#installers' },
        { name: 'BexaVolt Academy', desc: 'Certifications & training', img: '/img23-removebg-preview.png', href: '#installers' },
        { name: 'Technical Support', desc: '24/7 dedicated agent helpline', img: '/img23-removebg-preview.png', href: '#installers' },
        { name: 'Marketing Kit', desc: 'Brand assets & print materials', img: '/img23-removebg-preview.png', href: '#installers' },
      ],
      rightCard: {
        titlePart1: 'Installer',
        titlePart2: 'program',
        tagline: 'Certified. Supported. Scalable.',
        sub: "Join Australia's leading EV installer network.",
        btnText: 'Apply to Partner',
        btnHref: '#installers',
        img: '/img23-removebg-preview.png'
      }
    }
  },
  {
    key: 'support',
    label: 'Support',
    href: '#support',
    hasMega: true,
    megaData: {
      leftItems: [
        { name: 'Support Center', desc: 'Knowledge base & FAQs', img: '/img23-removebg-preview.png', href: '#support' },
        { name: 'Manuals & Downloads', desc: 'Spec sheets & user guides', img: '/img23-removebg-preview.png', href: '#support' },
        { name: 'Warranty Portal', desc: 'Online registration & claims', img: '/img23-removebg-preview.png', href: '#support' },
        { name: 'Book Service', desc: 'Professional maintenance scheduling', img: '/img23-removebg-preview.png', href: '#support' },
      ],
      rightCard: {
        titlePart1: 'BexaVolt',
        titlePart2: 'support',
        tagline: 'Responsive. Expert. Ready.',
        sub: 'Here to help you every step of the way.',
        btnText: 'Submit a Support Ticket',
        btnHref: '#support',
        img: '/img23-removebg-preview.png'
      }
    }
  },
  {
    key: 'about',
    label: 'About Us',
    href: '#about',
    hasMega: true,
    megaData: {
      leftItems: [
        { name: 'Our Story', desc: 'Mission, vision & founders', img: '/img23-removebg-preview.png', href: '#about' },
        { name: 'Our Technology', desc: 'Inside our premium EV engineering', img: '/img23-removebg-preview.png', href: '#about' },
        { name: 'Media & Press', desc: 'News, articles & resources', img: '/img23-removebg-preview.png', href: '#about' },
        { name: 'Careers', desc: 'Join the team powering the future', img: '/img23-removebg-preview.png', href: '#about' },
      ],
      rightCard: {
        titlePart1: 'BexaVolt',
        titlePart2: 'brand',
        tagline: 'Innovative. Clean. Australian.',
        sub: 'Redefining electrical vehicle charging technology.',
        btnText: 'Explore Our Story',
        btnHref: '#about',
        img: '/img23-removebg-preview.png'
      }
    }
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

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
            {navItems.map(item => {
              const isOpen = activeMega === item.key;
              return (
                <div
                  key={item.key}
                  className={styles.navItemWithMega}
                  onMouseEnter={() => setActiveMega(item.key)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    {item.hasMega && (
                      <svg
                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    <span className={styles.navUnderline} />
                  </Link>

                  {/* Mega Menu overlay */}
                  {item.hasMega && isOpen && (
                    item.isProductsMega ? (
                      <div className={`${styles.megaMenuContainer} ${styles.productsMegaContainer}`}>
                        {/* Column 1: Wall-Mount Charging */}
                        <div className={styles.megaCol}>
                          <div className={styles.megaColHeader}>
                            WALL-MOUNT CHARGING
                            <span className={styles.megaColHeaderLine} />
                          </div>
                          <div className={styles.megaProductList}>
                            {item.megaData.wallMount?.map(prod => (
                              <Link href={prod.href} key={prod.name} className={styles.megaSimpleLink}>
                                <span>{prod.name}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                              </Link>
                            ))}
                          </div>
                          <Link href="#compare-wall-mount" className={styles.comparePillBtn}>
                            Compare Wall-Mount Chargers
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                          </Link>
                        </div>

                        {/* Column 2: Portable Charging & Accessories */}
                        <div className={styles.megaCol}>
                          <div className={styles.megaColHeader}>
                            PORTABLE CHARGING
                            <span className={styles.megaColHeaderLine} />
                          </div>
                          <div className={styles.megaProductList}>
                            {item.megaData.portable?.map(prod => (
                              <Link href={prod.href} key={prod.name} className={styles.megaSimpleLink}>
                                <span>{prod.name}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                              </Link>
                            ))}
                          </div>
                          <Link href="#compare-portable" className={styles.comparePillBtn}>
                            Compare Portable Chargers
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                          </Link>

                          <div className={`${styles.megaColHeader} ${styles.accessoriesHeader}`}>
                            ACCESSORIES
                            <span className={styles.megaColHeaderLine} />
                          </div>
                          <div className={styles.megaProductList}>
                            {item.megaData.accessories?.map(prod => (
                              <Link href={prod.href} key={prod.name} className={styles.megaSimpleLink}>
                                <span>{prod.name}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Explore BexaVolt Products (Promo Card) */}
                        {item.megaData.rightCard && (
                          <div className={`${styles.megaRight} ${styles.productsMegaRight}`}>
                            <div className={styles.megaRightTextCol}>
                              <div>
                                <h3 className={styles.megaCardTitle}>
                                  {item.megaData.rightCard.titlePart1} <br />
                                  <span className={styles.megaCardTitleHighlight}>{item.megaData.rightCard.titlePart2}</span>
                                </h3>
                                <div className={styles.megaCardLine} />
                                <p className={styles.megaCardSub}>{item.megaData.rightCard.sub}</p>
                              </div>
                              
                              <Link href={item.megaData.rightCard.btnHref} className={styles.comparePillBtn}>
                                {item.megaData.rightCard.btnText}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                              </Link>
                            </div>

                            {/* Float mounted charger visual */}
                            <div className={styles.megaRightChargerWrap}>
                              <div className={styles.megaRightGlow} />
                              <img src={item.megaData.rightCard.img} alt="Featured Promo" className={`${styles.megaRightImg} float-animation`} />
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className={styles.megaMenuContainer}>
                        {/* Left Column: Products / Links */}
                        <div className={styles.megaLeft}>
                          {item.megaData.leftItems?.map(prod => (
                            <Link href={prod.href} key={prod.name} className={styles.megaProductItem}>
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
                        </div>

                        {/* Right Column: Featured Promo Card */}
                        {item.megaData.rightCard && (
                          <div className={styles.megaRight}>
                            <div className={styles.megaRightTextCol}>
                              <div>
                                <h3 className={styles.megaCardTitle}>
                                  {item.megaData.rightCard.titlePart1} <br />
                                  <span className={styles.megaCardTitleHighlight}>{item.megaData.rightCard.titlePart2}</span>
                                </h3>
                                <div className={styles.megaCardLine} />
                                {item.megaData.rightCard.tagline && (
                                  <p className={styles.megaCardTag}>{item.megaData.rightCard.tagline}</p>
                                )}
                                <p className={styles.megaCardSub}>{item.megaData.rightCard.sub}</p>
                              </div>
                              
                              <Link href={item.megaData.rightCard.btnHref} className={styles.megaCardBtn}>
                                {item.megaData.rightCard.btnText}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18L15 12L9 6"/></svg>
                              </Link>
                            </div>

                            {/* Float mounted charger visual */}
                            <div className={styles.megaRightChargerWrap}>
                              <div className={styles.megaRightGlow} />
                              <img src={item.megaData.rightCard.img} alt="Featured Promo" className={`${styles.megaRightImg} float-animation`} />
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.navRight}>
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
