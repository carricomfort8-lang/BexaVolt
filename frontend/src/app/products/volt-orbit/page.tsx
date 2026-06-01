'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltOrbitProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [connector, setConnector] = useState<'tethered' | 'socket'>('tethered');

  // Dynamic values based on options
  const basePrice = phase === 'single' ? 1299 : 1699;
  const finalPrice = connector === 'tethered' ? basePrice : basePrice - 50;
  
  const priceDisplay = `$${finalPrice.toLocaleString()}`;
  const power = phase === 'single' ? '7.4kW' : '22kW';
  const phaseLabel = phase === 'single' ? 'Single Phase' : 'Three Phase';
  const connectorLabel = connector === 'tethered' ? 'Tethered (6.5m Cable)' : 'Universal Socket';

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
                <span className={styles.labelTag}>Premium Solar Charger</span>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Volt <span className={styles.titleHighlight}>Orbit</span>
                </h1>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>Smart solar-integrated charging.</p>
              </AnimateIn>

              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The Volt Orbit is our premium EV charging solution. Built for complete grid independence, 
                  it dynamically tracks solar surplus, features RFID authentication, and stands out with a signature interactive LED orbit ring.
                </p>
              </AnimateIn>

              {/* Checklist */}
              <AnimateIn direction="left" delay={5}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Up to {power} smart charging speed</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Dynamic solar excess matching (Eco/Eco+/Fast modes)</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Signature circular "Orbit" status light ring</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>RFID access security with swipe cards</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>IP66 and IK10 rated aerospace-grade aluminum</span>
                  </div>
                </div>
              </AnimateIn>

              {/* Options Switcher */}
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
                        Tethered (6.5m Cable)
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

              {/* Pricing & CTA */}
              <AnimateIn direction="left" delay={6}>
                <div className={styles.priceLabel}>
                  {priceDisplay}<span>AUD</span>
                </div>
                <div className={styles.heroActions}>
                  <button className={styles.btnPrimary}>
                    Buy Orbit Only
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
                  <path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Solar Optimised</h4>
                <p>100% green energy matching</p>
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
                <h4>{connector === 'tethered' ? '6.5m Cable' : 'Universal Socket'}</h4>
                <p>Premium connection design</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Wi-Fi &amp; 4G LTE</h4>
                <p>Triple connectivity modes</p>
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
                <h4>RFID Security</h4>
                <p>Secure tap authorization</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12A10 10 0 1 1 12 2v10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>IP66 &amp; IK10</h4>
                <p>Heavy duty weather rating</p>
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
                src="/02_20_22AM.png" 
                alt="Volt Orbit Smarter Charging" 
                className={styles.showcaseStaticCharger}
              />
            </div>

            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>INTELLIGENT SOLAR TRACKING</h3>
              <h2 className={styles.sectionTitle}>Smarter charging.<br />Orbit status ring.</h2>
              <p className={styles.sectionDesc}>
                Volt Orbit dynamically monitors your home's solar array output and adjusts power flow 
                in real time. Charge exclusively on green energy without drawing from the grid.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>01</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Triple Solar Charging Modes</h4>
                    <p>Select ECO (maximise solar routing), ECO+ (pure excess solar only), or FAST (maximum speed grid blend).</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>02</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Signature LED Orbit Ring</h4>
                    <p>Breathing multi-color LED display reports charging status, solar tracking levels, and diagnostics visually.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>03</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Aerospace-Grade Aluminum Enclosure</h4>
                    <p>Designed to be virtually indestructible, with standard IK10 impact protection and IP66 weatherproofing.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>04</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Dynamic Load Balancing</h4>
                    <p>Protects your home. Dynamically scales charging power to prevent main service fuse trip during heavy house loads.</p>
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
              <h3 className={styles.sectionTag}>ZERO-COST DRIVING</h3>
              <h2 className={styles.sectionTitle}>Unlock complete<br />grid independence.</h2>
              <p className={styles.sectionDesc}>
                Redirect excess solar power that would normally be fed back into the grid for pennies, 
                and store it directly in your EV battery.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Complete Solar Integration</h4>
                    <p>Compatible with all inverter models. Monitor your solar capture in one unified dashboard.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>RFID Access Security</h4>
                    <p>Keep your charger secure. Authorise charging using premium security key cards (two included with every order).</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Universal Type 2 Support</h4>
                    <p>Compliant with all modern electric vehicles sold in Australia, including Tesla, BYD, Kia, Hyundai, and MG.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Card Visual Column - reusing Volt Mini static image as requested */}
            <div className={styles.imageShowcaseWrap}>
              <img 
                src="/3rdsec.png" 
                alt="Volt Orbit Charging" 
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
                  <span className={styles.appStatus}>● Solar Mode</span>
                </div>

                <div className={styles.appCircleProgress}>
                  <span className={styles.appCircleVal}>{power}</span>
                  <span className={styles.appCircleLabel}>SOLAR CHARGING</span>
                </div>

                <div className={styles.appStatRow}>
                  <div className={styles.appStatItem}>
                    <span>Solar Match</span>
                    <strong>94.2% Eco</strong>
                  </div>
                  <div className={styles.appStatItem}>
                    <span>Saved Today</span>
                    <strong>$14.80 AUD</strong>
                  </div>
                </div>

                {/* Energy Chart Mockup */}
                <div className={styles.appChartBlock}>
                  <div className={styles.appChartBars}>
                    <div className={styles.appChartBar} style={{ height: '20%' }} />
                    <div className={styles.appChartBar} style={{ height: '35%' }} />
                    <div className={styles.appChartBar} style={{ height: '65%' }} />
                    <div className={styles.appChartBar} style={{ height: '85%' }} />
                    <div className={styles.appChartBar} style={{ height: '90%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '95%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '100%' }} />
                  </div>
                  <span className={styles.appChartLabel}>Real-time Solar Integration Curve</span>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>SMART SOLAR VISIBILITY</h3>
              <h2 className={styles.sectionTitle}>Solar data visualised<br />from your phone.</h2>
              <p className={styles.sectionDesc}>
                Set solar limits, schedule eco charging windows, override grid import bans, and view 
                detailed cost-savings reports on carbon offset directly from your smartphone.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Real-time Solar Capture</h4>
                    <p>Track solar surplus generation and immediately redirect it directly to your battery flow.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Smart Scheduling &amp; Tariffs</h4>
                    <p>Optimise between off-peak solar generation windows and cheap overnight grid power tariffs.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Detailed Savings Reports</h4>
                    <p>Track exactly how much money and carbon grid draw you have offset with BexaVolt Orbit's solar engine.</p>
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
                  <span className={styles.specItemVal}>{connector === 'tethered' ? 'Type 2 Tethered' : 'Type 2 Socket'}</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 2 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Cable Design</span>
                  <span className={styles.specItemVal}>{connector === 'tethered' ? '6.5m Heavy Duty (Integrated)' : 'No Cable (Socket Only)'}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Connectivity</span>
                  <span className={styles.specItemVal}>Wi-Fi (2.4/5GHz), Ethernet (RJ45), Bluetooth, 4G LTE eSIM</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>App Compatibility</span>
                  <span className={styles.specItemVal}>iOS &amp; Android (Solar Tracking V2)</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 3 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Safety Protections</span>
                  <span className={styles.specItemVal}>PEN Fault Detection, Overcurrent, Overheat, Dynamic Grid Load Balancing, RFID Secure Lock</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Protection Rating</span>
                  <span className={styles.specItemVal}>IP66 Weatherproof / IK10 Impact Rated</span>
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
                  <span className={styles.specItemVal}>320 x 200 x 110 mm</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Weight</span>
                  <span className={styles.specItemVal}>
                    {phase === 'single' 
                      ? (connector === 'tethered' ? '3.9 kg' : '2.8 kg') 
                      : (connector === 'tethered' ? '4.8 kg' : '3.4 kg')}
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4>Solar Charging</h4>
              <p>Direct excess solar production straight to your EV battery and charge for $0.00.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h4>Orbit LED Light</h4>
              <p>Signature glowing status display lets you check charging status from across the yard.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/>
                </svg>
              </div>
              <h4>IP66 &amp; IK10</h4>
              <p>Brushed heavy duty aluminum casing built to withstand extreme heat, hail, and storms.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h4>RFID Security</h4>
              <p>Prevents unauthorised charging, ideal for shared carports or open driveway setups.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>Local Support</h4>
              <p>Backed standard by our professional installer network and support center based in Australia.</p>
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
              <h3 className={styles.warrantyEyebrow}>5-YEAR WARRANTY</h3>
              <h2 className={styles.warrantyHeading}>Premium reliability, guaranteed.</h2>
              <p className={styles.warrantyDesc}>
                Volt Orbit comes standard with our comprehensive, market-leading 5-year warranty. 
                Enjoy long-term support and rapid unit swaps from BexaVolt's local engineering team.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn more about our premium warranty
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
          <h3>CHOOSE THE INTELLIGENT WAY TO DRIVE</h3>
          <h2>Ready to capture the sun?</h2>
          <p>Get a clean Volt Orbit charger unit or complete professional installer setup today.</p>
          <div className={styles.bottomCtaActions}>
            <button className={styles.btnPrimary}>
              Buy Orbit Only
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
