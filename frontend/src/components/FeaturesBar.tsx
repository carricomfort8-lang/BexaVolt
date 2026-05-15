import AnimateIn from './AnimateIn';
import styles from './FeaturesBar.module.css';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesBarProps {
  data: Feature[];
}

const icons: Record<string, JSX.Element> = {
  'SAVE MORE': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  'CLEAN ENERGY': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10z"/>
      <path d="M13 20v-2"/><path d="M7 15l-1 1"/>
    </svg>
  ),
  'SAFE & RELIABLE': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  'ADD VALUE': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
};

const FeaturesBar = ({ data }: FeaturesBarProps) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.bar} glass`}>
          {data?.map((feature, index) => (
            <AnimateIn key={index} direction="up" delay={(index + 1) as 1|2|3|4} threshold={0.05}>
              <div className={styles.item}>
                <div className={styles.iconWrapper}>
                  {icons[feature.title] ?? icons['SAVE MORE']}
                </div>
                <div className={styles.textContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
