"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

function FAQItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className={styles.faqAnswer}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>Everything you need to know about BexaVolt chargers.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>1. Compatibility & choosing</h2>

          <FAQItem question="Will a BexaVolt charger work with my electric vehicle?" answer={<>
            <p>Yes. BexaVolt chargers are compatible with most electric vehicles that use the appropriate AC charging connection.</p>
            <p>If your vehicle is imported, uncommon, or requires a Type 1 cable, contact BexaVolt before purchasing. We can confirm the connector requirements and recommend a suitable charging solution.</p>
          </>} />

          <FAQItem question="Will a BexaVolt charger be suitable for my home?" answer={<>
            <p>BexaVolt chargers suit most homes and can be installed in garages, carports, driveways and other appropriate indoor or outdoor locations.</p>
            <p>A licensed electrician must assess your switchboard, available electrical capacity, cable route and proposed charger position. Built-in overload protection can help manage limited capacity, but it does not replace a site assessment.</p>
          </>} />

          <FAQItem question="Where can the charger be installed?" answer={<>
            <p>A charger can be mounted on a suitable wall or on a dedicated post where a wall is unavailable. The best position provides safe cable access, avoids trip hazards and allows the vehicle to park comfortably.</p>
            <p>Your installer will also consider weather exposure, drainage, ventilation, physical protection and the distance from the switchboard.</p>
          </>} />

          <FAQItem question="How easy is it to charge an EV at home?" answer={<>
            <p>Home charging is simple and convenient. Connect your vehicle when you arrive home and schedule charging for your preferred time using the charger controls or BexaVolt software.</p>
            <p>Your vehicle and charger manage the charging session automatically, allowing you to return to a charged vehicle when you are ready to leave.</p>
          </>} />

        </div>

        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>2. Installation & moving</h2>

          <FAQItem question="Does BexaVolt offer installation?" answer={<>
            <p>Yes. BexaVolt can arrange installation across Australia through qualified, licensed electricians.</p>
            <p>A typical installation includes a site and electrical assessment, mounting, cabling and connection, charger configuration, safety testing and a commissioning handover. Any switchboard upgrades, trenching, long cable runs or other additional work will be quoted separately.</p>
          </>} />

          <FAQItem question="How much does installation usually cost?" answer={<>
            <p>Standard installation starts from $951, excluding the charger. This indicative price generally applies to a straightforward ground-floor installation with the charger within one metre of the switchboard.</p>
            <p>The final price depends on the cable route, distance from the switchboard, wall or post mounting, switchboard condition, electrical upgrades and site complexity. Request a personalised, obligation-free quote before proceeding.</p>
          </>} />

          <FAQItem question="Should I pre-wire a new home for EV charging?" answer={<>
            <p>Yes. Pre-wiring during construction can reduce future installation cost and disruption.</p>
            <p>Ask your builder or electrician to plan the charger position, cable pathway, switchboard capacity, protection devices and any requirements for solar, batteries or load management. BexaVolt can help define the charging requirements before construction is completed.</p>
          </>} />

          <FAQItem question="Can I take my charger when I move?" answer={<>
            <p>Yes. A licensed electrician can safely disconnect the charger and prepare it for relocation.</p>
            <p>The new property must be assessed before reinstallation. BexaVolt can help arrange decommissioning and discuss installation at the new address.</p>
          </>} />

        </div>

        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>3. Charging & performance</h2>

          <FAQItem question="How quickly will a BexaVolt charger charge my vehicle?" answer={<>
            <p>Charging speed depends on the charger, the vehicle’s onboard AC charger and the electrical capacity available at the property.</p>
            <p>As a general guide, a 7.4 kW charger may add up to about 50 km of range per hour, while an X22 charger may add up to about 120 km per hour. Actual results vary with vehicle efficiency, battery condition, temperature and charging losses.</p>
          </>} />

          <FAQItem question="What is home overload protection?" answer={<>
            <p>Home overload protection helps prevent the EV charger from placing excessive demand on the property’s electrical supply.</p>
            <p>A charger can draw up to 32 amps. When other high-demand appliances are operating, the system monitors total electricity use and can reduce charging power to remain within a safe limit. Charging can increase again when household demand falls.</p>
            <p>All BexaVolt chargers include overload protection. Installation and configuration must still be completed by a licensed electrician.</p>
          </>} />

          <FAQItem question="What is the difference between AC and DC charging?" answer={<>
            <p>An AC charger supplies alternating current to the vehicle, where the onboard charger converts it to direct current for the battery. AC charging is practical for homes, workplaces and locations where vehicles remain parked for several hours.</p>
            <p>A DC fast charger converts electricity before it reaches the vehicle and delivers DC power directly to the battery. It charges faster but is generally more complex and expensive to purchase and install.</p>
          </>} />

          <FAQItem question="Will home charging affect my EV battery’s lifespan?" answer={<>
            <p>Regular AC home charging generally places less heat and power stress on a battery than frequent high-power DC fast charging.</p>
            <p>Battery life is also influenced by temperature, charging habits and how often the battery remains at very high or very low charge levels. Always follow the vehicle manufacturer’s charging recommendations.</p>
          </>} />

        </div>

        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>4. Solar & home energy</h2>

          <FAQItem question="Can smart solar charging be added to the Volt Ultra later?" answer={<>
            <p>Yes. Smart solar charging can be added to the BexaVolt Volt Ultra through a software upgrade for a one-time fee of $310. No additional charger hardware or return electrician visit is normally required.</p>
            <p>Without the upgrade, the charger may still use electricity available in the home, including solar generation. Smart solar charging adds greater control by prioritising available solar energy. If solar is planned soon, consider a model with smart solar capability included, such as the BexaVolt Volt Plus.</p>
          </>} />

          <FAQItem question="What is the difference between the BexaVolt Volt Ultra and Volt Plus?" answer={<>
            <p>The Volt Ultra provides dependable smart EV charging with optional solar-optimised functionality. The Volt Plus is designed for customers who want advanced solar and energy-management capabilities included.</p>
            <p>Product inclusions and specifications may change. Contact BexaVolt for a current comparison and help choosing the most suitable model.</p>
          </>} />

          <FAQItem question="Can a BexaVolt charger work with a home battery?" answer={<>
            <p>Yes. A BexaVolt charger can be configured to coordinate with a compatible solar and battery system.</p>
            <p>Depending on the setup, you may choose to charge from stored solar energy, prioritise surplus solar for the vehicle, or preserve battery energy for household use. The available options depend on the energy system, metering and installation configuration.</p>
          </>} />

          <FAQItem question="Can I install a charger at an off-grid property?" answer={<>
            <p>Possibly. Suitability depends on the inverter, solar array, battery capacity, generator arrangements, internet connectivity and the way the site manages electrical loads.</p>
            <p>Some smart features, including solar diversion or overload protection, may require specific metering or connectivity. Have a licensed electrician or off-grid energy specialist assess the system before purchase.</p>
          </>} />

          <FAQItem question="Do BexaVolt chargers support net metering?" answer={<>
            <p>Support depends on the property’s metering arrangement, energy retailer and charger configuration.</p>
            <p>BexaVolt can review your solar and metering setup and recommend an appropriate charging and energy-management solution.</p>
          </>} />

        </div>

        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>5. Commercial & shared sites</h2>

          <FAQItem question="Can BexaVolt install chargers in commercial buildings or apartment complexes?" answer={<>
            <p>Yes. BexaVolt provides charging solutions for workplaces, commercial properties and apartment buildings, including shared or multi-tenant parking areas.</p>
            <p>Solutions can support multiple users and may include tools to monitor charging activity and allocate or recover electricity costs. Site design should consider electrical capacity, load management, access control, billing, future expansion and approvals from the owner, strata committee or body corporate.</p>
          </>} />

        </div>

        <div className={styles.faqContent}>
          <h2 className={styles.sectionTitle}>6. Software, warranty & support</h2>

          <FAQItem question="Is there a subscription fee for BexaVolt software?" answer={<>
            <p>Homeowners and small businesses operating a limited number of chargers can use standard BexaVolt charging software without a subscription fee.</p>
            <p>Businesses that manage multiple chargers or require advanced functionality can select a paid plan suited to their operational needs. Contact BexaVolt to confirm current inclusions and pricing.</p>
          </>} />

          <FAQItem question="Does the charger require a stable internet connection?" answer={<>
            <p>The charger may continue to provide basic charging without a continuous internet connection. However, connectivity is generally required for remote monitoring, notifications, scheduling, software updates and other smart features.</p>
            <p>The available offline functions depend on the charger model and configuration. Contact BexaVolt if your installation has limited or unreliable internet access.</p>
          </>} />

          <FAQItem question="What warranty does BexaVolt provide?" answer={<>
            <p>BexaVolt chargers come with a three-year product warranty for residential and commercial installations. Installations arranged through BexaVolt also include a One-year installation warranty, with the option to purchase an additional two years of coverage.</p>
            <p>Warranty coverage is subject to the applicable terms and conditions, correct installation, and proper use. Contact BexaVolt to confirm current warranty details or submit a warranty enquiry.</p>
          </>} />

          <FAQItem question="What support is available?" answer={<>
            <p>BexaVolt provides local technical support seven days a week for installation questions, product features, charging and troubleshooting. Many issues can be diagnosed remotely.</p>
            <p>For assistance, call +61 2 7241 5565. Have the charger model, serial number, installation address and a description or photo of any displayed error ready where possible.</p>
          </>} />

        </div>

      </div>
      
      <Footer />
    </main>
  );
}
