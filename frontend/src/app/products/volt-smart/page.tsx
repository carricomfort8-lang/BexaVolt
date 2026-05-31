'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltSmartProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');

  // Dynamic values based on Phase selection
  const price = phase === 'single' ? '$999' : '$1,399';
  const power = phase === 'single' ? '7.4kW' : '22kW';
  const phaseLabel = phase === 'single' ? 'Single Phase' : 'Three Phase';
  const phaseDesc = phase === 'single' 
    ? 'Standard household charging, compatible with all homes.'
    : 'Ultra-fast home charging, requires three-phase grid connection.';

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
                <span className={styles.labelTag}>Connected Smart Charger</span>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Volt <span className={styles.titleHighlight}>Smart</span>
                </h1>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>Intelligent home charging.</p>
              </AnimateIn>

              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The Volt Smart is our advanced wall-mount EV charger. With real-time mobile app controls, 
                  dynamic charging schedules, and complete energy tracking, it makes charging your vehicle simple, smart, and cost-effective.
                </p>
              </AnimateIn>

              {/* Checklist */}
              <AnimateIn direction="left" delay={5}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Up to {power} charging speed</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>5m integrated Type 2 charging cable</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Real-time energy tracking &amp; history</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Wi-Fi &amp; Bluetooth with smart app scheduling</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>IP65 weatherproof &amp; IK08 impact protection</span>
                  </div>
                </div>
              </AnimateIn>

              {/* Phase Switcher */}
              <AnimateIn direction="left" delay={6}>
                <div className={styles.phaseContainer}>
                  <span className={styles.selectorLabel}>Select Charging Options</span>
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
              </AnimateIn>

              {/* Pricing & CTA */}
              <AnimateIn direction="left" delay={6}>
                <div className={styles.priceLabel}>
                  {price}<span>AUD</span>
                </div>
                <div className={styles.heroActions}>
                  <button className={styles.btnPrimary}>
                    Buy Charger Only
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
                <p>Fast home charging</p>
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
                <h4>5m cable</h4>
                <p>Integrated Type 2 cable</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                  <path d="M8.58 16.14a7 7 0 0 1 6.84 0"/>
                  <line x1="12" y1="20" x2="12.01" y2="20"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Smart Connected</h4>
                <p>Wi-Fi &amp; Bluetooth</p>
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
                <h4>Load Balancing</h4>
                <p>Dynamic power sensor</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12A10 10 0 1 1 12 2v10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>IP65 &amp; IK08</h4>
                <p>Weatherproof design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE SHOWCASE */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Visual Column - reusing Volt Mini static image as requested */}
            <div className={styles.imageShowcaseWrap}>
              <img 
                src="/2ndimagevoltmini.png" 
                alt="Volt Smart In Action" 
                className={styles.showcaseStaticCharger}
              />
            </div>

            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>ADVANCED ENERGY OPTIMISATION</h3>
              <h2 className={styles.sectionTitle}>Intelligent control.<br />Optimised efficiency.</h2>
              <p className={styles.sectionDesc}>
                Volt Smart gives you total oversight of your home charging sessions. Easily automate 
                charging to correspond with your lowest energy tariff rates.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>01</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Smart Scheduling</h4>
                    <p>Integrates with your utility tariff structure. Automatically schedules charge cycles during off-peak slots.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>02</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Dynamic Load Management</h4>
                    <p>Monitors home power draw and modulates charger rate, preventing main household circuit overload.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>03</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Connected &amp; Scalable</h4>
                    <p>Wi-Fi, Bluetooth, and local REST API support. Built to integrate with your smart home setup.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>04</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Over-The-Air (OTA) Updates</h4>
                    <p>Always stay up to date. The charger automatically pulls software updates for new feature additions.</p>
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
              <h3 className={styles.sectionTag}>SMART HOME COMPATIBLE</h3>
              <h2 className={styles.sectionTitle}>The smart way<br />to power your drive.</h2>
              <p className={styles.sectionDesc}>
                Connect, configure, and charge. BexaVolt Smart provides standard features that ensure 
                reliable, cost-saving operations every time you plug in.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Off-Peak Automation</h4>
                    <p>Save up to 60% on your EV fuel bill by shifting charge cycles away from high peak tariffs.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Built-in Safety Protections</h4>
                    <p>Multiple dynamic protections monitor current, temperature, voltage stability, and grid safety.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Universal Type 2 Connectivity</h4>
                    <p>Fully compliant with all electric cars sold across Australia, including Tesla, BYD, Hyundai, and MG.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Card Visual Column - reusing Volt Mini static image as requested */}
            <div className={styles.imageShowcaseWrap}>
              <img 
                src="/3rdsec.png" 
                alt="Volt Smart Charging" 
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
                  <span className={styles.appStatus}>● Connected</span>
                </div>

                <div className={styles.appCircleProgress}>
                  <span className={styles.appCircleVal}>{power}</span>
                  <span className={styles.appCircleLabel}>SMART CHARGING</span>
                </div>

                <div className={styles.appStatRow}>
                  <div className={styles.appStatItem}>
                    <span>Delivered</span>
                    <strong>18.4 kWh</strong>
                  </div>
                  <div className={styles.appStatItem}>
                    <span>Saved</span>
                    <strong>$6.20 AUD</strong>
                  </div>
                </div>

                {/* Energy Chart Mockup */}
                <div className={styles.appChartBlock}>
                  <div className={styles.appChartBars}>
                    <div className={styles.appChartBar} style={{ height: '25%' }} />
                    <div className={styles.appChartBar} style={{ height: '40%' }} />
                    <div className={styles.appChartBar} style={{ height: '55%' }} />
                    <div className={styles.appChartBar} style={{ height: '70%' }} />
                    <div className={styles.appChartBar} style={{ height: '80%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '90%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '95%' }} />
                  </div>
                  <span className={styles.appChartLabel}>Real-time Session Power</span>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>SMART MOBILE CONTROLS</h3>
              <h2 className={styles.sectionTitle}>Full charging data<br />at your fingertips.</h2>
              <p className={styles.sectionDesc}>
                Set off-peak schedules, lock or unlock your unit, track historical energy costs, 
                and receive immediate alerts on your mobile device.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Real-time Telemetry</h4>
                    <p>Monitor current charge rates, charging elapsed time, and total session power delivered live.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Intelligent Scheduler</h4>
                    <p>Easily input your home utility tariff windows. The app automatically aligns EV top-ups to cheap slots.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Carbon &amp; Cost Insights</h4>
                    <p>Review exact grid costs saved and cumulative reduction of carbon footprint over time.</p>
                  </div>
                </div>
              </div>

              {/* App Badges placeholders using custom vector drawings */}
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
                  <span className={styles.specItemVal}>5m (Integrated)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Connectivity</span>
                  <span className={styles.specItemVal}>Wi-Fi (2.4GHz) &amp; Bluetooth</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>App Compatibility</span>
                  <span className={styles.specItemVal}>iOS &amp; Android (Smart Telemetry V1)</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 3 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Safety Protections</span>
                  <span className={styles.specItemVal}>Overvoltage, Undervoltage, Overcurrent, Overheat, Leakage Protections, Dynamic Load Balancing</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Protection Rating</span>
                  <span className={styles.specItemVal}>IP65 Weatherproof / IK08 Impact Rated</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 4 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Operating Temperature</span>
                  <span className={styles.specItemVal}>-25°C to 55°C</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Dimensions (H x W x D)</span>
                  <span className={styles.specItemVal}>280 x 180 x 95 mm</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Weight</span>
                  <span className={styles.specItemVal}>{phase === 'single' ? '2.8 kg' : '3.4 kg'}</span>
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
              <h4>Optimised Cost</h4>
              <p>Schedule charging during off-peak hours to save up to 60% compared to standard grid tariffs.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h4>Smart Connected</h4>
              <p>Control charging, lock units, and schedule cycles remotely using the BexaVolt App dashboard.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/>
                </svg>
              </div>
              <h4>Weatherproof</h4>
              <p>IP65 certified and engineered to survive extreme Australian summers and winter storms.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h4>Easy Installation</h4>
              <p>Designed for straightforward home setup. Fast and simple commissioning by any local electrician.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>Local Support</h4>
              <p>Proudly backed by our dedicated support engineers and certified installer network in Australia.</p>
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
              <h2 className={styles.warrantyHeading}>Reliability, guaranteed.</h2>
              <p className={styles.warrantyDesc}>
                Volt Smart comes backed standard with our comprehensive 4-year replacement warranty. 
                Enjoy expert assistance and rapid swaps from BexaVolt's local engineering team.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn more about warranty details
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
          <h3>CONNECT YOUR EV TO SMARTER CHARGING</h3>
          <h2>Ready to charge smarter at home?</h2>
          <p>Get a standalone Volt Smart charger unit or coordinate professional installer setup today.</p>
          <div className={styles.bottomCtaActions}>
            <button className={styles.btnPrimary}>
              Buy Charger Only
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
