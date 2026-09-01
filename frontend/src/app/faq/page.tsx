import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function FAQPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>A beginner's guide to home EV chargers.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>Choosing the Right EV Charger</h2>
          <p className={styles.intro}>Choosing an EV charger depends on your vehicle, your home's electrical capacity and how you plan to charge. Here are the key factors to consider.</p>
          
          <div className={styles.faqItem}>
            <h3>1. What charging speed do I need?</h3>
            <p>Most EVs are charged at home overnight, often for around eight hours. This means the fastest charger is not always necessary—the longer your vehicle remains parked, the less charging power you may need.</p>
            <p>As a general guide:</p>
            <ul>
              <li>A 7 kW charger can add approximately 40 km of driving range per hour.</li>
              <li>A 22 kW charger can add up to approximately 120 km of driving range per hour.</li>
            </ul>
            <p>Actual charging speeds will depend on your vehicle's onboard charging capacity, your property's electrical supply and other installation factors.</p>
            <div className={styles.infoBox}>
              <strong>Note:</strong> Single-phase charging delivers up to 7 kW and is ideal for homes with a single-phase power supply or a single-phase solar PV system. Three-phase charging delivers up to 22 kW and is ideal for homes with a three-phase power supply or three-phase solar PV system. Vehicles limited to 11 kW will charge at a maximum rate of 11 kW.
            </div>
          </div>

          <div className={styles.faqItem}>
            <h3>2. Which charging plug does my vehicle use?</h3>
            <p>Most modern EVs have ports for both AC (alternating current) and DC (direct current) charging.</p>
            <p>Home charging is generally completed through the vehicle's AC port. DC fast chargers require significantly more power and specialised infrastructure, making them better suited to commercial and public charging locations.</p>
            <p>Before selecting a charger, confirm that it is compatible with your vehicle's connection type and maximum AC charging capacity.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>3. Who can install my EV charger?</h3>
            <p>An EV charging station must be installed by a qualified and licensed electrician. Choose an electrician with EV charger installation experience who will follow the manufacturer's instructions and all relevant electrical requirements.</p>
            <p>Correct cable sizing and circuit protection are essential for the charger's safety, reliability and performance.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>4. How much will installation cost?</h3>
            <p>Installation costs depend on your property and the location of the charger. Important considerations include:</p>
            <ul>
              <li>The distance between the parking area and the switchboard</li>
              <li>The available capacity of your electrical system</li>
              <li>Whether trenching or other groundwork is required</li>
              <li>Whether the charger will be wall-mounted or installed on a pedestal</li>
              <li>Whether switchboard upgrades or additional electrical work are needed</li>
            </ul>
            <p>BexaVolt recommends choosing a convenient everyday charging location and an installation designed to support your future EV charging needs.</p>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
