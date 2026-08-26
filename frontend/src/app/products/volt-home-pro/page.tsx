'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltPulseProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');

  const price = phase === 'single' ? '$1,099' : '$1,499';
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
                <span className={styles.labelTag}>High-Performance Wall Charger</span>
              </AnimateIn>
              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Volt <span className={styles.titleHighlight}>Pulse</span>
                </h1>
              </AnimateIn>
              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>Power at full speed.</p>
              </AnimateIn>
              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The VoltHome Pro delivers high-output, ultra-reliable home EV charging with a premium 
                  brushed enclosure, dynamic load management, and comprehensive safety systems. 
                  Engineered for drivers who demand the fastest possible home top-up speed.
                </p>
              </AnimateIn>
              <AnimateIn direction="left" delay={5}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Up to 22kW maximum output charging</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>6m heavy-duty integrated Type 2 cable</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Built-in CT clamp dynamic load balancing (Upgradable options)</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Wi-Fi, Bluetooth and Ethernet connectivity</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>IP66 weatherproof &amp; IK10 impact-rated casing</span>
                  </div>
                </div>
              </AnimateIn>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Up to {power}</h4>
                <p>Maximum output speed</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>6m cable</h4>
                <p>Heavy-duty Type 2</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.58 16.14a7 7 0 0 1 6.84 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Wi-Fi + Ethernet</h4>
                <p>Triple connectivity</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>CT Load Balancing</h4>
                <p>Auto grid protection</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2v10z"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>IP66 &amp; IK10</h4>
                <p>Heavy duty rated</p>
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
              <img src="/2ndimagevoltmini.png" alt="VoltHome Pro In Action" className={styles.showcaseStaticCharger} />
            </div>
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>MAXIMUM OUTPUT PERFORMANCE</h3>
              <h2 className={styles.sectionTitle}>Built for speed.<br />Engineered to last.</h2>
              <p className={styles.sectionDesc}>
                VoltHome Pro is BexaVolt's fastest dedicated home charger. Combining maximum power delivery 
                with intelligent dynamic load management, it's engineered for daily high-speed top-ups.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>01</span></div>
                  <div className={styles.featureRowText}>
                    <h4>Dynamic CT Load Balancing</h4>
                    <p>A dedicated CT clamp sensor tracks total house draw and throttles output to prevent household circuit overload.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>02</span></div>
                  <div className={styles.featureRowText}>
                    <h4>6m Heavy-Duty Tethered Cable</h4>
                    <p>Longer premium cable ensures you can charge from anywhere in your garage or driveway.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>03</span></div>
                  <div className={styles.featureRowText}>
                    <h4>Advanced Safety Suite</h4>
                    <p>PEN fault detection, over-temperature shutdown, overcurrent breaker, and leakage detection all built in.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}><span>04</span></div>
                  <div className={styles.featureRowText}>
                    <h4>Premium Brushed Enclosure</h4>
                    <p>Aerospace-inspired brushed aluminum housing with IK10 impact and IP66 weather certification.</p>
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
              <h3 className={styles.sectionTag}>FULL-SPEED CHARGING</h3>
              <h2 className={styles.sectionTitle}>The fastest way<br />to power your EV.</h2>
              <p className={styles.sectionDesc}>
                VoltHome Pro delivers an unmatched combination of speed and safety — topping up most 
                EVs overnight and getting you road-ready every single morning.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Up to 100km range per hour</h4>
                    <p>On three-phase, VoltHome Pro at 22kW delivers up to 100km of range for every hour of charging.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Ethernet &amp; Wi-Fi Redundancy</h4>
                    <p>Both LAN and wireless options ensure your charger stays reliably connected to the BexaVolt cloud.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Works with all Type 2 EVs</h4>
                    <p>Fully compliant with all Type 2 electric vehicles sold across Australia and New Zealand.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imageShowcaseWrap}>
              <img src="/3rdsec.png" alt="VoltHome Pro Charging" className={styles.showcaseStaticCharger} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHONE APP SECTION */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.appShowcaseCol}>
              <div className={styles.appMockupPhone}>
                <div className={styles.phoneNotch} />
                <div className={styles.appHeader}>
                  <span className={styles.appName}>BEXAVOLT</span>
                  <span className={styles.appStatus}>● Full Speed</span>
                </div>
                <div className={styles.appCircleProgress}>
                  <span className={styles.appCircleVal}>{power}</span>
                  <span className={styles.appCircleLabel}>PULSE CHARGING</span>
                </div>
                <div className={styles.appStatRow}>
                  <div className={styles.appStatItem}>
                    <span>Delivered</span>
                    <strong>24.8 kWh</strong>
                  </div>
                  <div className={styles.appStatItem}>
                    <span>Range Added</span>
                    <strong>+187 km</strong>
                  </div>
                </div>
                <div className={styles.appChartBlock}>
                  <div className={styles.appChartBars}>
                    <div className={styles.appChartBar} style={{ height: '40%' }} />
                    <div className={styles.appChartBar} style={{ height: '55%' }} />
                    <div className={styles.appChartBar} style={{ height: '75%' }} />
                    <div className={styles.appChartBar} style={{ height: '85%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '95%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '98%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '100%' }} />
                  </div>
                  <span className={styles.appChartLabel}>Maximum Power Delivery Curve</span>
                </div>
              </div>
            </div>
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>REAL-TIME POWER CONTROLS</h3>
              <h2 className={styles.sectionTitle}>Max output data<br />in real time.</h2>
              <p className={styles.sectionDesc}>
                Track the exact kilowatts flowing into your EV, set custom power limits, 
                monitor real-time grid load, and get instant push notifications for session events.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Live Power Monitoring</h4>
                    <p>Track kW output, session duration, range added, and energy cost in real-time from the app.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Power Limit Controls</h4>
                    <p>Set custom maximum power caps — useful for managing grid costs or shared electrical circuits.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Session Alerts</h4>
                    <p>Receive instant push notifications when charging begins, completes, or if a fault is detected.</p>
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
                  <span className={styles.specItemVal}>Type 2 Tethered (IEC 62196-2)</span>
                </div>
              </div>
              <div className={styles.specsColDivider} />
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Cable Length</span>
                  <span className={styles.specItemVal}>6m Heavy-Duty (Integrated)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Connectivity</span>
                  <span className={styles.specItemVal}>Wi-Fi (2.4/5GHz), Ethernet (RJ45), Bluetooth</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>App Compatibility</span>
                  <span className={styles.specItemVal}>iOS &amp; Android (Pulse Power V2)</span>
                </div>
              </div>
              <div className={styles.specsColDivider} />
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Safety Features</span>
                  <span className={styles.specItemVal}>PEN Fault Detection, Overcurrent, Overheat, Leakage, Dynamic CT Load Balancing</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Protection Rating</span>
                  <span className={styles.specItemVal}>IP66 Weatherproof / IK10 Impact Rated</span>
                </div>
              </div>
              <div className={styles.specsColDivider} />
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Operating Temperature</span>
                  <span className={styles.specItemVal}>-30°C to 55°C</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Dimensions (H x W x D)</span>
                  <span className={styles.specItemVal}>300 x 190 x 100 mm</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Weight</span>
                  <span className={styles.specItemVal}>{phase === 'single' ? '3.2 kg' : '4.1 kg'}</span>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h4>Max Speed Output</h4>
              <p>Up to 22kW on three-phase delivers 100km of range per hour of charging.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h4>Smart App Control</h4>
              <p>Full live power data, session controls, and push alerts from the BexaVolt app.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/></svg>
              </div>
              <h4>IP66 &amp; IK10</h4>
              <p>Built to withstand Australia's harshest outdoor conditions year-round.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h4>Easy Install</h4>
              <p>Standardised wall-mount bracket for rapid setup by any certified local electrician.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h4>Local Support</h4>
              <p>Dedicated Australian support team and certified installer network available nationwide.</p>
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
              <h3 className={styles.warrantyEyebrow}>4-YEAR WARRANTY</h3>
              <h2 className={styles.warrantyHeading}>Built to last, backed to prove it.</h2>
              <p className={styles.warrantyDesc}>
                VoltHome Pro is covered by our comprehensive 4-year replacement warranty — giving you 
                complete confidence in your home charging investment.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn more about warranty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <h3>POWER YOUR EV AT FULL SPEED</h3>
          <h2>Ready to go full Pulse?</h2>
          <p>Get a standalone VoltHome Pro or book a complete professional home installation today.</p>
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
