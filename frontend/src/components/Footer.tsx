import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Final CTA Bar */}
      <div className={styles.ctaBar}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div>
              <p className={styles.ctaLabel}>READY TO POWER YOUR FUTURE?</p>
              <h2 className={styles.ctaTitle}>
                GET YOUR HOME EV CHARGER <br />
                <span className={styles.ctaHighlight}>INSTALLED TODAY.</span>
              </h2>
              <p className={styles.ctaSub}>Join thousands of Australians charging smarter at home.</p>
            </div>
            
            <div className={styles.ctaActions}>
              <div className={styles.badges}>
                <div className={styles.badge}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <strong>2 YEAR WARRANTY</strong>
                    <span>Peace of mind guaranteed.</span>
                  </div>
                </div>
                <div className={styles.badge}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div>
                    <strong>AUSTRALIAN OWNED</strong>
                    <span>Proudly supporting local.</span>
                  </div>
                </div>
                <div className={styles.badge}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <strong>AUSTRALIAN CALL CENTRE</strong>
                    <span>Local help: 02 7241 5565</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.btnAndTrust}>
                <div className={styles.ctaButtonGroup}>
                  <Link href="/quote" className="btn-primary">
                    GET A FREE QUOTE
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <a href="tel:0272415565" className={styles.btnCallSales}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>CALL SALES: <strong>02 7241 5565</strong></span>
                  </a>
                </div>
                
                <div className={styles.trustWrap}>
                  <div className={styles.avatarGroup}>
                    <div className={styles.avatar} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')` }} />
                    <div className={styles.avatar} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80')` }} />
                    <div className={styles.avatar} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80')` }} />
                  </div>
                  <div className={styles.trustText}>
                    <span>TRUSTED BY 1000+</span>
                    <strong>AUSTRALIAN EV OWNERS</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container">
        <div className={styles.footerMain}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="BexaVolt Logo" className={styles.logoImg} />
            </Link>
            <p className={styles.brandDesc}>Powering the Future of EV Charging.</p>
            <div className={styles.socials}>
              <a 
                href="https://www.facebook.com/profile.php?id=61596113495310" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="BexaVolt on Facebook"
                title="BexaVolt on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/bexavolt/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon} 
                aria-label="BexaVolt on Instagram" 
                title="BexaVolt on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <span className={styles.socialIcon} aria-label="YouTube" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </span>
              <span className={styles.socialIcon} aria-label="LinkedIn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
            </div>
          </div>

          <div className={styles.linkGrid}>
            <div className={styles.linkCol}>
              <h4>COMPANY</h4>
              <Link href="/about">About Us</Link>
              <Link href="/our-story">Our Story</Link>
              <Link href="/mission">Our Mission</Link>
              <Link href="/chargers">Our Chargers</Link>
              <Link href="/careers">Careers</Link>
            </div>
            <div className={styles.linkCol}>
              <h4>SUPPORT</h4>
              <Link href="/faq">FAQ</Link>
              <Link href="/warranty">Warranty</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className={styles.linkCol}>
              <h4>LEGAL</h4>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>

          
            <div className={styles.linkCol}>
              <h4>CONTACT</h4>
              <a href="tel:0272415565" className={styles.footerSalesHighlight} title="Call Australian Call Centre: 02 7241 5565">
                <span className={styles.footerSalesLabel}>AUSTRALIAN CALL CENTRE</span>
                <strong className={styles.footerSalesNum}>02 7241 5565</strong>
              </a>
              <a href="mailto:Sales@BexaVolt.com.au">Sales@BexaVolt.com.au</a>
              <a href="mailto:Support@BexaVolt.com.au">Support@BexaVolt.com.au</a>
              <a href="mailto:Info@BexaVolt.com.au">Info@BexaVolt.com.au</a>
              <a href="mailto:Accounts@BexaVolt.com.au">Accounts@BexaVolt.com.au</a>
            </div>

          <div className={styles.newsletter}>
            <h4>STAY UPDATED</h4>
            <p>Subscribe to get the latest news and offers from BexaVolt.</p>
            <form className={styles.newsForm}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2024 BexaVolt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
