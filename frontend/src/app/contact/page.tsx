import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.navWrapper}><Navbar /></div>
      
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
                <span className={styles.infoLabel}>Call our team</span>
                <span className={styles.infoValue}>+61 2 7241 5565</span>
              </div>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>🕒</div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Opening hours</span>
                <span className={styles.infoValueLight}>Monday–Sunday, 8am–6pm AEST</span>
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
