'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function VoltTrekProProductPage() {
  const [solarMode, setSolarMode] = useState<'grid' | 'solar'>('grid');

  // Dynamic values based on Solar Mode selection
  const price = '$1,299';
  const power = solarMode === 'grid' ? '7.4kW' : '3.6kW';
  const modeLabel = solarMode === 'grid' ? 'Grid Charging (AC)' : 'Off-Grid solar charging';
  const modeDesc = solarMode === 'grid'
    ? 'Charges from caravan park power sockets or home outlets.'
    : 'Charges from portable solar panel arrays with off-grid regulation.';

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
                <span className={styles.labelTag}>Rugged Off-Road Portable</span>
              </AnimateIn>

              <AnimateIn direction="left" delay={2}>
                <h1 className={styles.heroTitle}>
                  Volt <span className={styles.titleHighlight}>Trek Pro</span>
                </h1>
              </AnimateIn>

              <AnimateIn direction="left" delay={3}>
                <p className={styles.tagline}>Power where roads end.</p>
              </AnimateIn>

              <AnimateIn direction="left" delay={4}>
                <p className={styles.description}>
                  The Volt Trek Pro is built for extreme Australian adventures. Featuring thick rubber armoring,
                  IP68 submersion-proofing, and portable solar regulation capabilities, it's the ultimate charging companion for remote outback exploration.
                </p>
              </AnimateIn>

              {/* Checklist */}
              <AnimateIn direction="left" delay={5}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Up to {power} charging capacity</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Rubberized heavy shock protection shell (IK10+)</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>IP68 waterproof and dustproof submersion rating</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Direct portable solar input regulation</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Heavy-duty lockable adventure case included</span>
                  </div>
                </div>
              </AnimateIn>

              {/* Mode Switcher */}
              <AnimateIn direction="left" delay={6}>
                <div className={styles.phaseContainer}>
                  <span className={styles.selectorLabel}>Select Input Source</span>
                  <div className={styles.phaseSelector}>
                    <button 
                      onClick={() => setSolarMode('grid')}
                      className={`${styles.phaseBtn} ${solarMode === 'grid' ? styles.phaseBtnActive : ''}`}
                    >
                      Grid Power - 7.4kW AC
                    </button>
                    <button 
                      onClick={() => setSolarMode('solar')}
                      className={`${styles.phaseBtn} ${solarMode === 'solar' ? styles.phaseBtnActive : ''}`}
                    >
                      Off-Grid - Portable Solar Panels
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
                    Buy Trek Pro
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                  <button className={styles.btnSecondary}>
                    Explore Solar Kits
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
                <h4>Off-Grid Ready</h4>
                <p>Built-in solar regulation</p>
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
                <h4>IK10+ Armor</h4>
                <p>Extreme crush resistance</p>
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
                <h4>IP68 Waterproof</h4>
                <p>Dustproof & submersible</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>Overland Mount</h4>
                <p>Caravan mounting bracket</p>
              </div>
            </div>

            <div className={styles.specsBarItem}>
              <div className={styles.specsBarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12A10 10 0 1 1 12 2v10z"/>
                </svg>
              </div>
              <div className={styles.specsBarText}>
                <h4>All-Terrain</h4>
                <p>Designed for remote heat & dust</p>
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
                alt="Volt Trek Pro In Action" 
                className={styles.showcaseStaticCharger}
              />
            </div>

            {/* Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>BUILT FOR OUTBACK ADVENTURE</h3>
              <h2 className={styles.sectionTitle}>Indestructible build.<br />Unlimited destination.</h2>
              <p className={styles.sectionDesc}>
                Whether traversing muddy tracks or dusty plains, the Volt Trek Pro stands up to elements that would destroy normal chargers.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>01</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Rubber shock bumper</h4>
                    <p>Heavy wrap-around elastomer armor absorbs impacts and prevents dents, scratches, and drops.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>02</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Submersion waterproof (IP68)</h4>
                    <p>Hermetically sealed internal casing keeps out fine outback dust and tolerates accidental water submersion.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>03</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Off-grid solar charging</h4>
                    <p>Equipped with built-in DC-DC MPPT controls, allowing you to regulate portable folding solar panel input.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>
                    <span>04</span>
                  </div>
                  <div className={styles.featureRowText}>
                    <h4>Adventure carry case</h4>
                    <p>Military-style polymer hard case keeps your charger, connectors, and tails safe under heavy gear loads.</p>
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
              <h3 className={styles.sectionTag}>OFF-GRID INDEPENDENCE</h3>
              <h2 className={styles.sectionTitle}>Solar charging<br />off the beaten track.</h2>
              <p className={styles.sectionDesc}>
                Use BexaVolt's high-efficiency folding overland solar blankets to slowly trickle-charge your EV directly from the sun in wilderness locations.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Folding solar panel link</h4>
                    <p>Integrates directly with MC4 solar connectors to regulate DC energy outputs.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Caravan socket compliance</h4>
                    <p>Comes with a 15A heavy-duty connector to link into any campsite power outlet smoothly.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>✓</div>
                  <div className={styles.featureRowText}>
                    <h4>Extreme temperature protection</h4>
                    <p>Advanced silicon cooling compounds ensure the unit outputs full power even in 55°C heat.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Card Visual Column */}
            <div className={styles.imageShowcaseWrap}>
              <img 
                src="/3rdsec.png" 
                alt="Volt Trek Pro Solar Kit" 
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
                  <span className={styles.appStatus}>● Overland Mode</span>
                </div>

                <div className={styles.appCircleProgress}>
                  <span className={styles.appCircleVal}>{power}</span>
                  <span className={styles.appCircleLabel}>TREK ACTIVE</span>
                </div>

                <div className={styles.appStatRow}>
                  <div className={styles.appStatItem}>
                    <span>Source</span>
                    <strong>{modeLabel}</strong>
                  </div>
                  <div className={styles.appStatItem}>
                    <span>Case Temp</span>
                    <strong>28°C</strong>
                  </div>
                </div>

                {/* Energy Chart Mockup */}
                <div className={styles.appChartBlock}>
                  <div className={styles.appChartBars}>
                    <div className={styles.appChartBar} style={{ height: '15%' }} />
                    <div className={styles.appChartBar} style={{ height: '35%' }} />
                    <div className={styles.appChartBar} style={{ height: '45%' }} />
                    <div className={styles.appChartBar} style={{ height: '55%' }} />
                    <div className={styles.appChartBar} style={{ height: '65%' }} />
                    <div className={styles.appChartBar} style={{ height: '80%' }} />
                    <div className={`${styles.appChartBar} ${styles.appChartBarActive}`} style={{ height: '100%' }} />
                  </div>
                  <span className={styles.appChartLabel}>Real-time Power Curve</span>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className={styles.splitTextCol}>
              <h3 className={styles.sectionTag}>ADVENTURE STATUS</h3>
              <h2 className={styles.sectionTitle}>Designed for the<br />harshest outback.</h2>
              <p className={styles.sectionDesc}>
                The bright color-coded screen shows voltage fluctuation status, solar input capture metrics, and thermal protection boundaries clearly.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Integrated MPPT Solar Controller</h4>
                    <p>Tracks solar surplus dynamically to channel maximum safe charge flows into the battery system.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Indestructible chassis</h4>
                    <p>Heavy elastomer buffers absorb impacts, protecting the delicate controller internals on uneven trails.</p>
                  </div>
                </div>

                <div className={styles.featureRow}>
                  <div className={styles.featureRowIcon}>📲</div>
                  <div className={styles.featureRowText}>
                    <h4>Built-in diagnostics</h4>
                    <p>Clear screen codes keep you aware of grounding quality, phase balance, and solar input configurations.</p>
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
                  <span className={styles.specItemVal}>Up to 7.4kW (32A Grid) / 3.6kW (Solar)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Input / Output Voltage</span>
                  <span className={styles.specItemVal}>230V AC (Grid) / 12V-60V DC (Solar Input)</span>
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
                  <span className={styles.specItemVal}>5m Heavy-Duty UV-Resistant Cable</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Display Type</span>
                  <span className={styles.specItemVal}>2.4" Ruggedized TFT Screen</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Solar Regulation</span>
                  <span className={styles.specItemVal}>Integrated MPPT (Max Power Point Tracking)</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 3 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Safety Protection</span>
                  <span className={styles.specItemVal}>Type A + 6mA DC RCD, Under/Over Voltage, Active Thermal Derating, Earth Detection Bypass</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Protection Rating</span>
                  <span className={styles.specItemVal}>IP68 Waterproof & Dustproof / IK10+ Shockproof</span>
                </div>
              </div>

              <div className={styles.specsColDivider} />

              {/* Column 4 */}
              <div className={styles.specsCol}>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Operating Temperature</span>
                  <span className={styles.specItemVal}>-35°C to 60°C</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Dimensions (H x W x D)</span>
                  <span className={styles.specItemVal}>310 x 140 x 85 mm (Controller body)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specItemLabel}>Net Weight</span>
                  <span className={styles.specItemVal}>4.2 kg (Including casing armor)</span>
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
              <h4>Solar Outback Regulation</h4>
              <p>Direct regulation from portable folding solar panel arrays keeps you driving in off-grid wilderness.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h4>IK10+ Armor casing</h4>
              <p>Thick elastomer bumpers absorb impacts and shield delicate hardware from extreme overland track drops.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2M4.22 4.22l1.42 1.42M1 12h2M21 12h2M18.36 5.64l1.42-1.42M23 22H1L12 12z"/>
                </svg>
              </div>
              <h4>IP68 Submersion Rated</h4>
              <p>Hermetically sealed internal casing guards fully against fine outback dust and puddle submersions.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h4>Earth Bypass Option</h4>
              <p>Built-in option to allow charging from ungrounded remote generators or campsite systems safely.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>4-Year warranty</h4>
              <p>Covered by our robust 4-year overland warranty program with support depots nationwide.</p>
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
              <h2 className={styles.warrantyHeading}>Built for the wild, covered for years.</h2>
              <p className={styles.warrantyDesc}>
                Volt Trek Pro is backed standard by our comprehensive 4-year adventure warranty, built to handle remote use conditions.
              </p>
              <a href="#warranty-details" className={styles.warrantyLink}>
                Learn about the Trek warranty
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
          <h3>RUGGED OVERLAND CHARGING SYSTEM</h3>
          <h2>Ready to trek off-grid?</h2>
          <p>Get a standalone Volt Trek Pro adventure kit or order with BexaVolt folding solar blankets today.</p>
          <div className={styles.bottomCtaActions}>
            <button className={styles.btnPrimary}>
              Buy Volt Trek Pro
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className={styles.btnSecondary}>
              Explore Solar Bundles
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
