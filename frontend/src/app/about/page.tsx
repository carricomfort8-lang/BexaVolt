import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Story & Mission — BexaVolt | Smart Australian EV Charging',
  description: "BexaVolt’s story centres on a simple idea: make home EV charging easier to understand and easier to fit into everyday Australian life.",
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
              <span className={styles.heroEyebrow}>ABOUT BEXAVOLT</span>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <h1 className={styles.heroTitle}>
                Our <span className={styles.titleHighlight}>Story</span>
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <p className={styles.heroTagline}>
                A better charging experience starts at home.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 2. THE STORY NARRATIVE */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            {/* Left Column: Narrative Copy */}
            <div className={styles.storyLeft}>
              <AnimateIn direction="left" delay={1}>
                <h2 className={styles.storyLead}>
                  Switching to an electric vehicle opens up new possibilities. Choosing how to charge it should feel just as exciting.
                </h2>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <p className={styles.storyParagraph}>
                  BexaVolt’s story centres on a simple idea: make home EV charging easier to understand and easier to fit into everyday Australian life.
                </p>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.storyParagraph}>
                  We bring together smart charging technology, distinctive design and straightforward guidance to help customers choose with confidence. From the first enquiry, our focus is on understanding your vehicle, your property and what you need from your charging setup.
                </p>
              </AnimateIn>

              {/* Callout Box */}
              <AnimateIn direction="left" delay={4}>
                <div className={styles.productCallout}>
                  <div className={styles.calloutAccent} />
                  <p className={styles.calloutText}>
                    <strong>The Volt Ultra</strong> reflects that approach, pairing a refined finish with features that put charging information and control within reach.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={5}>
                <p className={styles.storyClosing}>
                  For us, the experience goes beyond the charger on the wall. It’s about helping you feel ready for the road ahead.
                </p>
              </AnimateIn>
            </div>

            {/* Right Column: Visual Feature Showcase */}
            <div className={styles.storyRight}>
              <AnimateIn direction="right" delay={2}>
                <div className={styles.showcaseCard}>
                  <div className={styles.cardImageWrap}>
                    <img
                      src="/ultra1.png"
                      alt="BexaVolt Volt Ultra Smart EV Charger"
                      className={styles.cardImg}
                    />
                    <div className={styles.cardOverlayGradient} />
                  </div>

                  <div className={styles.cardBadgeRow}>
                    <div className={styles.trustBadge}>
                      <span className={styles.trustBadgeDot} />
                      <span>AUSTRALIAN OWNED</span>
                    </div>
                    <div className={styles.trustBadge}>
                      <span className={styles.trustBadgeDot} />
                      <span>2 YEAR WARRANTY</span>
                    </div>
                  </div>

                  <div className={styles.cardQuote}>
                    &ldquo;Charge at home. Go places.&rdquo;
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION */}
      <section className={styles.missionSection} id="mission">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <AnimateIn direction="up" delay={1}>
              <span className={styles.sectionEyebrow}>OUR MISSION</span>
            </AnimateIn>
            <AnimateIn direction="up" delay={2}>
              <h2 className={styles.sectionHeading}>
                Make home charging a <span className={styles.titleHighlight}>confident next step.</span>
              </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={3}>
              <p className={styles.sectionSub}>
                Our mission is to help Australians choose EV charging solutions that suit their homes and the way they drive.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={4}>
              <p className={styles.sectionLeadSub}>
                We put that mission into practice through:
              </p>
            </AnimateIn>
          </div>

          <div className={styles.pillarsGrid}>
            {/* Pillar 1 */}
            <AnimateIn direction="up" delay={1}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>01</div>
                <div className={styles.pillarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Clear advice</h3>
                <p className={styles.pillarDesc}>
                  Explain charging options in plain English, so customers can make informed decisions.
                </p>
              </div>
            </AnimateIn>

            {/* Pillar 2 */}
            <AnimateIn direction="up" delay={2}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>02</div>
                <div className={styles.pillarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Technology with a purpose</h3>
                <p className={styles.pillarDesc}>
                  Focus on features that support everyday convenience, charging control and solar integration where suitable.
                </p>
              </div>
            </AnimateIn>

            {/* Pillar 3 */}
            <AnimateIn direction="up" delay={3}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>03</div>
                <div className={styles.pillarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Design that belongs at home</h3>
                <p className={styles.pillarDesc}>
                  Bring thoughtful form and useful functionality together in a charger customers are proud to have in their driveway.
                </p>
              </div>
            </AnimateIn>

            {/* Pillar 4 */}
            <AnimateIn direction="up" delay={4}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarNumber}>04</div>
                <div className={styles.pillarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7.5" r="4"/>
                    <polyline points="17 11 19 13 23 9"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Guidance built around each customer</h3>
                <p className={styles.pillarDesc}>
                  Consider vehicle compatibility, property needs and electrical requirements, with installation assessed by a licensed electrician.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 4. OUR VISION */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionBox}>
            <div className={styles.visionGlow} />
            <AnimateIn direction="up" delay={1}>
              <span className={styles.visionEyebrow}>OUR VISION</span>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <h2 className={styles.visionHeading}>
                Home charging that feels like <span className={styles.titleHighlight}>second nature.</span>
              </h2>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <p className={styles.visionText}>
                We envision a future where more Australians can enjoy the convenience of charging where they live, with technology they understand and a setup that fits their lives.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={4}>
              <div className={styles.visionTaglineWrap}>
                <span className={styles.brandTagline}>BexaVolt</span>
                <span className={styles.brandDash}>—</span>
                <span className={styles.brandMotto}>Charge at home. Go places.</span>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={5}>
              <div className={styles.visionCtaRow}>
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

            {/* Sales Hotline Banner */}
            <AnimateIn direction="up" delay={6}>
              <div className="sales-call-banner">
                <span>Prefer to speak with an Australian EV specialist?</span>
                <a href="tel:0272415565" title="Call Sales: 02 7241 5565">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>CALL SALES: <strong>02 7241 5565</strong></span>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
