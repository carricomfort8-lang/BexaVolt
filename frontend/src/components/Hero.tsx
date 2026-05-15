import styles from './Hero.module.css';
import AnimateIn from './AnimateIn';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  }
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className={styles.hero} id="home">
      {/* Full-bleed background image */}
      <div className={styles.bg} aria-hidden />

      {/* Dark gradient overlay so text is readable */}
      <div className={styles.overlay} aria-hidden />


      {/* Content sits on top */}
      <div className={styles.content}>
        <AnimateIn direction="up" delay={1}>
          <p className={styles.subheading}>
            <span className={styles.subLine} />
            {data?.subtitle}
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={2}>
          <h1 className={styles.title}>
            THE FUTURE <br />
            OF EV CHARGING <br />
            <span className={styles.highlight}>STARTS AT HOME.</span>
          </h1>
        </AnimateIn>

        <AnimateIn direction="up" delay={3}>
          <p className={styles.description}>{data?.description}</p>
        </AnimateIn>

        <AnimateIn direction="up" delay={4}>
          <div className={styles.actions}>
            <button className={`btn-primary ${styles.ctaBtn}`}>
              {data?.primaryCTA}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`btn-secondary ${styles.exploreBtn}`}>
              {data?.secondaryCTA}
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Hero;
