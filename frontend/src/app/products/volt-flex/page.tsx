'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltFlexProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');

  // Dynamic values based on Phase selection
  const price = phase === 'single' ? '$899' : '$1,199';
  const power = phase === 'single' ? '7.4kW' : '22kW';
  const current = phase === 'single' ? '32A (Single Phase)' : '32A (Three Phase)';

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
                <span className={styles.labelTag}>Heavy-Duty Interchangeable Portable</span>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Volt <span className={styles.titleHighlight}>Flex</span>
                </h1>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>Adapt to any power source.</p>
              </AnimateIn>

              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The Volt Flex is a high-power portable charging station equipped with interchangeable
                  input tails. Automatically detecting connected adapters (from 10A home plugs up to 32A three-phase industrial sockets), it delivers wallbox speeds anywhere.
                </p>
              </AnimateIn>

              {/* Checklist */}
              <AnimateIn direction="left" delay={5}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Up to {power} charging power</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Interchangeable tails (10A domestic, 15A caravan, 32A 3-Phase)</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Automatic adapter current limiting</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Colour LCD status & control screen</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Wall-mount bracket included (dual-mode home/travel)</span>
                  </div>
                </div>
              </AnimateIn>

              {/* Phase Switcher */}
              <AnimateIn direction="left" delay={6}>
                <div className={styles.phaseContainer}>
                  <span className={styles.selectorLabel}>Select Tail Power Capability</span>
                  <div className={styles.phaseSelector}>
                    <button 
                      onClick={() => setPhase('single')}
                      className={`${styles.phaseBtn} ${phase === 'single' ? styles.phaseBtnActive : ''}`}
                    >
                      7.4kW - Single Phase Pack
                    </button>
                    <button 
                      onClick={() => setPhase('three')}
                      className={`${styles.phaseBtn} ${phase === 'three' ? styles.phaseBtnActive : ''}`}
                    >
                      22kW - Three Phase Pack
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
                    Buy Volt Flex
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Up to {power}</h4>
                <p>Equivalent to a home wallbox</p>
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
                <h4>Smart adapters</h4>
                <p>Auto current recognition</p>
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
                <h4>Colour Display</h4>
                <p>Amperage & voltage readouts</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Dual Mode</h4>
                <p>Portable or wall-mounted</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12A10 10 0 1 1 12 2v10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>IP66 weatherproof</h4>
                <p>Tough outdoor enclosure</p>
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
                alt="Volt Flex In Action" 
                className={styles.showcaseStaticCharger}
              />
            </div>

            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>FLEXIBLE ADAPTER TAILS</h3>
              <h2 className={styles.sectionTitle}>One charger.<br />Any power socket.</h2>
              <p className={styles.sectionDesc}>
                The Volt Flex replaces multiple cables. Swap out the power adapter tail, and the unit immediately adjusts its maximum current setting to guarantee safety.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>01</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Interchangeable tails</h4>
                    <p>Easily transition from domestic 10A plugs to industrial 32A three-phase sockets.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>02</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Auto-current limiter</h4>
                    <p>Built-in microchips in each tail signal the charger to set the correct current limit automatically.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>03</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Wall-mount bracket</h4>
                    <p>Install it at home using the included bracket, and slide it off to take with you on trips.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>04</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>2.4" Colour LCD display</h4>
                    <p>Review real-time charge rates, diagnostics, temperatures, and current caps easily.</p>
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
              <h3 className={styles.sectionTag}>INDUSTRIAL CAPACITY</h3>
              <h2 className={styles.sectionTitle}>Three-phase power<br />in a portable body.</h2>
              <p className={styles.sectionDesc}>
                Unlock full 22kW three-phase charging at commercial hubs, depots, or home garages using the 32A red industrial plug tail.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Up to 100km range per hour</h4>
                    <p>On a 22kW three-phase source, Volt Flex delivers speeds on par with heavy wallbox units.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Adjustable current parameters</h4>
                    <p>Manually adjust the current limit from 6A to 32A via the on-unit screen buttons for total circuit control.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Aerospace durability</h4>
                    <p>IP66 weatherproof and IK10 impact-rated chassis to survive drops and rough handling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Card Visual Column */}
            <div className={styles.imageShowcaseWrap}>
              <img 
                src="/3rdsec.png" 
                alt="Volt Flex Charging" 
                className={styles.showcaseStaticCharger}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. PHONE APP SECTION */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Left Phone App Mockup */}
            <div className={styles.appShowcaseCol}>
              <div className={styles.appMockupPhone}>
                <div className={styles.phoneNotch} />
                
                <div className={styles.appHeader}>
                  <span className={styles.appName}>BEXAVOLT</span>
                  <span className={styles.appStatus}>● Flex Mode</span>
                </div>

                <div className={styles.appCircleProgress}>
                  <span className={styles.appCircleVal}>{power}</span>
                  <span className={styles.appCircleLabel}>FLEX CHARGING</span>
                </div>

                <div className={styles.appStatRow}>
                  <div className={styles.appStatItem}>
                    <span>Plug Type</span>
                    <strong>{current}</strong>
                  </div>
                  <div className={styles.appStatItem}>
                    <span>Session Cost</span>
                    <strong>$14.20 AUD</strong>
                  </div>
                </div>

                {/* Energy Chart Mockup */}
                <div className={styles.appChartBlock}>
                  <div className={styles.appChartBars}>
                    <div className={styles.appChartBar} style={{ height: '30%' }} />
                    <div className={styles.appChartBar} style={{ height: '50%' }} />
                    <div className={styles.appChartBar} style={{ height: '40%' }} />
                    <div className={styles.appChartBar} style={{ height: '70%' }} />
                    <div className={styles.appChartBar} style={{ height: '80%' }} />
                    <div className={styles.appChartBar} style={{ height: '90%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '100%' }} />
                  </div>
                  <span className={styles.appChartLabel}>Real-time Power Curve</span>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>SMART RECOGNITION</h3>
              <h2 className={styles.sectionTitle}>Safe, automated,<br />and ultra-reliable.</h2>
              <p className={styles.sectionDesc}>
                The integrated controller matches the input tail plug, keeping you safe without you ever having to program the unit manually.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Tail-Specific Auto Adjustment</h4>
                    <p>Zero risk of overloading domestic outlets—the hardware limits current limits on standard plugs automatically.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>2.4" color status LCD</h4>
                    <p>Live readouts show exact amperage draw, phase balance, voltage stability, and charging speed.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Complete Safety Systems</h4>
                    <p>Equipped with Type A + 6mA DC RCD leakage detection, PEN fault protection, and thermal shutdowns.</p>
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
                  <span className={styles.specItemLabel}>Charging Power</span>
                  <span className={styles.specItemVal}>Up to {power} (32A)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Input / Output Voltage</span>
                  <span className={styles.specItemVal}>{phase === 'single' ? '230V AC, 50Hz' : '400V AC, 50Hz'}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Connector Type</span>
                  <span className={styles.specItemVal}>Type 2 (IEC 62196-2)</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 2 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Cable Length</span>
                  <span className={styles.specItemVal}>5m (Integrated) + 0.5m Input Tails</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Display Type</span>
                  <span className={styles.specItemVal}>2.4" Colour LCD Panel</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Adjustable Current</span>
                  <span className={styles.specItemVal}>6A / 10A / 16A / 24A / 32A Limits</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 3 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Safety Protection</span>
                  <span className={styles.specItemVal}>Type A + 6mA DC RCD, Over/Under Voltage, Temperature sensors, Overcurrent</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Protection Rating</span>
                  <span className={styles.specItemVal}>IP66 Weatherproof / IK10 Impact</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 4 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Operating Temperature</span>
                  <span className={styles.specItemVal}>-30°C to 55°C</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Dimensions (H x W x D)</span>
                  <span className={styles.specItemVal}>290 x 120 x 70 mm</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Net Weight</span>
                  <span className={styles.specItemVal}>{phase === 'single' ? '3.8 kg' : '4.9 kg'}</span>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4>Modular Adaptability</h4>
              <p>Swap the power tail in seconds to charge safely from standard or industrial outlets.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h4>Color LCD Control</h4>
              <p>Interact with the charger, adjust currents, and see live session diagnostics on the color screen.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/>
                </svg>
              </div>
              <h4>Chassis Protection</h4>
              <p>IK10 impact rating means the controller casing is crush-proof and impact-resistant.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h4>Wallbox Dual Mode</h4>
              <p>Comes with a mounting frame so it can serve as a primary home wall unit and a travel charger.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>Warranty Backed</h4>
              <p>Comes backed standard with our comprehensive 4-year local replacement warranty.</p>
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
              <h3 className={styles.warrantyEyebrow}>4-YEAR WARRANTY</h3>
              <h2 className={styles.warrantyHeading}>Flexible power, solid warranty.</h2>
              <p className={styles.warrantyDesc}>
                Volt Flex is covered standard under our 4-year replacement warranty, with dedicated customer service based in Australia.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn about the Flex warranty
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
          <h3>ADAPT YOUR CHARGING TO ANY OUTLET</h3>
          <h2>Ready to upgrade your travel setup?</h2>
          <p>Order the Volt Flex standalone unit or standard multi-tail bundle package today.</p>
          <div className={styles.bottomCtaActions}>
            <button className={styles.btnPrimary}>
              Buy Volt Flex
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className={styles.btnSecondary}>
              Customize Tail Kits
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
