import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
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
                <span className={styles.infoLabel}>SALES & SUPPORT HOTLINE</span>
                <a href="tel:0272415565" className={styles.infoValueSales}>
                  <strong>02 7241 5565</strong>
                </a>
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
            
            <div className={styles.carImageWrap}>
              <img src="/img23-removebg-preview.png" alt="EV Charging" className={styles.carImage} />
            </div>
          </div>

          {/* Right Panel */}
          <div className={styles.rightPanel}>
            <h2 className={styles.formTitle}>Send us an enquiry</h2>
            <p className={styles.formSubtitle}>Complete the form and our team will be in touch.</p>
            
            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>First name <span className={styles.required}>*</span></label>
                  <input type="text" placeholder="First name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Last name <span className={styles.required}>*</span></label>
                  <input type="text" placeholder="Last name" required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Email <span className={styles.required}>*</span></label>
                <input type="email" placeholder="Email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label>Phone <span className={styles.required}>*</span></label>
                <input type="tel" placeholder="Phone" required />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Type of enquiry <span className={styles.required}>*</span></label>
                  <select required>
                    <option value="" disabled selected>Please select</option>
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
                  <select required>
                    <option value="" disabled selected>Please select</option>
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
                <textarea placeholder="Enter your message here..." rows={5}></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>Send enquiry</button>
            </form>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
