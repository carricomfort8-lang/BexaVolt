import AnimateIn from './AnimateIn';
import styles from './InstallationProcess.module.css';

const steps = [
  {
    number: '01',
    title: 'GET A QUOTE',
    description: 'Tell us about your needs and we\'ll take care of the rest.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'SITE ASSESSMENT',
    description: 'We assess your home and recommend the best solution.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'PROFESSIONAL INSTALL',
    description: 'Our licensed electricians install your charger safely and neatly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    number: '04',
    title: 'START CHARGING',
    description: 'Plug in and enjoy smart, reliable charging at home.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    )
  }
];

const InstallationProcess = () => {
  return (
    <section className={styles.section} id="installation">
      <div className="container">
        <div className={styles.contentWrapper}>
          <AnimateIn direction="up" delay={1}>
            <p className={styles.label}>SIMPLE. FAST. HASSLE-FREE.</p>
            <h2 className={styles.title}>OUR INSTALLATION PROCESS</h2>
            <div className={styles.titleLine} />
          </AnimateIn>

          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <AnimateIn key={index} direction="up" delay={(index + 2) as 2|3|4|5}>
                <div className={styles.step}>
                  <div className={styles.stepTop}>
                    <div className={styles.iconBox}>{step.icon}</div>
                    <span className={styles.stepNumber}>{step.number}</span>
                    {index < steps.length - 1 && (
                      <div className={styles.connector} aria-hidden />
                    )}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;
