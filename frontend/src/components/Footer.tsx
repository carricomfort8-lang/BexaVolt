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
                    <strong>5 YEAR WARRANTY</strong>
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
              </div>
              
              <div className={styles.btnAndTrust}>
                <Link href="#quote" className="btn-primary">
                  GET A FREE QUOTE
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                
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
              {/* Social icons placeholders */}
              <div className={styles.socialIcon}>f</div>
              <div className={styles.socialIcon}>i</div>
              <div className={styles.socialIcon}>y</div>
              <div className={styles.socialIcon}>l</div>
            </div>
          </div>

          <div className={styles.linkGrid}>
            <div className={styles.linkCol}>
              <h4>COMPANY</h4>
              <Link href="/about">About Us</Link>
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
              <a href="mailto:Sales@BexaVolt.com.au">Sales@BexaVolt.com.au</a>
              <a href="mailto:Support@BexaVolt.com.au">Support@BexaVolt.com.au</a>
              <a href="mailto:Info@BexaVolt.com.au">Info@BexaVolt.com.au</a>
              <a href="mailto:Accounts@BexaVolt.com.au">Accounts@BexaVolt.com.au</a>
              <a href="tel:+61272415565">+61 2 7241 5565</a>
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
