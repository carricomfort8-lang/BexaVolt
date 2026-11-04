'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltHomeProProductPage() {
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [packageType, setPackageType] = useState<'installed' | 'hardware'>('hardware');

  // Matched pricing with Volt Pulse:
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
                <span className={styles.labelTag}>High-Performance Wall Charger</span>
              </AnimateIn>
              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  VoltHome <span className={styles.titleHighlight}>Pro</span>
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
                    <span>Up to {power} maximum output charging</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>5m heavy-duty integrated Type 2 cable</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Built-in CT clamp dynamic load balancing</span>
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
                    href={`/quote?charger=pulse&power=${phase === 'single' ? '7kw' : '22kw'}&installer=${packageType === 'installed' ? 'bexavolt' : 'own'}`} 
                    className={styles.btnPrimary}
                  >
                    {packageType === 'installed' ? 'Get Fully-Installed Quote' : 'Buy Pro Only'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <Link 
                    href={`/quote?charger=pulse&power=${phase === 'single' ? '7kw' : '22kw'}&installer=${packageType === 'installed' ? 'own' : 'bexavolt'}`} 
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
                <p>Maximum output speed</p>
              </div>
            </div>
            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>5m cable</h4>
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
                    <h4>5m Heavy-Duty Tethered Cable</h4>
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
                    <p>Aircraft-grade aluminium front bezel with deep graphite housing — built to withstand harsh Australian conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPEED BREAKDOWN */}
      <section className={`${styles.sectionPadding} ${styles.bgDark}`}>
        <div className="container">
          <div className={styles.splitGridReverse}>
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
                    <h4>7.4kW single-phase standard</h4>
                    <p>Add up to 40km of range per hour on standard 240V residential single-phase power connections.</p>
                  </div>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Universal Type 2 compatibility</h4>
                    <p>Seamlessly works with every current EV sold in Australia, including Tesla, BYD, MG, Hyundai, and Kia.</p>
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

      {/* 5. TECH SPECS TABLE */}
      <section className={styles.specsTableSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionTag}>FULL TECHNICAL SPECIFICATIONS</span>
            <h2 className={styles.sectionTitleCenter}>Everything under the hood.</h2>
            <p className={styles.sectionSubCenter}>Detailed engineering specifications for the BexaVolt VoltHome Pro.</p>
          </div>
          <div className={styles.specsTable}>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Charging Power Output</span>
              <span className={styles.specVal}>7kW (Single-Phase) / 22kW (Three-Phase)</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Input Voltage</span>
              <span className={styles.specVal}>230V AC (1P) / 400V AC (3P) ± 10%, 50/60 Hz</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Max Output Current</span>
              <span className={styles.specVal}>32A per phase continuous</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Connector Type</span>
              <span className={styles.specVal}>Integrated 5m Type 2 Tethered Cable</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Dynamic Load Balancing</span>
              <span className={styles.specVal}>External CT Clamp (included with installation)</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Connectivity</span>
              <span className={styles.specVal}>Wi-Fi 802.11 b/g/n (2.4GHz), Bluetooth 5.0, RJ45 Ethernet</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>OCPP Compliance</span>
              <span className={styles.specVal}>OCPP 1.6J JSON, upgradable to OCPP 2.0.1</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Enclosure Protection</span>
              <span className={styles.specVal}>IP66 Weatherproof / IK10 Impact Resistance</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Operating Temperature</span>
              <span className={styles.specVal}>-30°C to +55°C (with thermal derating protection)</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Electrical Safety</span>
              <span className={styles.specVal}>Built-in 6mA DC RCD + Type A 30mA AC equivalent protection</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Australian Certification</span>
              <span className={styles.specVal}>RCM / AS/NZS 3820, AS/NZS 60335.1, Clean Energy Council approved</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specKey}>Warranty</span>
              <span className={styles.specVal}>2 Years Comprehensive Replacement Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTALLATION HIGHLIGHT */}
      <section className={`${styles.sectionPadding} ${styles.bgDark}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionTag}>NATIONWIDE INSTALLATION</span>
            <h2 className={styles.sectionTitleCenter}>Installed by certified professionals.</h2>
            <p className={styles.sectionSubCenter}>
              From quote to commissioning — our certified electrician network handles everything.
            </p>
          </div>
          <div className={styles.installGrid}>
            <div className={styles.installCard}>
              <div className={styles.installStep}>01</div>
              <h4>Site Assessment</h4>
              <p>We review your switchboard capacity and garage layout to specify the optimal setup.</p>
            </div>
            <div className={styles.installCard}>
              <div className={styles.installStep}>02</div>
              <h4>Certified Installation</h4>
              <p>A licensed, EV-qualified electrician installs the unit, wiring, and dedicated safety breakers.</p>
            </div>
            <div className={styles.installCard}>
              <div className={styles.installStep}>03</div>
              <h4>Testing &amp; Compliance</h4>
              <p>Full testing under load, verification of CT balancing, and submission of the electrical compliance certificate.</p>
            </div>
            <div className={styles.installCard}>
              <div className={styles.installStep}>04</div>
              <h4>App Handover</h4>
              <p>We walk you through the BexaVolt mobile app, setup off-peak scheduling, and verify live telemetry.</p>
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
              <h4>Australian Standards</h4>
              <p>Engineered and certified specifically for Australia's electrical grid and environmental extremes.</p>
            </div>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <h4>Off-Peak Smart Charging</h4>
              <p>Set custom charge windows via the app to charge only when your electricity tariffs are lowest.</p>
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
              <h3 className={styles.warrantyEyebrow}>2-YEAR WARRANTY</h3>
              <h2 className={styles.warrantyHeading}>Built to last, backed to prove it.</h2>
              <p className={styles.warrantyDesc}>
                VoltHome Pro is covered by our comprehensive 2-year replacement warranty — giving you 
                complete confidence in your home charging investment.
              </p>
              <Link href="/warranty" className={styles.warrantyLink}>
                Learn more about warranty
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <h3>POWER YOUR EV AT FULL SPEED</h3>
          <h2>Ready to go full Pro?</h2>
          <p>
            Choose 7kW with installation ($1,799.00) or 22kW with installation ($1,899.00), or purchase the standalone hardware ($899 / $969).
          </p>
          <div className={styles.bottomCtaActions}>
            <Link href="/quote?charger=pulse&installer=own" className={styles.btnPrimary}>
              Buy Pro Device Only ($899+)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="/quote?charger=pulse&installer=bexavolt" className={styles.btnSecondary}>
              Get Fully-Installed Quote ($1,799+)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
          <div className="sales-call-banner">
            <span>Prefer to order or get advice by phone?</span>
            <a href="tel:0272415565" title="Call Sales: 02 7241 5565">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>CALL SALES: <strong>02 7241 5565</strong></span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
