'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltHomeMaxProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [packageType, setPackageType] = useState<'installed' | 'hardware'>('hardware');
  const [connector, setConnector] = useState<'tethered' | 'socket'>('tethered');

  // Matched pricing with Volt Ultra:
  // 7KW Device with installation - $1,799.00
  // 22kW Device with installation - $1,899.00
  // Hardware only: 7kW - $899.00 / 22kW - $969.00
  const finalPrice = packageType === 'installed'
    ? (phase === 'single' ? 1799 : 1899)
    : (phase === 'single' ? 899 : 969);

  const priceDisplay = `$${finalPrice.toLocaleString()}`;
  const power = phase === 'single' ? '7kW' : '22kW';

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
                  VoltHome <span className={styles.titleHighlight}>Max</span>
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
                    <span className={styles.selectorLabel}>Select Package</span>
                    <div className={styles.phaseSelector}>
                      <button
                        onClick={() => setPackageType('hardware')}
                        className={`${styles.phaseBtn} ${packageType === 'hardware' ? styles.phaseBtnActive : ''}`}
                      >
                        Device Only
                      </button>
                      <button
                        onClick={() => setPackageType('installed')}
                        className={`${styles.phaseBtn} ${packageType === 'installed' ? styles.phaseBtnActive : ''}`}
                      >
                        Device with Installation
                      </button>
                    </div>
                  </div>

                  <div className={styles.phaseContainer}>
                    <span className={styles.selectorLabel}>Select Power Phase</span>
                    <div className={styles.phaseSelector}>
                      <button
                        onClick={() => setPhase('single')}
                        className={`${styles.phaseBtn} ${phase === 'single' ? styles.phaseBtnActive : ''}`}
                      >
                        7kW - Single Phase
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
                        Tethered (5m Cable)
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
                <div className={styles.priceBlock}>
                  <div className={styles.priceLabel}>
                    {priceDisplay}<span>AUD</span>
                  </div>
                  <div className={styles.priceCaption}>
                    {packageType === 'installed' 
                      ? `✓ ${power} Device with standard installation included`
                      : `Hardware unit only — installation by your own licensed electrician`}
                  </div>
                  <div className={styles.priceAltText}>
                    {packageType === 'installed' 
                      ? `Device only without installation: $899 (7kW) / $969 (22kW)`
                      : `With standard installation included: $1,799 (7kW) / $1,899 (22kW)`}
                  </div>
                </div>
                <div className={styles.heroActions}>
                  <Link 
                    href={`/quote?charger=ultra&power=${phase === 'single' ? '7kw' : '22kw'}&installer=${packageType === 'installed' ? 'bexavolt' : 'own'}`} 
                    className={styles.btnPrimary}
                  >
                    {packageType === 'installed' ? 'Get Fully-Installed Quote' : 'Buy Max Only'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <Link 
                    href={`/quote?charger=ultra&power=${phase === 'single' ? '7kw' : '22kw'}&installer=${packageType === 'installed' ? 'own' : 'bexavolt'}`} 
                    className={styles.btnSecondary}
                  >
                    {packageType === 'installed' ? 'Quote Device Only ($899 / $969)' : 'Quote With Installation ($1,799 / $1,899)'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
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
                <h4>3.5" Touchscreen</h4>
                <p>Full colour interactive UI</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Solar Ready</h4>
                <p>Eco, Eco+ &amp; Fast modes</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>RFID + 4G LTE</h4>
                <p>Multi-channel connectivity</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>IP67 &amp; IK10</h4>
                <p>Aerospace aluminum shell</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE - THE ULTIMATE CHARGER */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.imageShowcaseWrap}>
              <img src="/ultra2.png" alt="VoltHome Max In Action" className={styles.showcaseStaticCharger} />
            </div>
            <div className={styles.splitTextCol}>
              <AnimateIn direction="right" delay={1}>
                <h3 className={styles.sectionTag}>THE COMPLETE PACKAGE</h3>
              </AnimateIn>
              <AnimateIn direction="right" delay={2}>
                <h2 className={styles.sectionTitle}>
                  Every feature.<br />
                  <span className={styles.sectionTitleHighlight}>Zero compromises.</span>
                </h2>
              </AnimateIn>
              <AnimateIn direction="right" delay={3}>
                <p className={styles.sectionDesc}>
                  VoltHome Max brings together every advanced BexaVolt technology into a single premium unit — 
                  giving discerning EV owners the most refined, capable charging experience available in Australia.
                </p>
              </AnimateIn>
              <div className={styles.featuresList}>
                <AnimateIn direction="right" delay={4}>
                  <div className={styles.featureRow}>
                    <div className={styles.featureRowIcon}><span>01</span></div>
                    <div className={styles.featureRowText}>
                      <h4>3.5" Vibrant Colour Touchscreen</h4>
                      <p>View real-time kW speeds, voltage, power factor, session cost, and change modes directly on the wall.</p>
                    </div>
                  </div>
                </AnimateIn>
                <AnimateIn direction="right" delay={5}>
                  <div className={styles.featureRow}>
                    <div className={styles.featureRowIcon}><span>02</span></div>
                    <div className={styles.featureRowText}>
                      <h4>Solar Divert Charging</h4>
                      <p>Match your vehicle's charge rate to rooftop solar generation in real time with CT clamp integration.</p>
                    </div>
                  </div>
                </AnimateIn>
                <AnimateIn direction="right" delay={6}>
                  <div className={styles.featureRow}>
                    <div className={styles.featureRowIcon}><span>03</span></div>
                    <div className={styles.featureRowText}>
                      <h4>Always Connected via 4G LTE</h4>
                      <p>Built-in cellular eSIM ensures seamless connectivity and OTA firmware updates even where home Wi-Fi drops out.</p>
                    </div>
                  </div>
                </AnimateIn>
                <AnimateIn direction="right" delay={7}>
                  <div className={styles.featureRow}>
                    <div className={styles.featureRowIcon}><span>04</span></div>
                    <div className={styles.featureRowText}>
                      <h4>Brushed Aerospace Aluminum</h4>
                      <p>Precision CNC machined finish resists UV discoloration, coastal salt mist, and extreme Australian heat.</p>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPEED & COMPATIBILITY */}
      <section className={`${styles.sectionPadding} ${styles.bgDark}`}>
        <div className="container">
          <div className={styles.splitGridReverse}>
            <div className={styles.splitTextCol}>
              <AnimateIn direction="left" delay={1}>
                <h3 className={styles.sectionTag}>SPEED &amp; EFFICIENCY</h3>
              </AnimateIn>
              <AnimateIn direction="left" delay={2}>
                <h2 className={styles.sectionTitle}>
                  Up to 22kW charging.<br />
                  <span className={styles.sectionTitleHighlight}>120km added per hour.</span>
                </h2>
              </AnimateIn>
              <AnimateIn direction="left" delay={3}>
                <p className={styles.sectionDesc}>
                  On three-phase power, the VoltHome Max adds up to 120km of driving range every hour — 
                  charging typical vehicles from 10% to 80% in under 3 hours.
                </p>
              </AnimateIn>
              <div className={styles.featuresList}>
                <AnimateIn direction="left" delay={4}>
                  <div className={styles.featureRow}>
                    <div className={styles.featureRowIcon}>✓</div>
                    <div className={styles.featureRowText}>
                      <h4>Single &amp; Three-Phase Compatible</h4>
                      <p>Operates seamlessly on residential 240V (up to 7.4kW / 32A) or 415V three-phase (up to 22kW / 32A).</p>
                    </div>
                  </div>
                </AnimateIn>
                <AnimateIn direction="left" delay={5}>
                  <div className={styles.featureRow}>
                    <div className={styles.featureRowIcon}>✓</div>
                    <div className={styles.featureRowText}>
                      <h4>Universal Type 2 Support</h4>
                      <p>Compatible with all Australian EVs: Tesla, BYD, MG, Hyundai, Kia, Polestar, BMW, Mercedes, Porsche and more.</p>
                    </div>
                  </div>
                </AnimateIn>
                <AnimateIn direction="left" delay={6}>
                  <div className={styles.featureRow}>
                    <div className={styles.featureRowIcon}>✓</div>
                    <div className={styles.featureRowText}>
                      <h4>Dynamic Load Balancing</h4>
                      <p>Continuously monitors household energy consumption to dynamically adapt charging rate and protect main supply.</p>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
            <div className={styles.imageShowcaseWrap}>
              <img src="/ultra3.png" alt="VoltHome Max Charging" className={styles.showcaseStaticCharger} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. APP SHOWCASE */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.appShowcaseGrid}>
            <div className={styles.appShowcaseVisual}>
              <img src="/ultra4.png" alt="VoltHome Max App" className={styles.appShowcaseImage} />
            </div>
            <div className={styles.appShowcaseText}>
              <span className={styles.sectionTag}>COMMAND CENTER</span>
              <h2 className={styles.sectionTitle}>Total control on your phone.</h2>
              <p className={styles.sectionDesc}>
                The BexaVolt app gives you access to every feature — from solar routing 
                and off-peak scheduling to detailed session cost analytics and multi-user access permissions.
              </p>
              <div className={styles.appPillsGrid}>
                <div className={styles.appPill}>
                  <span className={styles.appPillIcon}>⚡</span>
                  <div>
                    <strong>Scheduled Charging</strong>
                    <p>Automate charging during cheapest off-peak electricity windows</p>
                  </div>
                </div>
                <div className={styles.appPill}>
                  <span className={styles.appPillIcon}>☀️</span>
                  <div>
                    <strong>Solar Divert Control</strong>
                    <p>Set solar thresholds and prioritize excess generation</p>
                  </div>
                </div>
                <div className={styles.appPill}>
                  <span className={styles.appPillIcon}>📊</span>
                  <div>
                    <strong>Cost &amp; kWh History</strong>
                    <p>Track every session cost with exact electricity tariff inputs</p>
                  </div>
                </div>
                <div className={styles.appPill}>
                  <span className={styles.appPillIcon}>🔒</span>
                  <div>
                    <strong>Remote Lock &amp; RFID</strong>
                    <p>Authorize family members or lock the unit when you're away</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS TABLE */}
      <section className={`${styles.sectionPadding} ${styles.bgDark}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionTag}>FULL TECHNICAL SPECIFICATIONS</span>
            <h2 className={styles.sectionTitleCenter}>Engineered to perfection.</h2>
            <p className={styles.sectionSubCenter}>Detailed engineering specifications for the BexaVolt VoltHome Max.</p>
          </div>
          <div className={styles.specsTable}>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Power Output</span>
              <span className={styles.specVal}>7.4kW (1-Phase / 32A) or 22kW (3-Phase / 32A)</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Input Voltage</span>
              <span className={styles.specVal}>230V AC (1P) / 400V AC (3P) ± 15%, 50/60 Hz</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Display</span>
              <span className={styles.specVal}>3.5" full-colour capacitive touchscreen (480x320)</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Cable / Socket</span>
              <span className={styles.specVal}>5m Type 2 Tethered Cable or Universal Type 2 Socket</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Connectivity</span>
              <span className={styles.specVal}>Wi-Fi 2.4GHz, Bluetooth 5.0, 4G LTE eSIM, RJ45 Ethernet</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Access Control</span>
              <span className={styles.specVal}>RFID card (2 included), Mobile App, Auto-start (Plug &amp; Charge)</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Solar Integration</span>
              <span className={styles.specVal}>CT clamp support with Eco, Eco+ and Fast charging modes</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>OCPP Support</span>
              <span className={styles.specVal}>OCPP 1.6J JSON, upgradable to OCPP 2.0.1</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Enclosure</span>
              <span className={styles.specVal}>Aerospace-grade 6000-series brushed aluminium, IP67 / IK10</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Safety Features</span>
              <span className={styles.specVal}>Built-in 6mA DC + Type A 30mA AC RCD, PEN fault, Overvoltage, Surge</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Operating Temp</span>
              <span className={styles.specVal}>-30°C to +55°C</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Certifications</span>
              <span className={styles.specVal}>RCM, AS/NZS 3820, IEC 61851-1, IEC 61851-21-2, CE</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Warranty</span>
              <span className={styles.specVal}>2 Years Comprehensive Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE BEXAVOLT */}
      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Built for Australia</h4>
              <p>Engineered and tested for extreme Australian sun, heat and coastal conditions.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h4>Solar Divert Included</h4>
              <p>Harness 100% free rooftop solar energy directly into your vehicle battery.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h4>Nationwide Installers</h4>
              <p>Clean, certified installation by experienced EV technicians in every state.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h4>Premium Support</h4>
              <p>Max owners receive priority access to our dedicated engineering support team Australia-wide.</p>
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
              <h3 className={styles.warrantyEyebrow}>2-YEAR WARRANTY</h3>
              <h2 className={styles.warrantyHeading}>Our best charger. Our best warranty.</h2>
              <p className={styles.warrantyDesc}>
                VoltHome Max comes standard with our exclusive 2-year comprehensive warranty — the longest 
                coverage in the BexaVolt lineup, including priority support and next-business-day swap.
              </p>
              <Link href="/warranty" className={styles.warrantyLink}>
                Learn about the warranty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <h3>EXPERIENCE THE PINNACLE OF HOME CHARGING</h3>
          <h2>Ready to go Max?</h2>
          <p>
            Choose 7kW with installation ($1,799.00) or 22kW with installation ($1,899.00), or purchase the standalone hardware ($899 / $969).
          </p>
          <div className={styles.bottomCtaActions}>
            <Link href="/quote?charger=ultra&installer=own" className={styles.btnPrimary}>
              Buy Max Device Only ($899+)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="/quote?charger=ultra&installer=bexavolt" className={styles.btnSecondary}>
              Get Fully-Installed Quote ($1,799+)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
          <div className="sales-call-banner">
            <span>Australian-based call centre help available • Prefer to order or get advice by phone?</span>
            <a href="tel:0272415565" title="Call Australian Call Centre: 02 7241 5565">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>CALL CENTRE: <strong>02 7241 5565</strong></span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
