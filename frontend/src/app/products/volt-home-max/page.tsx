'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltUltraProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [connector, setConnector] = useState<'tethered' | 'socket'>('tethered');

  const basePrice = phase === 'single' ? 1799 : 2299;
  const finalPrice = connector === 'tethered' ? basePrice : basePrice - 100;
  const priceDisplay = `$${finalPrice.toLocaleString()}`;
  const power = phase === 'single' ? '7.4kW' : '22kW';

  return (
    <div className={styles.page}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <AnimateIn direction="left" delay={1}>
                <span className={styles.labelTag}>Flagship Smart Charger</span>
              </AnimateIn>
              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Volt <span className={styles.titleHighlight}>Ultra</span>
                </h1>
              </AnimateIn>
              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>The pinnacle of home charging.</p>
              </AnimateIn>
              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The VoltHome Max is our ultimate flagship EV charger — combining every premium feature 
                  into one exceptional unit. Solar integration, RFID security, 4G LTE backup, 
                  dynamic load management, and an integrated colour display, all in premium brushed aluminium.
                </p>
              </AnimateIn>
              <AnimateIn direction="left" delay={5}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Up to {power} maximum charging output</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Built-in 3.5" colour touchscreen display</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Solar integration with Eco/Eco+/Fast modes</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>RFID access, 4G LTE eSIM &amp; Ethernet connectivity</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>IP67 &amp; IK10 aerospace-grade aluminum enclosure</span>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn direction="left" delay={6}>
                <div className={styles.optionsWrapper}>
                  <div className={styles.phaseContainer}>
                    <span className={styles.selectorLabel}>Select Power Phase</span>
                    <div className={styles.phaseSelector}>
                      <button
                        onClick={() => setPhase('single')}
                        className={`${styles.phaseBtn} ${phase === 'single' ? styles.phaseBtnActive : ''}`}
                      >
                        7.4kW - Single Phase
                      </button>
                      <button
                        onClick={() => setPhase('three')}
                        className={`${styles.phaseBtn} ${phase === 'three' ? styles.phaseBtnActive : ''}`}
                      >
                        22kW - Three Phase
                      </button>
                    </div>
                  </div>
                  <div className={styles.phaseContainer}>
                    <span className={styles.selectorLabel}>Select Connector Type</span>
                    <div className={styles.phaseSelector}>
                      <button
                        onClick={() => setConnector('tethered')}
                        className={`${styles.phaseBtn} ${connector === 'tethered' ? styles.phaseBtnActive : ''}`}
                      >
                        Tethered (7m Cable)
                      </button>
                      <button
                        onClick={() => setConnector('socket')}
                        className={`${styles.phaseBtn} ${connector === 'socket' ? styles.phaseBtnActive : ''}`}
                      >
                        Universal Socket
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn direction="left" delay={6}>
                <div className={styles.priceLabel}>
                  {priceDisplay}<span>AUD</span>
                </div>
                <div className={styles.heroActions}>
                  <button className={styles.btnPrimary}>
                    Buy Ultra Only
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                  <button className={styles.btnSecondary}>
                    Get Fully-Installed Quote
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS RIBBON */}
      <section className={styles.specsBarSection}>
        <div className="container">
          <div className={styles.specsBarGrid}>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Up to {power}</h4>
                <p>Flagship output power</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Colour Touchscreen</h4>
                <p>3.5" integrated display</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Solar Ready</h4>
                <p>Eco / Eco+ / Fast modes</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>RFID + 4G LTE</h4>
                <p>Always connected</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2v10z"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>IP67 &amp; IK10</h4>
                <p>Ultimate protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE SHOWCASE */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.imageShowcaseWrap}>
              <img src="/ultra2.png" alt="VoltHome Max In Action" className={styles.showcaseStaticCharger} />
            </div>
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>EVERY PREMIUM FEATURE. ONE UNIT.</h3>
              <h2 className={styles.sectionTitle}>The ultimate charger.<br />For every home.</h2>
              <p className={styles.sectionDesc}>
                VoltHome Max brings together every advanced BexaVolt technology into a single premium unit — 
                with a built-in colour display, solar integration, RFID, 4G backup, and maximum power delivery.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>01</span></div>
                  <div className={styles.featureRowText}>
                    <h4>Integrated 3.5" Colour Touchscreen</h4>
                    <p>View live charge rate, session cost, solar capture, and error diagnostics right on the unit — no phone needed.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>02</span></div>
                  <div className={styles.featureRowText}>
                    <h4>Full Solar Integration</h4>
                    <p>Dynamic solar surplus matching in Eco, Eco+, or Fast mode. Charge from the sun for $0.00 per session.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>03</span></div>
                  <div className={styles.featureRowText}>
                    <h4>RFID Security with Access Log</h4>
                    <p>Restrict use with RFID tap cards. Full access log visible from the BexaVolt app dashboard.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>04</span></div>
                  <div className={styles.featureRowText}>
                    <h4>4G LTE + Ethernet Failover</h4>
                    <p>Maintains live cloud connectivity even if your home Wi-Fi drops, using a built-in 4G LTE eSIM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UTILITY SHOWCASE */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>ZERO COMPROMISE CHARGING</h3>
              <h2 className={styles.sectionTitle}>No trade-offs.<br />Just perfection.</h2>
              <p className={styles.sectionDesc}>
                Ultra owners enjoy the complete BexaVolt experience — from solar-free overnight scheduling 
                to RFID-protected daytime access, all visible on the on-unit display.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Complete Solar Independence</h4>
                    <p>Works with all solar inverter brands. Full export matching with real-time surplus data on your display.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>7m Ultra-Flex Tethered Cable</h4>
                    <p>The longest standard tethered cable in the range, reaching even the furthest EV charge port position.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Universal Type 2 Compatibility</h4>
                    <p>Compatible with every Type 2 EV sold in Australia including Tesla, BYD, Kia, Rivian, and BMW.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imageShowcaseWrap}>
              <img src="/ultra3.png" alt="VoltHome Max Charging" className={styles.showcaseStaticCharger} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHONE APP SECTION */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.appShowcaseCol}>
              <img src="/ultra4.png" alt="VoltHome Max App" className={styles.appShowcaseImage} />
            </div>
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>FULL SYSTEM VISIBILITY</h3>
              <h2 className={styles.sectionTitle}>Your entire charging<br />ecosystem. One app.</h2>
              <p className={styles.sectionDesc}>
                The BexaVoltHome Max app experience gives you access to every feature — from solar routing 
                reports to RFID access logs, on-unit screen control, and monthly carbon savings.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Live Solar + Grid Dashboard</h4>
                    <p>See exactly how much solar is powering your EV vs. grid draw, updated every second.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>RFID Access Logs</h4>
                    <p>Review who accessed the charger and when — ideal for shared households or fleet charging.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Monthly Savings Reports</h4>
                    <p>Detailed breakdowns of energy costs saved versus standard grid tariff, updated monthly.</p>
                  </div>
                </div>
              </div>
              <div className={styles.badgeWrapper}>
                <svg width="120" height="40" viewBox="0 0 120 40" style={{ cursor: 'pointer', borderRadius: '5px' }}>
                  <rect width="120" height="40" fill="#000" rx="6" stroke="#222" />
                  <path d="M15 12c.5-1 1-2.5 1-4a3.8 3.8 0 0 0-2.5 3c-.5.8-1 2.2-1 3.5a3 3 0 0 0 2.5-2.5z M19 28c-.5 1.5-1.5 3-2.5 3s-1.2-1-2.2-1-1.5 1-2.3 1-1.8-1.5-2.5-3a12 12 0 0 1 0-7c.8-1.5 2-2.5 3-2.5s1.5.5 2.2.5.8-.5 2.2-.5 2.2 1 2.8 2.5" fill="#fff" />
                  <text x="35" y="18" fill="#fff" fontSize="8" fontWeight="600" fontFamily="sans-serif">Download on the</text>
                  <text x="35" y="30" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">App Store</text>
                </svg>
                <svg width="120" height="40" viewBox="0 0 120 40" style={{ cursor: 'pointer', borderRadius: '5px' }}>
                  <rect width="120" height="40" fill="#000" rx="6" stroke="#222" />
                  <polygon points="12,10 12,30 25,20" fill="#A3E635" />
                  <text x="35" y="18" fill="#fff" fontSize="7" fontWeight="600" fontFamily="sans-serif">GET IT ON</text>
                  <text x="35" y="30" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Google Play</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS */}
      <section className={styles.specsSection}>
        <div className={styles.specsBanner}>
          <div className="container">
            <h2 className={styles.specsBannerTitle}>TECHNICAL SPECIFICATIONS</h2>
            <div className={styles.specsBannerLine} />
          </div>
        </div>
        <div className={styles.specsTableWrap}>
          <div className="container">
            <div className={styles.specsTable}>
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Charging Power</span>
                  <span className={styles.specItemVal}>Up to {power} (32A)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Input / Output Voltage</span>
                  <span className={styles.specItemVal}>{phase === 'single' ? '230V AC, 50Hz' : '400V AC, 50Hz'}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Connector Type</span>
                  <span className={styles.specItemVal}>{connector === 'tethered' ? 'Type 2 Tethered (7m)' : 'Type 2 Universal Socket'}</span>
                </div>
              </div>
              <div className={styles.specsColDivider} />
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Connectivity</span>
                  <span className={styles.specItemVal}>Wi-Fi (2.4/5GHz), Ethernet (RJ45), Bluetooth, 4G LTE eSIM</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Display</span>
                  <span className={styles.specItemVal}>3.5" Colour Touchscreen LCD</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>App Compatibility</span>
                  <span className={styles.specItemVal}>iOS &amp; Android (Ultra Command V3)</span>
                </div>
              </div>
              <div className={styles.specsColDivider} />
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Safety Features</span>
                  <span className={styles.specItemVal}>PEN Fault, Overcurrent, Overheat, Leakage, CT Load Balancing, RFID Lock, OTA Updates</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Protection Rating</span>
                  <span className={styles.specItemVal}>IP67 Submersion-Proof / IK10 Impact Rated</span>
                </div>
              </div>
              <div className={styles.specsColDivider} />
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Operating Temperature</span>
                  <span className={styles.specItemVal}>-35°C to 60°C</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Dimensions (H x W x D)</span>
                  <span className={styles.specItemVal}>340 x 210 x 120 mm</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Weight</span>
                  <span className={styles.specItemVal}>
                    {phase === 'single'
                      ? (connector === 'tethered' ? '4.6 kg' : '3.2 kg')
                      : (connector === 'tethered' ? '5.8 kg' : '4.1 kg')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM PILLARS GRID */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/></svg>
              </div>
              <h4>Solar Integration</h4>
              <p>Maximise free solar charging with real-time surplus routing and dedicated Eco modes.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4>On-Unit Display</h4>
              <p>Check live data, session history, and charge modes directly on the built-in touchscreen.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2v10z"/></svg>
              </div>
              <h4>IP67 &amp; IK10</h4>
              <p>Full submersion protection and the highest impact rating in the BexaVolt product range.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h4>RFID + 4G LTE</h4>
              <p>Tap-card access control plus built-in 4G cellular keeps the unit always online.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h4>Premium Support</h4>
              <p>Ultra owners receive priority access to our dedicated engineering support team Australia-wide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WARRANTY BANNER */}
      <section className={styles.warrantySection}>
        <div className="container">
          <div className={styles.warrantyBanner}>
            <div className={styles.warrantyOverlay} />
            <div className={styles.warrantyContent}>
              <h3 className={styles.warrantyEyebrow}>5-YEAR WARRANTY</h3>
              <h2 className={styles.warrantyHeading}>Our best charger. Our best warranty.</h2>
              <p className={styles.warrantyDesc}>
                VoltHome Max comes standard with our exclusive 5-year comprehensive warranty — the longest 
                coverage in the BexaVolt lineup, including priority support and next-business-day swap.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn about the Ultra warranty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <h3>EXPERIENCE THE PINNACLE OF HOME CHARGING</h3>
          <h2>Ready to go Ultra?</h2>
          <p>Get a standalone VoltHome Max or arrange a complete professional home installation today.</p>
          <div className={styles.bottomCtaActions}>
            <button className={styles.btnPrimary}>
              Buy Ultra Only
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className={styles.btnSecondary}>
              Get Fully-Installed Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
