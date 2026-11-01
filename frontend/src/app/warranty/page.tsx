import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export const metadata = {
  title: 'AC EV Charger Warranty Terms — BexaVolt | Two-Year Limited Warranty',
  description: 'Official two-year limited warranty terms for BexaVolt consumer and commercial AC EV chargers across Australia.',
};

export default function WarrantyPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgGlow} />
        <div className="container">
          <div className={styles.heroContent}>
            <AnimateIn direction="up" delay={1}>
              <span className={styles.heroEyebrow}>BEXAVOLT OFFICIAL POLICY</span>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <h1 className={styles.heroTitle}>
                AC EV Charger <span className={styles.titleHighlight}>Warranty Terms</span>
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <p className={styles.heroTagline}>
                Two-year limited warranty | Consumer and commercial AC chargepoints
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={4}>
              <div className={styles.heroActions}>
                <a
                  href="/BexaVolt-AC-EV-Charger-Warranty.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadBtn}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download Official Warranty PDF</span>
                </a>
                <a href="#clauses" className={styles.secondaryBtn}>
                  <span>Read Warranty Terms Below</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 2. QUICK REFERENCE OVERVIEW (From PDF Table) */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <span className={styles.overviewBadge}>WARRANTY PERIOD</span>
              <h3 className={styles.overviewTitle}>2 Years</h3>
              <p className={styles.overviewDesc}>
                From the documented installation date (or purchase date if installation date cannot be verified).
              </p>
            </div>

            <div className={styles.overviewCard}>
              <span className={styles.overviewBadge}>WHAT IS COVERED</span>
              <h3 className={styles.overviewTitle}>Defects Coverage</h3>
              <p className={styles.overviewDesc}>
                Defects in materials or workmanship under normal, intended use in accordance with product instructions.
              </p>
            </div>

            <div className={styles.overviewCard}>
              <span className={styles.overviewBadge}>CLAIM ROUTE</span>
              <h3 className={styles.overviewTitle}>Authorised Sales</h3>
              <p className={styles.overviewDesc}>
                Contact your supplying BexaVolt distributor or authorised sales representative with proof of purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL DOCUMENT CLAUSES */}
      <section className={styles.documentSection} id="clauses">
        <div className="container">
          <div className={styles.documentWrap}>
            <div className={styles.documentHeaderBar}>
              <div>
                <span className={styles.docScope}>Document Scope: BexaVolt AC EV Chargers</span>
                <p style={{ margin: '0.25rem 0 0', color: '#fff', fontWeight: 600, fontSize: '1rem' }}>
                  Charging with Confidence — Consumer & Commercial AC Chargepoints
                </p>
              </div>
              <div className={styles.docVersion}>
                <span>Coverage: Australia-wide (AS/NZS Standards)</span>
              </div>
            </div>

            {/* Section 1 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>1</span>
                <span>Warranty commitment</span>
              </h2>
              <p className={styles.paragraph}>
                BexaVolt warrants that an eligible AC EV charger will be free from defects in materials and workmanship for two (2) years from its documented installation date, provided that it is installed, commissioned, operated and maintained in accordance with the product instructions and these Warranty Terms.
              </p>
              <p className={styles.paragraph}>
                This warranty supports the expected minimum operational life of the charger during the Warranty Period. It does not guarantee uninterrupted operation or cover ordinary performance changes caused by normal use, site conditions or external systems.
              </p>
            </div>

            {/* Section 2 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>2</span>
                <span>Eligibility and start date</span>
              </h2>
              <p className={styles.paragraph}>
                Coverage applies only where all of the following conditions are met:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  the charger is a genuine BexaVolt AC EV charger with a legible product label or serial/chargepoint ID;
                </li>
                <li className={styles.bulletItem}>
                  the charger was installed by a suitably qualified installer in accordance with applicable laws, electrical codes and BexaVolt instructions;
                </li>
                <li className={styles.bulletItem}>
                  installation occurred no later than six (6) months after the manufacturing date; and
                </li>
                <li className={styles.bulletItem}>
                  the claimant can provide dated proof of installation or purchase.
                </li>
              </ul>
              <div className={styles.calloutBox}>
                If the installation date cannot be verified, BexaVolt may use the purchase date or manufacturing date to determine eligibility, subject to available records and applicable law.
              </div>
            </div>

            {/* Section 3 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>3</span>
                <span>What the warranty covers</span>
              </h2>
              <p className={styles.paragraph}>
                For a valid claim, BexaVolt will provide reasonable remote technical support and, where BexaVolt determines it is necessary, repair or replace the defective charger or affected component. Covered repair or replacement parts and the labour directly performed or authorised by BexaVolt will be provided without charge.
              </p>
              <p className={styles.paragraph}>
                On-site assistance may be provided when approved in advance by BexaVolt and reasonably available for the installation location. The remedy will be selected by BexaVolt after diagnosis, taking account of safety, availability and proportionality. Replacement products or parts may be new or functionally equivalent.
              </p>
            </div>

            {/* Section 4 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>4</span>
                <span>Costs not included</span>
              </h2>
              <p className={styles.paragraph}>
                Unless BexaVolt agrees otherwise in writing or applicable law requires otherwise, the customer is responsible for costs associated with removal, packaging, transport or return of the charger, site access, re-installation, recommissioning, and work performed by a third party without BexaVolt's prior written authorisation.
              </p>
            </div>

            {/* Section 5 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>5</span>
                <span>How to make a claim</span>
              </h2>
              <p className={styles.paragraph}>
                Contact the BexaVolt distributor or authorised sales representative identified on the purchase or installation documents. Submit the claim promptly after discovering the issue and provide:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  the chargepoint ID, serial number, or a clear photograph of the product label;
                </li>
                <li className={styles.bulletItem}>
                  a clear description of the fault, including relevant error messages, photographs or video where available;
                </li>
                <li className={styles.bulletItem}>
                  the name of the distributor or seller;
                </li>
                <li className={styles.bulletItem}>
                  the installation invoice or other dated proof of installation or purchase; and
                </li>
                <li className={styles.bulletItem}>
                  any additional diagnostic information reasonably requested to assess the claim.
                </li>
              </ul>
              <div className={styles.warningBox}>
                <strong>Important Notice:</strong> Do not remove, open, modify or return the charger unless instructed to do so. BexaVolt may require remote diagnostics, safe isolation, inspection, or return of the affected product before confirming coverage. A claim is accepted only after BexaVolt verifies that these Warranty Terms apply.
              </div>
            </div>

            {/* Section 6 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>6</span>
                <span>Exclusions</span>
              </h2>
              <p className={styles.paragraph}>
                This warranty does not cover damage, failure, loss or reduced performance caused by:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  shipping, handling or storage after delivery, unless responsibility has been accepted in writing by BexaVolt;
                </li>
                <li className={styles.bulletItem}>
                  fire, flood, earthquake, lightning, severe weather, environmental contamination, vandalism or other events beyond BexaVolt's reasonable control;
                </li>
                <li className={styles.bulletItem}>
                  incorrect, negligent or unauthorised installation, commissioning, operation, maintenance, removal, repair or modification;
                </li>
                <li className={styles.bulletItem}>
                  installation or use in a harsh, corrosive, hazardous or otherwise unsuitable environment contrary to the product specifications;
                </li>
                <li className={styles.bulletItem}>
                  electrical surge, outage, unstable supply, incorrect voltage, inadequate earthing, grid disturbance or connection to incompatible equipment;
                </li>
                <li className={styles.bulletItem}>
                  accident, misuse, abuse, impact, neglect, normal wear and tear, cosmetic damage that does not affect function, or failure to follow product instructions;
                </li>
                <li className={styles.bulletItem}>
                  software, networks, vehicles, cables, accessories, electrical infrastructure or other third-party products not supplied as part of the covered BexaVolt charger; or
                </li>
                <li className={styles.bulletItem}>
                  a missing, altered or illegible serial number, rating label or other product identification.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>7</span>
                <span>Repair, replacement and continuing coverage</span>
              </h2>
              <p className={styles.paragraph}>
                A repair or replacement does not restart or extend the original Warranty Period unless required by applicable law. The repaired or replacement item remains covered for the unexpired portion of the original Warranty Period. Any replaced item becomes BexaVolt's property where permitted by law and must be returned if requested.
              </p>
            </div>

            {/* Section 8 */}
            <div className={styles.clauseSection}>
              <h2 className={styles.clauseHeading}>
                <span className={styles.clauseNum}>8</span>
                <span>Limitations and statutory rights</span>
              </h2>
              <p className={styles.paragraph}>
                To the maximum extent permitted by applicable law, this limited warranty provides the remedies described above and does not cover indirect, incidental or consequential loss, including loss of use, revenue, profit or charging availability. Nothing in these Warranty Terms excludes, restricts or modifies any right or remedy that cannot lawfully be excluded, restricted or modified. Consumers may have additional statutory rights under local law.
              </p>
            </div>

            {/* Warranty Support Card */}
            <div className={styles.supportCard}>
              <h4>Warranty Support &amp; Claim Enquiries</h4>
              <p>
                Use the BexaVolt distributor or authorised sales representative shown on your purchase or installation documents. Include the information listed in Section 5 to avoid delays. Keep these Warranty Terms together with your purchase record, installation invoice and product documentation.
              </p>
              <div className={styles.supportMetaGrid}>
                <div className={styles.supportMetaItem}>
                  <strong>SALES &amp; SUPPORT HOTLINE</strong>
                  <a href="tel:0272415565">02 7241 5565</a>
                </div>
                <div className={styles.supportMetaItem}>
                  <strong>TECHNICAL SUPPORT</strong>
                  <a href="mailto:Support@BexaVolt.com.au">Support@BexaVolt.com.au</a>
                </div>
                <div className={styles.supportMetaItem}>
                  <strong>SALES ENQUIRIES</strong>
                  <a href="mailto:Sales@BexaVolt.com.au">Sales@BexaVolt.com.au</a>
                </div>
                <div className={styles.supportMetaItem}>
                  <strong>OFFICIAL DOCUMENT</strong>
                  <a href="/BexaVolt-AC-EV-Charger-Warranty.pdf" target="_blank" rel="noopener noreferrer">
                    Download PDF Document ↗
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SALES CALL BANNER */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="sales-call-banner">
          <span>Need help with a warranty claim or questions?</span>
          <a href="tel:0272415565" title="Call Sales & Support: 02 7241 5565">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>CALL SALES &amp; SUPPORT: <strong>02 7241 5565</strong></span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
