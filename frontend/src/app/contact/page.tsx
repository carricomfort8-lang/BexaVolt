'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiryType: '',
    state: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success !== false) {
        setSubmitted(true);
      } else {
        setErrorMsg(resData.error || 'Failed to send enquiry. Please try again or email sales@bexavolt.com.au.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMsg('Network error. Please try again or email sales@bexavolt.com.au directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      enquiryType: '',
      state: '',
      message: '',
    });
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.contactWrapper}>
        <div className={styles.contactContainer}>
          
          {/* Left Panel */}
          <div className={styles.leftPanel}>
            <div className={styles.logoWrap}>
              <img src="/logo.png" alt="BexaVolt Logo" className={styles.logo} />
            </div>
            
            <h1 className={styles.title}>Have a question?</h1>
            <p className={styles.description}>
              Talk to BexaVolt about EV chargers, installation, solar-optimised charging and accessories across Australia. 
            </p>
            <p className={styles.description}>
              Our experienced team is ready to help you choose the right charging solution.
            </p>
            
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>📞</div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>AUSTRALIAN-BASED CALL CENTRE</span>
                <a href="tel:0272415565" className={styles.infoValueSales} title="Call Australian Call Centre: 02 7241 5565">
                  <strong>02 7241 5565</strong>
                </a>
                <span className={styles.infoValueLight} style={{ display: 'block', fontSize: '0.85rem', color: '#a1a1aa', marginTop: '0.25rem' }}>
                  Australian-based call centre help available for orders, advice & technical support.
                </span>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>✉️</div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>EMAIL US DIRECTLY</span>
                <a href="mailto:sales@bexavolt.com.au" className={styles.infoValueSales} style={{ fontSize: '1.25rem', textDecoration: 'none' }}>
                  <strong>sales@bexavolt.com.au</strong>
                </a>
                <span className={styles.infoValueLight} style={{ display: 'block', fontSize: '0.85rem', color: '#a1a1aa', marginTop: '0.25rem' }}>
                  Direct sales & enquiry inbox.
                </span>
              </div>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>🕒</div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Opening hours</span>
                <span className={styles.infoValueLight}>Monday–Sunday, 8am–6pm AEST</span>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#A3E635">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>FACEBOOK</span>
                <a 
                  href="https://www.facebook.com/profile.php?id=61596113495310" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.infoValueSales}
                  style={{ fontSize: '1rem', textDecoration: 'none' }}
                >
                  Follow @BexaVolt
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>INSTAGRAM</span>
                <a 
                  href="https://www.instagram.com/bexavolt/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.infoValueSales}
                  style={{ fontSize: '1rem', textDecoration: 'none' }}
                >
                  @bexavolt
                </a>
              </div>
            </div>
            
            <div className={styles.carImageWrap}>
              <img src="/img23-removebg-preview.png" alt="EV Charging" className={styles.carImage} />
            </div>
          </div>

          {/* Right Panel */}
          <div className={styles.rightPanel}>
            <h2 className={styles.formTitle}>Send us an enquiry</h2>
            <p className={styles.formSubtitle}>Complete the form and our team will be in touch at the earliest.</p>
            
            {submitted ? (
              <div style={{
                padding: '2.5rem',
                backgroundColor: 'rgba(163, 230, 53, 0.1)',
                border: '1px solid #a3e635',
                borderRadius: '12px',
                textAlign: 'center',
                marginTop: '1.5rem'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#a3e635', fontSize: '1.5rem', marginBottom: '0.75rem' }}>Thank You!</h3>
                <p style={{ color: '#fff', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Your enquiry has been received. Our team will review your message and get in touch with you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className={styles.submitBtn}
                  style={{ maxWidth: '250px', margin: '0 auto', display: 'block' }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                {errorMsg && (
                  <div style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid #ef4444',
                    color: '#fca5a5',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    fontSize: '0.9rem'
                  }}>
                    {errorMsg}
                  </div>
                )}

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First name <span className={styles.required}>*</span></label>
                    <input 
                      type="text" 
                      placeholder="First name" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last name <span className={styles.required}>*</span></label>
                    <input 
                      type="text" 
                      placeholder="Last name" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Email <span className={styles.required}>*</span></label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Phone <span className={styles.required}>*</span></label>
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Type of enquiry <span className={styles.required}>*</span></label>
                    <select 
                      required
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    >
                      <option value="" disabled>Please select</option>
                      <option value="Home">Home</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Support">Support</option>
                      <option value="Portables & Cables">Portables & Cables</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Installation Partner">Installation Partner</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>State or territory <span className={styles.required}>*</span></label>
                    <select 
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    >
                      <option value="" disabled>Please select</option>
                      <option value="NSW">NSW</option>
                      <option value="VIC">VIC</option>
                      <option value="QLD">QLD</option>
                      <option value="WA">WA</option>
                      <option value="SA">SA</option>
                      <option value="NT">NT</option>
                      <option value="TAS">TAS</option>
                      <option value="ACT">ACT</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea 
                    placeholder="Enter your message here..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? 'Sending enquiry...' : 'Send enquiry'}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
