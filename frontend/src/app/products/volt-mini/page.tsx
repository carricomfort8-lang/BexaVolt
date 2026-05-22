'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltMiniProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');

  // Dynamic values based on Phase selection
  const price = phase === 'single' ? '$799' : '$1,199';
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
                <span className={styles.labelTag}>Wall-Mount Charger</span>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Volt <span className={styles.titleHighlight}>Mini</span>
                </h1>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>Compact everyday charging.</p>
              </AnimateIn>

              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The Volt Mini is our most affordable wall-mount EV charger. Designed for everyday use, 
                  it delivers safe, reliable charging in a compact, durable design that fits any home.
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
                    <span>5m integrated charging cable</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Wi-Fi connectivity and smart app control</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Built-in safety with multiple protections</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>IP65 rated for indoor & outdoor use</span>
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
                <p>Integrated tethered cable</p>
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
                <h4>Wi-Fi connected</h4>
                <p>Smart app control</p>
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
                <h4>5 safety protections</h4>
                <p>Built-in peace of mind</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12A10 10 0 1 1 12 2v10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>IP65 rated</h4>
                <p>Built for any weather</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE SHOWCASE ("Small in size. Big on performance.") */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Visual Column */}
            <div className={styles.imageShowcaseWrap}>
              <div className={styles.imagePlaceholderBg} />
              {/* Uses existing transparent charger */}
              <img 
                src="/img23-removebg-preview.png" 
                alt="Volt Mini In Action" 
                className={styles.showcaseStaticCharger}
              />
              <div className={styles.actionOverlay}>
                <button className={styles.playIconBtn} aria-label="Play video">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
                <span>See Volt Mini in action</span>
              </div>
            </div>

            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>COMPACT, POWERFUL, BUILT FOR EVERYDAY</h3>
              <h2 className={styles.sectionTitle}>Small in size.<br />Big on performance.</h2>
              <p className={styles.sectionDesc}>
                Volt Mini delivers up to {power} of charging power in a sleek, space-saving design. 
                Perfect for garages, carports or side of home installs.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>01</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Easy to live with</h4>
                    <p>Lightweight and compact to suit any space perfectly.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>02</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Built tough</h4>
                    <p>Designed and built ruggedly to withstand local climate conditions.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>03</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Smart charging</h4>
                    <p>Control, schedule and monitor your energy consumption from the BexaVolt mobile app.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>04</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Affordable by design</h4>
                    <p>Premium hardware features without the premium retail price.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. UTILITY SHOWCASE ("The easy way to power your EV.") */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>EVERYDAY CHARGING</h3>
              <h2 className={styles.sectionTitle}>The easy way<br />to power your EV.</h2>
              <p className={styles.sectionDesc}>
                Plug in at home and wake up ready to go. Volt Mini makes daily charging simple, 
                safe and stress-free.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Charge overnight and save</h4>
                    <p>Schedule charging sessions during off-peak periods to maximize grid savings.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Up to 50km of range per hour</h4>
                    <p>Delivers high-efficiency output to rapidly top up battery ranges overnight.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Works with all Type 2 EVs</h4>
                    <p>Universal compliance with all modern electric vehicles sold across Australia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Card Visual Column */}
            <div className={styles.ambientChargingCard}>
              <div className={styles.nightGlow} />
              <div className={styles.carMockup}>
                <svg className={styles.carSvg} width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                  <circle cx="7" cy="17" r="2"/>
                  <circle cx="17" cy="17" r="2"/>
                  <path d="M9 17h6"/>
                </svg>
                <div className={styles.ambientCardLabel}>
                  <strong>Night Driveway Charging Mode</strong>
                  <p style={{ fontSize: '0.8rem', color: '#71717a', marginTop: '0.4rem' }}>
                    Volt Mini integrated smart-led ambient ring indicates charging status
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PHONE APP SECTION ("Total control from your phone.") */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            
            {/* Left Phone App Mockup */}
            <div className={styles.appShowcaseCol}>
              <div className={styles.appMockupPhone}>
                <div className={styles.phoneNotch} />
                
                <div className={styles.appHeader}>
                  <span className={styles.appName}>BEXAVOLT</span>
                  <span className={styles.appStatus}>● Live</span>
                </div>

                <div className={styles.appCircleProgress}>
                  <span className={styles.appCircleVal}>{power}</span>
                  <span className={styles.appCircleLabel}>CHARGING ACTIVE</span>
                </div>

                <div className={styles.appStatRow}>
                  <div className={styles.appStatItem}>
                    <span>Delivered</span>
                    <strong>13.6 kWh</strong>
                  </div>
                  <div className={styles.appStatItem}>
                    <span>Duration</span>
                    <strong>02:45:30</strong>
                  </div>
                </div>

                {/* Energy Chart Mockup */}
                <div className={styles.appChartBlock}>
                  <div className={styles.appChartBars}>
                    <div className={styles.appChartBar} style={{ height: '30%' }} />
                    <div className={styles.appChartBar} style={{ height: '45%' }} />
                    <div className={styles.appChartBar} style={{ height: '35%' }} />
                    <div className={styles.appChartBar} style={{ height: '65%' }} />
                    <div className={styles.appChartBar} style={{ height: '55%' }} />
                    <div className={styles.appChartBar} style={{ height: '80%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '95%' }} />
                  </div>
                  <span className={styles.appChartLabel}>Real-time Power Curve</span>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>SMART APP CONTROL</h3>
              <h2 className={styles.sectionTitle}>Total control<br />from your phone.</h2>
              <p className={styles.sectionDesc}>
                Schedule charging, track energy use and manage multiple chargers - all from 
                the BexaVolt application dashboard.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Real-time charging status</h4>
                    <p>See power outputs, durations, schedules and total energy delivered in real-time.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Smart scheduling</h4>
                    <p>Set custom start and stop parameters to load balance charging to cheap off-peak hours.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Energy insights</h4>
                    <p>Review comprehensive historical charging sessions data to monitor total carbon footprint reduction.</p>
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

      {/* 6. TECHNICAL SPECIFICATIONS GRID */}
      <section className={`${styles.sectionPadding} ${styles.specsSection}`}>
        <div className="container">
          <div className={styles.specsTitleBlock}>
            <h3 className={styles.sectionTag}>ENGINEERING DATA</h3>
            <h2 className={styles.specsTitle}>Technical Specifications</h2>
          </div>

          <div className={styles.specsGrid}>
            <div className={`${styles.specRow} ${styles.specRowActive}`}>
              <span className={styles.specLabel}>Charging Power</span>
              <span className={styles.specVal}>Up to {power} ({phase === 'single' ? '32A' : '32A'})</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Cable Length</span>
              <span className={styles.specVal}>5m (Integrated Tethered)</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Input / Output Voltage</span>
              <span className={styles.specVal}>{phase === 'single' ? '230V AC, 50Hz' : '400V AC, 50Hz'}</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Connectivity</span>
              <span className={styles.specVal}>Wi-Fi (2.4GHz) & Bluetooth</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Connector Type</span>
              <span className={styles.specVal}>Type 2 (IEC 62196-2)</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>App Compatibility</span>
              <span className={styles.specVal}>iOS & Android</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Safety Features</span>
              <span className={styles.specVal}>Overvoltage, Undervoltage, Leakage Protection</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Protection Rating</span>
              <span className={styles.specVal}>IP65 (Indoor & Outdoor rated)</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Operating Temperature</span>
              <span className={styles.specVal}>-25°C to 55°C</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Dimensions (H x W x D)</span>
              <span className={styles.specVal}>272 x 172 x 90 mm</span>
            </div>

            <div className={styles.specRow}>
              <span className={styles.specLabel}>Weight</span>
              <span className={styles.specVal}>{phase === 'single' ? '2.6 kg' : '3.2 kg'}</span>
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
              <h4>Save more</h4>
              <p>Charge at home and save up to 60% compared to high-tariff public fast charging networks.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h4>Smart & connected</h4>
              <p>Control charging remotely, schedules, load balances and track status dynamically.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/>
                </svg>
              </div>
              <h4>Built for weather</h4>
              <p>IP65 certified and engineered to withstand extreme Australian heat, dust and rain.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h4>Easy install</h4>
              <p>Standard design enables rapid, seamless wall installation by any certified local electrician.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>Local support</h4>
              <p>Proudly backed by our dedicated, expert customer care team based right here in Australia.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. WARRANTY BANNER SECTION */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.warrantyBanner}>
            
            {/* Warranty Badge Emblem */}
            <div className={styles.badgeColumn}>
              <div className={styles.warrantyCircle}>
                <div className={styles.warrantyCircleInner}>
                  <span className={styles.warrantyNumber}>4</span>
                  <span className={styles.warrantyText}>Year<br />Warranty</span>
                </div>
              </div>
            </div>

            {/* Description Text Column */}
            <div className={styles.warrantyDescColumn}>
              <h3>Peace of mind, guaranteed.</h3>
              <p>
                Volt Mini comes backed standard with an industry-leading 4-year warranty. 
                Enjoy comprehensive coverage and local assistance from BexaVolt's expert engineers.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn more about warranty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>

            {/* Outdoor Charger visual placeholder */}
            <div className={styles.warrantyVisualColumn}>
              <div className={styles.warrantyVisualCard}>
                <div className={styles.warrantyLeafGlow} />
                <img 
                  src="/img23-removebg-preview.png" 
                  alt="Volt Mini Waterproof Spec" 
                  className={styles.warrantyStaticCharger}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION BANNER */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <h3>READY TO CHARGE SMARTER AT HOME?</h3>
          <h2>Join thousands of Australians<br />charging with BexaVolt.</h2>
          <p>Get a clean charger unit or full professional installation services today.</p>
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
