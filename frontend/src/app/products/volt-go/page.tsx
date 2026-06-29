'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltGoProductPage() {
  const [current, setCurrent] = useState<'8A' | '15A'>('8A');

  // Dynamic values based on Current selection
  const price = current === '8A' ? '$499' : '$599';
  const power = current === '8A' ? '1.8kW' : '3.6kW';
  const currentLabel = current === '8A' ? '8 Amp (Standard Outlet)' : '15 Amp (Caravan Outlet)';
  const currentDesc = current === '8A'
    ? 'Charges from any standard 10A household socket. Ideal for emergency overnight top-ups.'
    : 'Charges from a high-output 15A socket. Perfect for fast portable charging at caravan parks.';

  return (
    <div className={styles.page}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            
            {/* Left Info Column */}
            <div className={styles.heroLeft}>
              <AnimateIn direction="left" delay={1}>
                <span className={styles.labelTag}>Ultra-Portable EV Charger</span>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Portable <span className={styles.titleHighlight}>EV Charger</span>
                </h1>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>Power Anywhere, Charge Everywhere</p>
              </AnimateIn>

              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The BexaVolt portable EV charger delivers fast, safe and reliable charging for your electric vehicle.
                  <br /><br />
                  Designed for performance and convenience, it's the perfect companion at home, on the road or wherever you go.
                </p>
              </AnimateIn>

              {/* Checklist */}
              <AnimateIn direction="left" delay={5}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Up to 32A Fast Charging</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Integrated CPU</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Smart Temperature Control</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>5-Level Current Adjustment</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Grounding Mode Switchable</span>
                  </div>
                </div>
              </AnimateIn>

              {/* Current Selector */}
              <AnimateIn direction="left" delay={6}>
                <div className={styles.phaseContainer}>
                  <span className={styles.selectorLabel}>Select Charging Connection</span>
                  <div className={styles.phaseSelector}>
                    <button 
                      onClick={() => setCurrent('8A')}
                      className={`${styles.phaseBtn} ${current === '8A' ? styles.phaseBtnActive : ''}`}
                    >
                      1.8kW - 8A Domestic Plug
                    </button>
                    <button 
                      onClick={() => setCurrent('15A')}
                      className={`${styles.phaseBtn} ${current === '15A' ? styles.phaseBtnActive : ''}`}
                    >
                      3.6kW - 15A Caravan Plug
                    </button>
                  </div>
                </div>
              </AnimateIn>

              {/* Pricing & CTA */}
              <AnimateIn direction="left" delay={6}>
                <div className={styles.priceLabel}>
                  {price}<span>AUD</span>
                </div>
                <div className={styles.heroActions}>
                  <button className={styles.btnPrimary}>
                    Buy Volt Go
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                  <button className={styles.btnSecondary}>
                    View Specs
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Up to 32A Fast Charging</h4>
                <p>Adjustable current up to 32A</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                  <line x1="6" y1="6" x2="6.01" y2="6"/>
                  <line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Integrated CPU</h4>
                <p>Advanced control chip for stable performance</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Smart Temperature Control</h4>
                <p>Real-time monitoring</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>5-Level Current Adjustment</h4>
                <p>Easily adjust charging current</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12A10 10 0 1 1 12 2v10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Grounding Mode Switchable</h4>
                <p>Switch grounding detection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE SHOWCASE */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Visual Column */}
            <div className={styles.imageShowcaseWrap}>
              <img 
                src="/2ndimagevoltmini.png" 
                alt="Volt Go In Action" 
                className={styles.showcaseStaticCharger}
              />
            </div>

            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>COMPACT, VERSATILE, TRAVEL READY</h3>
              <h2 className={styles.sectionTitle}>POWERFUL FEATURES</h2>
              <p className={styles.sectionDesc}>
                Volt Go fits neatly into its carrying bag, ready to rescue you in remote areas or top you up overnight while away from home.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>01</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Integrated CPU</h4>
                    <p>Advanced control chip for stable performance, precision and safety.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>02</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Smart Temperature Control</h4>
                    <p>Real-time monitoring to prevent overheating and ensure safety.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>03</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>5-Level Adjustment</h4>
                    <p>Quickly adjust the charging current (8A/13A/16A/24A/32A) to match your needs.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>04</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Grounding Mode Switchable</h4>
                    <p>Support grounding detection ON/OFF for enhanced compatibility.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>05</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Ergonomic Design</h4>
                    <p>Comfortable grip, durable materials and IP55 waterproof protection.</p>
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
            
            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>DOMESTIC FREEDOM</h3>
              <h2 className={styles.sectionTitle}>Your backup plan<br />always on hand.</h2>
              <p className={styles.sectionDesc}>
                Never suffer range anxiety. By having the Volt Go in your boot, any standard electrical outlet becomes a personal charging station.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Home Charging</h4>
                    <p>Plug into any standard domestic outlet for convenient overnight charging.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Travel</h4>
                    <p>Compact and lightweight design makes it easy to store in your boot.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
                    </svg>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Workplace Charging</h4>
                    <p>Top up your battery while you work from any available 10A socket.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                    </svg>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Outdoor Adventures</h4>
                    <p>IP66 waterproof rating ensures safe charging in all weather conditions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Card Visual Column */}
            <div className={styles.imageShowcaseWrap}>
              <img 
                src="/3rdsec.png" 
                alt="Volt Go Travel Kit" 
                className={styles.showcaseStaticCharger}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. PHONE APP SECTION - Custom Mockup */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Left Phone App Mockup */}
            <div className={styles.appShowcaseCol}>
              <div className={styles.appMockupPhone}>
                <div className={styles.phoneNotch} />
                
                <div className={styles.appHeader}>
                  <span className={styles.appName}>BEXAVOLT</span>
                  <span className={styles.appStatus}>● Portable Mode</span>
                </div>

                <div className={styles.appCircleProgress}>
                  <span className={styles.appCircleVal}>{power}</span>
                  <span className={styles.appCircleLabel}>MOBILE CHARGING</span>
                </div>

                <div className={styles.appStatRow}>
                  <div className={styles.appStatItem}>
                    <span>Current Draw</span>
                    <strong>{current}</strong>
                  </div>
                  <div className={styles.appStatItem}>
                    <span>Temp</span>
                    <strong>34°C</strong>
                  </div>
                </div>

                {/* Energy Chart Mockup */}
                <div className={styles.appChartBlock}>
                  <div className={styles.appChartBars}>
                    <div className={styles.appChartBar} style={{ height: '20%' }} />
                    <div className={styles.appChartBar} style={{ height: '30%' }} />
                    <div className={styles.appChartBar} style={{ height: '40%' }} />
                    <div className={styles.appChartBar} style={{ height: '60%' }} />
                    <div className={styles.appChartBar} style={{ height: '70%' }} />
                    <div className={styles.appChartBar} style={{ height: '80%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '100%' }} />
                  </div>
                  <span className={styles.appChartLabel}>Real-time Power Curve</span>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>STATUS MONITORS</h3>
              <h2 className={styles.sectionTitle}>Safety details<br />at a glance.</h2>
              <p className={styles.sectionDesc}>
                Monitor your portable charge rate, track heat threshold status, and review the exact power delivery metrics dynamically from the on-board display.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>On-unit LED parameters</h4>
                    <p>Bright digital display keeps you updated on exact current, voltage, temperature, and charging speed.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Smart temperature protection</h4>
                    <p>Built-in control chip guards against thermal overload for safe overnight charging in domestic outlets.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Plug-and-play simplicity</h4>
                    <p>No configuration, app setup, or Wi-Fi required to operate—just plug in and start charging instantly.</p>
                  </div>
                </div>
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

              {/* Column 1 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Model</span>
                  <span className={styles.specItemVal}>ST-T550</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Input Voltage</span>
                  <span className={styles.specItemVal}>220V AC</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Max. Current</span>
                  <span className={styles.specItemVal}>32A</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 2 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Power Output</span>
                  <span className={styles.specItemVal}>Up to 7.0kW</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Connector (Car Side)</span>
                  <span className={styles.specItemVal}>IEC 62196-2 Type 2</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Input Plug (Wall Side)</span>
                  <span className={styles.specItemVal}>Australian Plug (AS/NZS 3112)</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 3 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Operating Temperature</span>
                  <span className={styles.specItemVal}>-30°C ~ +50°C</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Protection Rating</span>
                  <span className={styles.specItemVal}>IP55 (mated)</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 4 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Cable Length</span>
                  <span className={styles.specItemVal}>5m (customizable)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Certification</span>
                  <span className={styles.specItemVal}>CE / RoHS / FCC</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM PILLARS GRID */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.sectionTitle}>SAFETY PROTECTIONS</h2>
          </div>
          <div className={styles.pillarsGrid}>
            
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Over Current Protection</h4>
              <p>Automatically cuts off power if current exceeds the safe threshold, preventing wire damage.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4>Over Voltage Protection</h4>
              <p>Shields your vehicle's battery from sudden spikes in grid voltage.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
                  <line x1="23" y1="13" x2="23" y2="11"/>
                </svg>
              </div>
              <h4>Under Voltage Protection</h4>
              <p>Ensures charging stops if the voltage drops too low, maintaining stable delivery.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
                </svg>
              </div>
              <h4>Over Temperature Protection</h4>
              <p>Built-in thermal sensors reduce or stop current if the unit overheats.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h4>Leakage Protection</h4>
              <p>Instantly disconnects power if earth leakage is detected, keeping you safe from shocks.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h4>Grounding Protection</h4>
              <p>Monitors the ground connection continuously for maximum electrical safety.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. WARRANTY BANNER SECTION */}
      <section className={styles.warrantySection}>
        <div className="container">
          <div className={styles.warrantyBanner}>
            <div className={styles.warrantyOverlay} />
            <div className={styles.warrantyContent}>
              <h3 className={styles.warrantyEyebrow}>3-YEAR WARRANTY</h3>
              <h2 className={styles.warrantyHeading}>Built to travel, backed to last.</h2>
              <p className={styles.warrantyDesc}>
                Volt Go comes with a 3-year product warranty. Enjoy full replacement coverage and local Australian support from our engineering team.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn about the Volt Go warranty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION BANNER */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <h3>TAKE CHARGING POWER EVERYWHERE</h3>
          <h2>Ready to pack the Volt Go?</h2>
          <p>Get a standalone Volt Go charger kit with a premium travel carry bag today.</p>
          <div className={styles.bottomCtaActions}>
            <button className={styles.btnPrimary}>
              Buy Volt Go
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className={styles.btnSecondary}>
              Find Retailers
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
