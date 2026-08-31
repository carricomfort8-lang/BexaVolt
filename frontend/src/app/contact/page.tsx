import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>We're here to help power your future. Reach out to the right team below.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contactGrid}>
          
          <div className={styles.contactCard}>
            <div className={styles.icon}>✉️</div>
            <h3>Sales Inquiries</h3>
            <p>For questions about our chargers, installation, or bulk orders.</p>
            <a href="mailto:Sales@BexaVolt.com.au" className={styles.link}>Sales@BexaVolt.com.au</a>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.icon}>🛠️</div>
            <h3>Support Inquiries</h3>
            <p>Need technical assistance or have questions about your existing charger?</p>
            <a href="mailto:Support@BexaVolt.com.au" className={styles.link}>Support@BexaVolt.com.au</a>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.icon}>ℹ️</div>
            <h3>General Info</h3>
            <p>For press, partnerships, and all other general inquiries.</p>
            <a href="mailto:Info@BexaVolt.com.au" className={styles.link}>Info@BexaVolt.com.au</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>🏢</div>
            <h3>Accounts</h3>
            <p>For billing, invoices, and account-related questions.</p>
            <a href="mailto:Accounts@BexaVolt.com.au" className={styles.link}>Accounts@BexaVolt.com.au</a>
          </div>

          <div className={styles.contactCard + " " + styles.fullWidth}>
            <div className={styles.icon}>📞</div>
            <h3>Call Us</h3>
            <p>Our Australian-based team is available Monday to Friday.</p>
            <a href="tel:+61272415565" className={styles.link}>+61 2 7241 5565</a>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
