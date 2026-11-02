'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import styles from './page.module.css';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'NSW',
    role: 'Licensed EV Installation Electrician',
    experience: '',
    resumeLink: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      state: 'NSW',
      role: 'Licensed EV Installation Electrician',
      experience: '',
      resumeLink: '',
      notes: '',
    });
    setSubmitted(false);
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
              <span className={styles.heroEyebrow}>JOIN THE BEXAVOLT TEAM</span>
            </AnimateIn>

            <AnimateIn direction="up" delay={2}>
              <h1 className={styles.heroTitle}>
                Shape the Future of <span className={styles.titleHighlight}>EV Charging</span>
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={3}>
              <p className={styles.heroTagline}>
                We are building Australia's leading electric vehicle charging infrastructure. Join our team of licensed installers, support engineers, and energy champions.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 2. WHY WORK WITH BEXAVOLT */}
      <section className={styles.perksSection}>
        <div className="container">
          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h4>Booming Industry</h4>
              <p>Be at the forefront of Australia's massive electric mobility and renewable transition.</p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h4>Nationwide Network</h4>
              <p>Opportunities for licensed electricians and installers across NSW, VIC, QLD, WA, and SA.</p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Training &amp; Backing</h4>
              <p>Comprehensive manufacturer support, CEC installation guidelines, and dedicated technical assistance.</p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Great Culture</h4>
              <p>Collaborative, forward-thinking Australian team focused on customer experience and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION FORM */}
      <section id="apply" className={styles.formSection}>
        <div className="container">
          <div className={styles.formWrap}>
            <div className={styles.formHeader}>
              <h2>Expression of Interest</h2>
              <p>Tell us about yourself and the role you are interested in.</p>
            </div>

            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Application Received!</h3>
                <p>
                  Thank you for your interest in joining BexaVolt. Our recruitment team will review your application and be in touch within 2-3 business days.
                </p>
                <button onClick={handleReset} className={styles.resetBtn}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.careerForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith"
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>
                      Phone Number <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0400 000 000"
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      State / Territory <span className={styles.required}>*</span>
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className={styles.formSelect}
                    >
                      <option value="NSW">New South Wales (NSW)</option>
                      <option value="VIC">Victoria (VIC)</option>
                      <option value="QLD">Queensland (QLD)</option>
                      <option value="WA">Western Australia (WA)</option>
                      <option value="SA">South Australia (SA)</option>
                      <option value="TAS">Tasmania (TAS)</option>
                      <option value="ACT">Australian Capital Territory (ACT)</option>
                      <option value="NT">Northern Territory (NT)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    Role / Opportunity of Interest <span className={styles.required}>*</span>
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className={styles.formSelect}
                  >
                    <option value="Licensed EV Installation Electrician">Licensed EV Installation Electrician / Installer Partner</option>
                    <option value="Field Commissioning Technician">Field Service &amp; Commissioning Technician</option>
                    <option value="Technical Support Specialist">EV Charging Technical Support Specialist</option>
                    <option value="Sales & EV Solutions Consultant">Sales &amp; EV Solutions Advisory Consultant</option>
                    <option value="Operations & Logistics">Operations &amp; Warehouse Logistics</option>
                    <option value="General Expression of Interest">General Expression of Interest (Other)</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    Relevant Experience &amp; Electrical Licences <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Briefly describe your trade background, electrical licence number (if applicable), or relevant EV charging / renewable energy experience..."
                    className={styles.formTextarea}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>LinkedIn Profile / Resume Link (Optional)</label>
                  <input
                    type="url"
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                    placeholder="https://linkedin.com/in/... or Google Drive link"
                    className={styles.formInput}
                  />
                </div>

                <button type="submit" disabled={loading} className={styles.submitBtn}>
                  {loading ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Direct Contact Card */}
            <div className={styles.contactCard}>
              <div className={styles.contactCardLeft}>
                <h4>Direct Enquiries</h4>
                <p>Looking to partner with BexaVolt or have career queries?</p>
              </div>
              <div className={styles.contactLinks}>
                <a href="mailto:Careers@BexaVolt.com.au" className={styles.contactLink}>
                  Careers@BexaVolt.com.au ↗
                </a>
                <a href="tel:0272415565" className={styles.contactLink}>
                  Call: 02 7241 5565
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SALES & CAREERS CALL BANNER */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="sales-call-banner">
          <span>Interested in joining our licensed installer network? Call our team:</span>
          <a href="tel:0272415565" title="Call BexaVolt: 02 7241 5565">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>CALL HELPLINE: <strong>02 7241 5565</strong></span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
