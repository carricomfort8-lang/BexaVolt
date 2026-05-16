import AnimateIn from './AnimateIn';
import styles from './ProductDetail.module.css';

const features = [
  'Smart App Control',
  '7x Faster Charging',
  'Weatherproof & Durable',
  'Universal Compatibility',
];

const smartFeatures = [
  { icon: '⏱', title: 'SCHEDULE', desc: 'Charge when electricity is cheaper.' },
  { icon: '📊', title: 'MONITOR', desc: 'Track energy usage in real-time.' },
  { icon: '✨', title: 'OPTIMISE', desc: 'Smarter charging for a better future.' },
];

const ProductDetail = () => {
  return (
    <section className={styles.section} id="chargers">
      <div className={styles.bgStripe} aria-hidden />
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.productInfo}>
            <AnimateIn direction="left" delay={1}>
              <p className={styles.label}>DESIGNED TO IMPRESS.</p>
            </AnimateIn>
            <AnimateIn direction="left" delay={2}>
              <h2 className={styles.title}>POWERFUL <br />BY DESIGN.</h2>
            </AnimateIn>
            <AnimateIn direction="left" delay={3}>
              <p className={styles.description}>
                Engineered with precision and innovation, BexaVolt chargers combine sleek
                aesthetics with industry-leading performance.
              </p>
            </AnimateIn>
            <AnimateIn direction="left" delay={4}>
              <ul className={styles.features}>
                {features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn direction="left" delay={5}>
              <button className={`btn-secondary ${styles.discoverBtn}`}>
                DISCOVER MORE
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </AnimateIn>
          </div>

          {/* Right: Charger image + App card */}
          <div className={styles.visuals}>
            <AnimateIn direction="scale" delay={2} className={styles.chargerWrap}>
              <div className={styles.chargerGlow} aria-hidden />
              <img
                src="/img23-removebg-preview.png"
                alt="BexaVolt Charger"
                className={styles.chargerImg}
              />
            </AnimateIn>

            <AnimateIn direction="right" delay={3} className={styles.appPreviewWrap}>
              <div className={`${styles.appCard} glass`}>
                <p className={styles.appHeader}>SMARTER CHARGING. TOTAL CONTROL.</p>
                <div className={styles.appCircle}>
                  <span className={styles.appValue}>7.4<small>kW</small></span>
                  <span className={styles.appLabel}>Charging Power</span>
                </div>
                <div className={styles.appStats}>
                  <div>
                    <p>Energy Delivered</p>
                    <strong>13.6<small>kWh</small></strong>
                  </div>
                  <div>
                    <p>Duration</p>
                    <strong>02:45:30</strong>
                  </div>
                </div>
                <div className={styles.smartList}>
                  {smartFeatures.map((sf, i) => (
                    <div key={i} className={styles.smartItem}>
                      <span className={styles.smartIcon}>{sf.icon}</span>
                      <div>
                        <strong>{sf.title}</strong>
                        <p>{sf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
