"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";


const CAR_BRANDS = ["Alfa Romeo", "Audi", "BMW", "BYD", "Cadillac", "Chery", "Cupra", "Deepal", "Denza", "Farizon", "Fiat", "Firefly", "Ford", "GAC", "Geely", "Genesis", "GWM Great Wall Motors", "Holden", "Honda", "Hyundai", "Jaecoo", "Jaguar", "Jeep", "KIA", "KGM", "LDV", "Leapmotor", "Lexus", "Lotus", "Mazda", "Mercedes", "MG", "Mini Cooper", "Mitsubishi", "Nissan", "Peugeot", "Polestar", "Porsche", "Range Rover", "Renault", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo", "XPeng", "Zeekr"];

function SearchableSelect({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  
  const filtered = CAR_BRANDS.filter(b => b.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.searchableSelect} onClick={() => setIsOpen(true)}>
      <div className={styles.selectTrigger}>
        {value || "Select EV Brand"}
        <span className={styles.selectArrow}>▼</span>
      </div>
      
      {isOpen && (
        <div className={styles.selectDropdown}>
          <div className={styles.selectSearchWrap}>
            <input 
              type="text" 
              autoFocus 
              placeholder="Search brand..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.selectSearch}
              onClick={e => e.stopPropagation()}
            />
          </div>
          <div className={styles.selectOptions}>
            {filtered.map(b => (
              <div 
                key={b} 
                className={styles.selectOption}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(b);
                  setIsOpen(false);
                  setSearch("");
                }}
              >
                {b}
              </div>
            ))}
            {filtered.length === 0 && <div className={styles.noResults}>No brands found</div>}
          </div>
          
          <div className={styles.closeBackdrop} onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} />
        </div>
      )}
    </div>
  );
}

function QuoteWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stepParam = searchParams.get("step");
  const step = stepParam ? parseInt(stepParam, 10) : 1;
  const [brand, setBrand] = useState("");
  const [charger, setCharger] = useState("pulse");
  const [power, setPower] = useState("7kw");
  const [installer, setInstaller] = useState("bexavolt");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "NSW",
    installTime: "As soon as possible",
    callTime: "Early / mid-morning",
    updates: false,
    policy: false,
  });

  // Basic pricing logic for demonstration
  const basePrice = charger === "ultra" ? 1570 : 1070;
  const installPrice = installer === "bexavolt" ? 500 : 0;
  const estimate = basePrice + installPrice;

  const handleNext = () => router.push(`?step=${step + 1}`);
  const handlePrev = () => router.push(`?step=${step - 1}`);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brand, charger, power, installer, ...formData, estimate }),
      });

      if (response.ok) {
        alert("Thank you! Your quote request has been submitted.");
      } else {
        alert("There was a problem submitting your request. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error connecting to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.quotePage}>
      <Navbar />
      
      <div className={styles.container}>
        {/* Stepper */}
        <div className={styles.stepper}>
          <div className={`${styles.step} ${step >= 1 ? styles.stepActive : ""} ${step > 1 ? styles.stepCompleted : ""}`}>
            <div className={styles.stepIcon}>{step > 1 ? "✓" : "1"}</div>
            <span>Your Charger</span>
          </div>
          <div className={styles.stepDivider} />
          <div className={`${styles.step} ${step >= 2 ? styles.stepActive : ""} ${step > 2 ? styles.stepCompleted : ""}`}>
            <div className={styles.stepIcon}>{step > 2 ? "✓" : "2"}</div>
            <span>Installation Details</span>
          </div>
          <div className={styles.stepDivider} />
          <div className={`${styles.step} ${step >= 3 ? styles.stepActive : ""} ${step > 3 ? styles.stepCompleted : ""}`}>
            <div className={styles.stepIcon}>3</div>
            <span>Estimate</span>
          </div>
        </div>

        {/* Step 1: Guide */}
        {step === 1 && (
          <div>
            <div className={styles.guideContent}>
              <h2>Get an EV Charger and Installation Quote</h2>
              <p>Get a clear estimate for your home EV charger installation with BexaVolt’s quick and easy online estimator. Whether you need a high-quality standard charging station or an advanced optimised solution, our nationwide service makes EV charging accessible to homes across Australia.</p>
              <p>Simply complete the form and submit your details. Our team will review your requirements and confirm your installation price within 48 hours.</p>

              <h3>A beginner’s guide to home EV chargers.</h3>
              
              <p><strong>Choosing the Right EV Charger</strong><br/>
              Choosing an EV charger depends on your vehicle, your home’s electrical capacity and how you plan to charge.</p>

              <p><strong>1. What charging speed do I need?</strong><br/>
              Most EVs are charged at home overnight. As a general guide:</p>
              <ul>
                <li>A 7 kW charger can add approximately 40 km of driving range per hour.</li>
                <li>A 22 kW charger can add up to approximately 120 km of driving range per hour.</li>
              </ul>

              <p><strong>2. Which charging plug does my vehicle use?</strong><br/>
              Modern EVs have ports for both AC and DC charging. Before selecting a charger, confirm it is compatible with your vehicle’s connection type.</p>

              <p><strong>3. Who can install my EV charger?</strong><br/>
              An EV charging station must be installed by a qualified and licensed electrician with EV charger installation experience.</p>

              <p><strong>4. How much will installation cost?</strong><br/>
              Installation costs depend on your property. Important considerations include:</p>
              <ul>
                <li>The distance between the parking area and the switchboard</li>
                <li>The available capacity of your electrical system</li>
                <li>Whether trenching or other groundwork is required</li>
                <li>Whether the charger will be wall-mounted or installed on a pedestal</li>
              </ul>
            </div>
            
            <div className={styles.actionButtons}>
              <button onClick={handleNext} className={styles.btnPrimary}>Start Quote</button>
            </div>
          </div>
        )}

        {/* Step 2: Configuration */}
        {step === 2 && (
          <div>
            <div className={styles.configLayout}>
              <div>
                <div className={styles.configSection}>
                  <h3>Select Car Brand <span className={styles.required}>*</span></h3>
                  <div className={styles.selectWrapper}>
                    <SearchableSelect value={brand} onChange={setBrand} />
                  </div>
                </div>

                <div className={styles.configSection}>
                  <h3>Select Model <span className={styles.required}>*</span></h3>
                  <div className={styles.cardsGrid}>
                    {/* Ultra */}
                    <div 
                      className={`${styles.chargerCard} ${charger === "ultra" ? styles.chargerCardActive : ""}`}
                      onClick={() => setCharger("ultra")}
                    >
                      <h4>Volt Ultra</h4>
                      <p>The pinnacle of home charging.</p>
                      <ul className={styles.featureList}>
                        <li><span className={styles.featureIcon}>✓</span> Up to 22kW charging</li>
                        <li><span className={styles.featureIcon}>✓</span> 4.3" touchscreen</li>
                      </ul>
                    </div>
                    {/* Pulse */}
                    <div 
                      className={`${styles.chargerCard} ${charger === "pulse" ? styles.chargerCardActive : ""}`}
                      onClick={() => setCharger("pulse")}
                    >
                      <h4>Volt Pulse</h4>
                      <p>Power at full speed.</p>
                      <ul className={styles.featureList}>
                        <li><span className={styles.featureIcon}>✓</span> Up to 7.4kW charging</li>
                        <li><span className={styles.featureIcon}>✓</span> Dynamic load balancing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.configSection}>
                  <h3>Select Power Rating <span className={styles.required}>*</span></h3>
                  <div className={styles.cardsGrid}>
                    <div 
                      className={`${styles.optionCard} ${power === "7kw" ? styles.optionCardActive : ""}`}
                      onClick={() => setPower("7kw")}
                    >
                      <h4>7kW Single Phase</h4>
                      <p>Ideal for homes with a single-phase power supply.</p>
                    </div>
                    <div 
                      className={`${styles.optionCard} ${power === "22kw" ? styles.optionCardActive : ""}`}
                      onClick={() => setPower("22kw")}
                    >
                      <h4>22kW Three Phase</h4>
                      <p>Ideal for homes with a three-phase power supply.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.configSection}>
                  <h3>Do you need an installer? <span className={styles.required}>*</span></h3>
                  <div className={styles.cardsGrid}>
                    <div 
                      className={`${styles.optionCard} ${installer === "own" ? styles.optionCardActive : ""}`}
                      onClick={() => setInstaller("own")}
                    >
                      <h4>I have my own licensed electrician</h4>
                    </div>
                    <div 
                      className={`${styles.optionCard} ${installer === "bexavolt" ? styles.optionCardActive : ""}`}
                      onClick={() => setInstaller("bexavolt")}
                    >
                      <h4>I\'d like BexaVolt to arrange an installer</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.previewImageWrap}>
                <img src="/img23-removebg-preview.png" alt="Charger Preview" className={styles.previewImage} />
              </div>
            </div>
            
            <div className={`${styles.actionButtons} ${styles.spaceBetween}`}>
              <button onClick={handlePrev} className={styles.btnSecondary}>Previous</button>
              <button onClick={handleNext} className={styles.btnPrimary}>Next Step</button>
            </div>
          </div>
        )}

        {/* Step 3: Estimate & Contact */}
        {step === 3 && (
          <div>
            <div className={styles.guideContent}>
              <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Get your customised quote</h2>
              <p style={{ textAlign: "center", marginBottom: "3rem" }}>Provide your contact details and we\'ll confirm your charging requirements and prepare a personalised quote for your EV charger and installation.</p>
              
              <form onSubmit={handleSubmit} id="quote-form">
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>First name *</label>
                    <input 
                      type="text" 
                      className={styles.input} 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last name *</label>
                    <input 
                      type="text" 
                      className={styles.input} 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email *</label>
                    <input 
                      type="email" 
                      className={styles.input} 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone *</label>
                    <input 
                      type="tel" 
                      className={styles.input} 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>State or territory *</label>
                    <select 
                      className={styles.select}
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                    >
                      <option>NSW</option>
                      <option>QLD</option>
                      <option>ACT</option>
                      <option>VIC</option>
                      <option>TAS</option>
                      <option>NT</option>
                      <option>WA</option>
                      <option>SA</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>When would you like your charger installed? *</label>
                    <select 
                      className={styles.select}
                      value={formData.installTime}
                      onChange={(e) => setFormData({...formData, installTime: e.target.value})}
                    >
                      <option>As soon as possible</option>
                      <option>Within 1 week</option>
                      <option>Within 2-3 weeks</option>
                      <option>Within 1-2 months</option>
                      <option>I\'m flexible / No rush</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup} style={{ gridColumn: "1 / -1" }}>
                    <label>When would you like us to call you? *</label>
                    <select 
                      className={styles.select}
                      value={formData.callTime}
                      onChange={(e) => setFormData({...formData, callTime: e.target.value})}
                    >
                      <option>Early / Mid Morning</option>
                      <option>Lunch</option>
                      <option>Afternoon</option>
                    </select>
                  </div>
                </div>

                <div className={styles.checkboxGroup}>
                  <input 
                    type="checkbox" 
                    id="updates"
                    checked={formData.updates}
                    onChange={(e) => setFormData({...formData, updates: e.target.checked})}
                  />
                  <label htmlFor="updates">I\'d like to receive occasional BexaVolt product and service updates.</label>
                </div>

                <div className={styles.checkboxGroup}>
                  <input 
                    type="checkbox" 
                    id="policy" 
                    required
                    checked={formData.policy}
                    onChange={(e) => setFormData({...formData, policy: e.target.checked})}
                  />
                  <label htmlFor="policy">I have read and agree to BexaVolt\'s <Link href="#">Privacy Policy</Link>.</label>
                </div>

                <div className={`${styles.actionButtons} ${styles.spaceBetween}`}>
                  <button type="button" onClick={handlePrev} className={styles.btnSecondary}>Previous</button>
                  <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Submit quote request"}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Floating Estimate Banner for Step 2 and 3 */}
      {(step === 2 || step === 3) && (
        <div className={styles.estimateBanner}>
          <div className={styles.estimatePrice}>
            <span className={styles.estimateLabel}>Estimated Price</span>
            <span className={styles.estimateValue}>${estimate.toLocaleString()}</span>
          </div>
          <button className={styles.btnPrimary} onClick={step === 2 ? handleNext : () => document.getElementById("quote-form")?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))} disabled={step === 3 && isSubmitting}>
            {step === 2 ? "Continue to Details" : isSubmitting ? "Sending..." : "Submit Quote"}
          </button>
        </div>
      )}
    </main>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteWizard />
    </Suspense>
  );
}

