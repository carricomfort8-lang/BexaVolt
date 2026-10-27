import Link from 'next/link';
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
            <Link href="/quote" className={`btn-primary ${styles.ctaBtn}`}>
              {data?.primaryCTA}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#chargers" className={`btn-secondary ${styles.exploreBtn}`}>
              {data?.secondaryCTA}
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={5}>
          <div className={styles.heroPhoneNotice}>
            <span>Need expert guidance?</span>
            <a href="tel:0272415565" className={styles.heroPhoneLink} title="Call Sales: 02 7241 5565">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call Sales: <strong>02 7241 5565</strong></span>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Hero;
