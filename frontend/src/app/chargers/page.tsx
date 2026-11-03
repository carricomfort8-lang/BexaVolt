'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export interface Charger {
  id: string;
  name: string;
  category: 'home' | 'portable' | 'commercial';
  categoryLabel: string;
  badge?: string;
  tagline: string;
  description: string;
  power: string;
  phase: 'single' | 'three' | 'both';
  phaseLabel: string;
  priceFrom: string;
  priceSub: string;
  image: string;
  href: string;
  solarReady: boolean;
  features: string[];
  specs: {
    maxPower: string;
    mounting: string;
    rating: string;
    warranty: string;
  };
}

// Exactly the chargers listed in BexaVolt's Mega Menus (Chargers, For Home, Business)
const ALL_CHARGERS: Charger[] = [
  {
    id: 'volt-ultra',
    name: 'Volt Ultra',
    category: 'home',
    categoryLabel: 'Flagship Wallbox',
    badge: 'FLAGSHIP',
    tagline: 'The pinnacle of home charging.',
    description: 'Combining integrated 3.5" colour touchscreen, solar integration, RFID security, 4G LTE, and aerospace-grade brushed aluminium.',
    power: '7.4kW / 22kW',
    phase: 'both',
    phaseLabel: 'Single & Three Phase',
    priceFrom: '$1,799',
    priceSub: '$1,799 (7kW installed) / $1,899 (22kW installed)',
    image: '/ultra1.png',
    href: '/products/volt-ultra',
    solarReady: true,
    features: [
      '3.5" Colour Touchscreen Display',
      'Solar Integration (Eco / Eco+ / Fast)',
      'RFID Access & 4G LTE Backup',
      'IP67 & IK10 Aluminium Enclosure',
    ],
    specs: {
      maxPower: '22kW',
      mounting: 'Wall / Pedestal',
      rating: 'IP67 / IK10',
      warranty: '2 Years',
    },
  },
  {
    id: 'volt-pulse',
    name: 'Volt Pulse',
    category: 'home',
    categoryLabel: 'High-Performance Wallbox',
    badge: 'POPULAR',
    tagline: 'Power at full speed.',
    description: 'Sleek, powerful residential wallbox with dynamic load balancing, Wi-Fi connectivity, and intelligent app scheduling.',
    power: '7.4kW / 22kW',
    phase: 'both',
    phaseLabel: 'Single & Three Phase',
    priceFrom: '$1,799',
    priceSub: '$1,799 (7kW installed) / $1,899 (22kW installed)',
    image: '/2ndimagevoltmini.png',
    href: '/products/volt-pulse',
    solarReady: true,
    features: [
      'Dynamic Load Balancing System',
      'Smart App Scheduling & Live Stats',
      'Built-in Earth Fault Protection',
      'Type 2 Tethered (5M) or Universal Socket',
    ],
    specs: {
      maxPower: '22kW',
      mounting: 'Wall / Post',
      rating: 'IP65 Weatherproof',
      warranty: '2 Years',
    },
  },
  {
    id: 'volt-go',
    name: 'Volt Go (Portable EV Charger)',
    category: 'portable',
    categoryLabel: 'Ultra-Portable Charger',
    badge: 'BESTSELLER',
    tagline: 'Power Anywhere, Charge Everywhere.',
    description: 'Ultra-portable EV charger available with standard 10A domestic ($499) or 15A caravan plug ($599). Heavy-duty 5M cable and travel carry bag included.',
    power: '1.8kW / 3.6kW',
    phase: 'single',
    phaseLabel: 'Single Phase (Domestic / Caravan)',
    priceFrom: '$499',
    priceSub: '$499 (8A Domestic) / $599 (15A Caravan)',
    image: '/portable1.png',
    href: '/products/volt-go',
    solarReady: false,
    features: [
      '1.8kW 8A Domestic ($499) / 3.6kW 15A Caravan ($599)',
      '5M Heavy-Duty Australian Spec Cable',
      'Integrated CPU & Real-Time Temperature Monitor',
      'Switchable Grounding Mode & Carry Bag Included',
    ],
    specs: {
      maxPower: '3.6kW',
      mounting: 'Portable / Boot Kit',
      rating: 'IP55 Rated',
      warranty: '2 Years',
    },
  },
  {
    id: 'volt-mini',
    name: 'Volt Mini',
    category: 'home',
    categoryLabel: 'Compact Wallbox',
    badge: 'COMPACT',
    tagline: 'Compact everyday charging.',
    description: 'Space-saving home EV charger with a discreet, minimalist footprint that fits easily into tight garage spaces and carports.',
    power: '7.4kW / 22kW',
    phase: 'both',
    phaseLabel: 'Single & Three Phase',
    priceFrom: '$799',
    priceSub: '$799 (7kW) / $1,199 (22kW)',
    image: '/volitmini_hero.png',
    href: '/products/volt-mini',
    solarReady: false,
    features: [
      'Ultra-Compact Minimalist Profile',
      'Intelligent LED Halo Status Indicator',
      'Plug-and-Play Everyday Reliability',
      'Rugged Weather-Sealed Polycarbonate Body',
    ],
    specs: {
      maxPower: '22kW',
      mounting: 'Wall / Post',
      rating: 'IP65 Weatherproof',
      warranty: '2 Years',
    },
  },
  {
    id: 'volt-home-pro',
    name: 'VoltHome Pro',
    category: 'home',
    categoryLabel: 'Residential Pro Wallbox',
    badge: 'HEAVY DUTY',
    tagline: 'EV ready. Future ready.',
    description: 'Engineered for reliability with commercial-grade internal contactors and comprehensive built-in electrical safety safeguards.',
    power: '7.4kW / 22kW',
    phase: 'both',
    phaseLabel: 'Single & Three Phase',
    priceFrom: '$1,099',
    priceSub: '$1,099 (7kW) / $1,499 (22kW)',
    image: '/volitmini_hero.png',
    href: '/products/volt-home-pro',
    solarReady: false,
    features: [
      'Commercial-Grade Contactor Components',
      'Wall or Freestanding Pedestal Mounting',
      'Built-in 6mA DC Leakage & RCD Protection',
      'Ergonomic Integrated 5M Cable Holster',
    ],
    specs: {
      maxPower: '22kW',
      mounting: 'Wall / Pedestal',
      rating: 'IP65 Rated',
      warranty: '2 Years',
    },
  },
  {
    id: 'volt-home-max',
    name: 'VoltHome Max',
    category: 'home',
    categoryLabel: 'High-Capacity Wallbox',
    badge: 'FASTEST HOME',
    tagline: 'Three-phase power for maximum home speed.',
    description: 'Full 22kW high-output charging station designed for properties with three-phase power supply and large-battery vehicles.',
    power: '22kW',
    phase: 'three',
    phaseLabel: 'Three Phase Dedicated',
    priceFrom: '$1,799',
    priceSub: '$1,799 (Base) / $2,299 (Premium)',
    image: '/ultra1.png',
    href: '/products/volt-home-max',
    solarReady: true,
    features: [
      'Blazing 22kW Three-Phase AC Speed',
      'Adds Up To 120km Range Per Hour',
      'Dual Vehicle Readiness & Thermal Management',
      'Heavy-Duty Aerospace Aluminum Housing',
    ],
    specs: {
      maxPower: '22kW',
      mounting: 'Wall / Pedestal',
      rating: 'IP67 / IK10',
      warranty: '2 Years',
    },
  },
  {
    id: 'volt-business-ultra',
    name: 'VoltBusiness Ultra',
    category: 'commercial',
    categoryLabel: 'Commercial & Fleet',
    badge: 'COMMERCIAL',
    tagline: 'Ultra-fast commercial AC charging.',
    description: 'OCPP 1.6J/2.0.1 compliant enterprise AC station with RFID user management, automated billing integration, and fleet telematics.',
    power: '22kW',
    phase: 'three',
    phaseLabel: 'Three Phase Commercial',
    priceFrom: '$1,799',
    priceSub: '$1,799 (Unit) / $2,299 (Fleet Bundle)',
    image: '/ultra1.png',
    href: '/products/volt-business-ultra',
    solarReady: true,
    features: [
      'OCPP 1.6J / 2.0.1 Open Protocol Compliance',
      'RFID Card & Mobile App User Authorisation',
      'Vandal-Proof IK10 Aluminium Enclosure',
      'Dynamic Multi-Unit Fleet Load Sharing',
    ],
    specs: {
      maxPower: '22kW',
      mounting: 'Dual Socket / Pedestal',
      rating: 'IP67 / IK10',
      warranty: '2 Years',
    },
  },
];

export default function ChargersArchivePage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'home' | 'portable' | 'commercial'>('all');
  const [selectedPhase, setSelectedPhase] = useState<'all' | 'single' | 'three'>('all');

  // Filter logic
  const filteredChargers = useMemo(() => {
    return ALL_CHARGERS.filter(charger => {
      // Search match
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        charger.name.toLowerCase().includes(query) ||
        charger.tagline.toLowerCase().includes(query) ||
        charger.description.toLowerCase().includes(query) ||
        charger.power.toLowerCase().includes(query) ||
        charger.categoryLabel.toLowerCase().includes(query) ||
        charger.features.some(f => f.toLowerCase().includes(query));

      // Category match
      const matchesCategory =
        selectedCategory === 'all' || charger.category === selectedCategory;

      // Phase match
      const matchesPhase =
        selectedPhase === 'all' ||
        charger.phase === 'both' ||
        charger.phase === selectedPhase;

      return matchesSearch && matchesCategory && matchesPhase;
    });
  }, [search, selectedCategory, selectedPhase]);

  const resetFilters = () => {
    setSearch('');
    setSelectedCategory('all');
    setSelectedPhase('all');
  };

  return (
    <div className={styles.page}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgGlow} />
        <div className="container">
          <div className={styles.heroContent}>
            <AnimateIn direction="up" delay={1}>
              <span className={styles.heroEyebrow}>BEXAVOLT PRODUCT CATALOGUE</span>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <h1 className={styles.heroTitle}>
                All BexaVolt <span className={styles.titleHighlight}>Chargers</span>
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <p className={styles.heroTagline}>
                Explore Australia's complete range of smart home wallboxes, commercial fast chargers, and rugged portable units. Designed for local conditions, backed by a 2-year warranty.
              </p>
            </AnimateIn>

            {/* Filter & Search Bar */}
            <AnimateIn direction="up" delay={4}>
              <div className={styles.controlsWrap}>
                {/* Search Bar */}
                <div className={styles.searchWrap}>
                  <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by model, feature (e.g. Ultra, Pulse, Portable, 22kW)..."
                    className={styles.searchInput}
                  />
                </div>

                {/* Category Filter Tabs */}
                <div className={styles.filterTabs}>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`${styles.filterTab} ${selectedCategory === 'all' ? styles.filterTabActive : ''}`}
                  >
                    All Chargers ({ALL_CHARGERS.length})
                  </button>
                  <button
                    onClick={() => setSelectedCategory('home')}
                    className={`${styles.filterTab} ${selectedCategory === 'home' ? styles.filterTabActive : ''}`}
                  >
                    Home Wallboxes (5)
                  </button>
                  <button
                    onClick={() => setSelectedCategory('portable')}
                    className={`${styles.filterTab} ${selectedCategory === 'portable' ? styles.filterTabActive : ''}`}
                  >
                    Portable &amp; Travel (1)
                  </button>
                  <button
                    onClick={() => setSelectedCategory('commercial')}
                    className={`${styles.filterTab} ${selectedCategory === 'commercial' ? styles.filterTabActive : ''}`}
                  >
                    Commercial &amp; Fleet (1)
                  </button>
                </div>

                {/* Sub-Filters / Results info */}
                <div className={styles.secondaryFilters}>
                  <div className={styles.resultCount}>
                    Showing <strong>{filteredChargers.length}</strong> of {ALL_CHARGERS.length} chargers
                  </div>

                  <div className={styles.phasePills}>
                    <span className={styles.phasePillsLabel}>Phase:</span>
                    <button
                      onClick={() => setSelectedPhase('all')}
                      className={`${styles.phasePill} ${selectedPhase === 'all' ? styles.phasePillActive : ''}`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedPhase('single')}
                      className={`${styles.phasePill} ${selectedPhase === 'single' ? styles.phasePillActive : ''}`}
                    >
                      Single Phase (7kW)
                    </button>
                    <button
                      onClick={() => setSelectedPhase('three')}
                      className={`${styles.phasePill} ${selectedPhase === 'three' ? styles.phasePillActive : ''}`}
                    >
                      Three Phase (22kW)
                    </button>
                  </div>
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* 2. CHARGERS GRID */}
      <section className={styles.archiveSection}>
        <div className="container">
          {filteredChargers.length === 0 ? (
            <div className={styles.noResults}>
              <h3 className={styles.noResultsTitle}>No chargers found matching your filter</h3>
              <p className={styles.noResultsText}>Try adjusting your search terms or clearing the selected filters.</p>
              <button onClick={resetFilters} className={styles.resetBtn}>
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={styles.chargersGrid}>
              {filteredChargers.map((charger) => (
                <div key={charger.id} className={styles.chargerCard}>
                  {/* Card Visual & Badges */}
                  <div className={styles.cardImageWrap}>
                    <div className={styles.cardBadges}>
                      <span className={styles.categoryBadge}>{charger.categoryLabel}</span>
                      {charger.badge && (
                        <span className={styles.highlightBadge}>{charger.badge}</span>
                      )}
                    </div>

                    <span className={styles.powerPill}>{charger.power}</span>

                    <img
                      src={charger.image}
                      alt={charger.name}
                      className={styles.cardImg}
                    />
                  </div>

                  {/* Card Body */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{charger.name}</h3>
                    <p className={styles.cardTagline}>{charger.tagline}</p>
                    <p className={styles.cardDesc}>{charger.description}</p>

                    {/* Features list */}
                    <div className={styles.featuresList}>
                      {charger.features.map((feat, idx) => (
                        <div key={idx} className={styles.featureItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Specs Grid */}
                    <div className={styles.specsMiniGrid}>
                      <div className={styles.specsMiniItem}>
                        <span className={styles.specsMiniLabel}>Max Output</span>
                        <span className={styles.specsMiniValue}>{charger.specs.maxPower}</span>
                      </div>
                      <div className={styles.specsMiniItem}>
                        <span className={styles.specsMiniLabel}>Phase</span>
                        <span className={styles.specsMiniValue}>
                          {charger.phase === 'both' ? 'Single / 3-Phase' : charger.phase === 'three' ? 'Three-Phase' : 'Single Phase'}
                        </span>
                      </div>
                      <div className={styles.specsMiniItem}>
                        <span className={styles.specsMiniLabel}>Ingress</span>
                        <span className={styles.specsMiniValue}>{charger.specs.rating}</span>
                      </div>
                      <div className={styles.specsMiniItem}>
                        <span className={styles.specsMiniLabel}>Warranty</span>
                        <span className={styles.specsMiniValue}>{charger.specs.warranty}</span>
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className={styles.cardFooter}>
                      <div className={styles.priceBlock}>
                        <div>
                          <span className={styles.priceLabel}>Price</span>
                          <div className={styles.priceValue}>
                            {charger.priceFrom}<span>AUD</span>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.78rem', color: '#71717a', textAlign: 'right' }}>
                          {charger.priceSub}
                        </span>
                      </div>

                      <div className={styles.cardActions}>
                        <Link href={charger.href} className={styles.btnPrimary}>
                          <span>Explore Model</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                        <Link href="/quote" className={styles.btnSecondary}>
                          <span>Get Quote</span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. SIDE-BY-SIDE SPECIFICATION COMPARISON MATRIX */}
      <section className={styles.compareSection} id="compare">
        <div className="container">
          <div className={styles.compareHeader}>
            <span className={styles.compareEyebrow}>QUICK REFERENCE</span>
            <h2 className={styles.compareTitle}>Compare Chargers Side-by-Side</h2>
            <p className={styles.compareSub}>
              Review key electrical specifications, mounting compatibility, and starting rates across the official BexaVolt catalogue.
            </p>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Category</th>
                  <th>Max Power</th>
                  <th>Phase Support</th>
                  <th>Solar Ready</th>
                  <th>Ingress Rating</th>
                  <th>Starting Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ALL_CHARGERS.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.modelNameCell}>{item.name}</td>
                    <td>{item.categoryLabel}</td>
                    <td><strong style={{ color: '#fff' }}>{item.power}</strong></td>
                    <td>{item.phaseLabel}</td>
                    <td>
                      {item.solarReady ? (
                        <span style={{ color: '#A3E635', fontWeight: 700 }}>✓ Yes</span>
                      ) : (
                        <span style={{ color: '#71717a' }}>—</span>
                      )}
                    </td>
                    <td>{item.specs.rating}</td>
                    <td><strong style={{ color: '#A3E635' }}>{item.priceFrom} AUD</strong></td>
                    <td>
                      <Link href={item.href} className={styles.tableLink}>
                        View Model →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. VALUE PILLARS */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>2-Year Full Warranty</h4>
              <p>Every charger comes backed by our comprehensive Australian replacement and repair warranty.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4>CEC Licensed Installers</h4>
              <p>Nationwide installation network with fully qualified, insured electricians experienced in EV charging.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              </div>
              <h4>Solar Optimization</h4>
              <p>Smart models seamlessly divert excess solar energy directly to your car to minimise grid power use.</p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h4>Direct Australian Support</h4>
              <p>Call our Sydney-based helpline on 02 7241 5565 for technical assistance, advice, and direct orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SALES CALL BANNER */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="sales-call-banner">
          <span>Need help choosing the right charger for your vehicle and home?</span>
          <a href="tel:0272415565" title="Call Sales: 02 7241 5565">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>CALL SALES: <strong>02 7241 5565</strong></span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
