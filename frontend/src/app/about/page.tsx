import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export const metadata = {
  title: 'About BexaVolt — Charge at home. Go places.',
  description: 'At BexaVolt, we help Australians make home EV charging part of everyday life, with smart technology, distinctive design and straightforward guidance.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgGlow} />
        <div className="container">
          <div className={styles.heroContent}>
            <AnimateIn direction="up" delay={1}>
              <span className={styles.heroEyebrow}>AUSTRALIAN EV CHARGING</span>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <h1 className={styles.heroTitle}>
                About <span className={styles.titleHighlight}>BexaVolt</span>
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <p className={styles.heroTagline}>
                Charge at home. Go places.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={4}>
              <div className={styles.heroIntroText}>
                <p>
                  Your next journey starts in your driveway. At BexaVolt, we help Australians make home EV charging part of everyday life, with smart technology, distinctive design and straightforward guidance.
                </p>
                <p>
                  Whether you’re bringing home your first electric vehicle or upgrading your charging setup, we’ll help you explore a solution that suits your car, your property and the way you drive.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={5}>
              <div className={styles.heroActions}>
                <Link href="/quote" className="btn-primary">
                  Get a Free Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
                <Link href="/#products" className="btn-secondary">
                  Explore Chargers
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 2. DESIGNED TO STAND OUT SECTION */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureGrid}>
            {/* Left Content */}
            <div className={styles.featureLeft}>
              <AnimateIn direction="left" delay={1}>
                <span className={styles.subEyebrow}>SMART TECHNOLOGY &amp; DESIGN</span>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <h2 className={styles.featureHeading}>
                  Designed to stand out. <br />
                  <span className={styles.titleHighlight}>Built around your day.</span>
                </h2>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.featureLead}>
                  Home charging should look the part and fit your routine.
                </p>
              </AnimateIn>

              <AnimateIn direction="left" delay={4}>
                <p className={styles.featureDesc}>
                  The BexaVolt Volt Ultra combines a premium brushed aluminium finish with an integrated colour touchscreen, solar integration, RFID access and connected charging features. From managing charging sessions to exploring how your solar generation can support your EV, Volt Ultra puts useful technology within easy reach.
                </p>
              </AnimateIn>

              <AnimateIn direction="left" delay={5}>
                <div className={styles.pillList}>
                  <div className={styles.featurePill}>
                    <span className={styles.pillCheck}>✓</span>
                    Brushed Aluminium Finish
                  </div>
                  <div className={styles.featurePill}>
                    <span className={styles.pillCheck}>✓</span>
                    Integrated Colour Touchscreen
                  </div>
                  <div className={styles.featurePill}>
                    <span className={styles.pillCheck}>✓</span>
                    Solar Matching &amp; ECO Modes
                  </div>
                  <div className={styles.featurePill}>
                    <span className={styles.pillCheck}>✓</span>
                    RFID Access &amp; App Connectivity
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right Visual Image */}
            <div className={styles.featureRight}>
              <AnimateIn direction="right" delay={2}>
                <div className={styles.imageCard}>
                  <div className={styles.imageCardInner}>
                    <img
                      src="/ultra1.png"
                      alt="BexaVolt Volt Ultra Charger"
                      className={styles.productImg}
                    />
                    <div className={styles.imgBadge}>
                      <span className={styles.badgeDot} />
                      <span>Volt Ultra Flagship</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOME CHARGING, THE AUSTRALIAN WAY */}
      <section className={styles.ausWaySection}>
        <div className="container">
          <div className={styles.ausHeader}>
            <AnimateIn direction="up" delay={1}>
              <span className={styles.subEyebrow}>LIFESTYLE &amp; RELIABILITY</span>
            </AnimateIn>
            <AnimateIn direction="up" delay={2}>
              <h2 className={styles.ausHeading}>
                Home charging, <span className={styles.titleHighlight}>the Australian way</span>
              </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={3}>
              <p className={styles.ausSubtitle}>
                Early starts. School runs. Weekend escapes. Wherever life takes you, charging at home gives you the convenience of plugging in where you park.
              </p>
            </AnimateIn>
          </div>

          <div className={styles.ausCardsGrid}>
            <AnimateIn direction="up" delay={1}>
              <div className={styles.routineCard}>
                <div className={styles.routineIcon}>🌅</div>
                <h3>Early starts</h3>
                <p>Wake up each morning to a full battery ready for the commute, charged overnight on low-cost off-peak tariffs.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <div className={styles.routineCard}>
                <div className={styles.routineIcon}>🎒</div>
                <h3>School runs</h3>
                <p>Effortless short hops and family transport without ever having to plan trips around public charging queues.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <div className={styles.routineCard}>
                <div className={styles.routineIcon}>🚙</div>
                <h3>Weekend escapes</h3>
                <p>Hit the open road across regional Australia with full confidence in your charging range and home setup.</p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn direction="up" delay={4}>
            <div className={styles.adviceBanner}>
              <div className={styles.adviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.adviceContent}>
                <h4>Professional Guidance &amp; Licensed Assessment</h4>
                <p>
                  We help you understand your options, from vehicle compatibility and available electrical supply to the site details needed for a tailored quote. A licensed electrician assesses installation requirements, so your setup starts with the right advice.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 4. YOUR DRIVEWAY. YOUR NEXT STEP. */}
      <section className={styles.drivewaySection}>
        <div className="container">
          <div className={styles.drivewayBox}>
            <div className={styles.drivewayBgGlow} />

            <AnimateIn direction="up" delay={1}>
              <span className={styles.drivewayEyebrow}>GET STARTED</span>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <h2 className={styles.drivewayHeading}>
                Your driveway. <span className={styles.titleHighlight}>Your next step.</span>
              </h2>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <p className={styles.drivewayText}>
                Tell us what you drive and where you park. Let’s explore a BexaVolt charging solution for your home.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={4}>
              <div className={styles.drivewayBtnRow}>
                <Link href="/quote" className="btn-primary">
                  Start Online Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
                <Link href="/our-story" className="btn-secondary">
                  Read Our Story
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 5. READY TO PLUG IN? CONTACT & SALES BLOCK */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.contactLeft}>
              <h3 className={styles.contactTitle}>Ready to plug in? Give us a call.</h3>
              <p className={styles.contactSubtitle}>
                Our Australian EV charging specialists are here to answer questions, check vehicle compatibility, and arrange electrical site assessments.
              </p>

              <div className={styles.contactPoints}>
                <a href="tel:0272415565" className={styles.contactPhoneLink} title="Call 02 7241 5565">
                  <div className={styles.phoneIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Call Sales:</span>
                    <strong className={styles.contactValuePhone}>02 7241 5565</strong>
                  </div>
                </a>

                <a href="mailto:Sales@BexaVolt.com.au" className={styles.contactEmailLink} title="Email Sales">
                  <div className={styles.emailIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Email:</span>
                    <strong className={styles.contactValueEmail}>Sales@BexaVolt.com.au</strong>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.contactRight}>
              <div className={styles.brandMottoCard}>
                <div className={styles.brandBadge}>BexaVolt</div>
                <p className={styles.brandMottoText}>
                  At home in your driveway. Ready for your next journey.
                </p>
                <div className={styles.footnote}>
                  Features vary by configuration. Charging output depends on your vehicle, electrical supply and installation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
